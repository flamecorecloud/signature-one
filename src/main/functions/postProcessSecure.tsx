import crypto from 'crypto';
import fs from 'fs';

export function encryptWithExpiry(inputPath:any, outputPath:any, password:any, expiryDate:any) {
  const key = crypto.createHash('sha256').update(password).digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

  const metadata = JSON.stringify({ expiry: expiryDate.toISOString() });
  const metadataBuffer = Buffer.from(metadata);
  const metadataLength = Buffer.alloc(4);
  metadataLength.writeUInt32BE(metadataBuffer.length);

  const input = fs.readFileSync(inputPath);
  const encrypted = Buffer.concat([cipher.update(input), cipher.final()]);

  fs.writeFileSync(outputPath, Buffer.concat([iv, metadataLength, metadataBuffer, encrypted]));
  return outputPath;
}

export function decryptWithExpiry(inputPath:any, outputPath:any, password:any) {
  const fileBuffer = fs.readFileSync(inputPath);
  const iv = fileBuffer.subarray(0, 16);
  const metadataLength = fileBuffer.readUInt32BE(16);
  const metadataStart = 20;
  const metadataEnd = metadataStart + metadataLength;

  const metadataBuffer = fileBuffer.subarray(metadataStart, metadataEnd);
  const metadata = JSON.parse(metadataBuffer.toString());
  const expiry = new Date(metadata.expiry);

  if (new Date() > expiry) {
    throw new Error('The file has expired and cannot be opened.');
  }

  const encryptedData = fileBuffer.subarray(metadataEnd);
  const key = crypto.createHash('sha256').update(password).digest();
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  const decrypted = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
  fs.writeFileSync(outputPath, decrypted);
  return outputPath;
}
