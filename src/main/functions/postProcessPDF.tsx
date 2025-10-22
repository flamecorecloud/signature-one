import { PDFDocument, rgb, degrees } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { plainAddPlaceholder } from '@signpdf/placeholder-plain';
import { SignPdf } from '@signpdf/signpdf';
import { P12Signer } from '@signpdf/signer-p12';
// import { addExpiryVisualBlock } from './postProcessPDFExpired';

export async function postProcessPDF(
  outputFile: any,
  options: any,
  placeholder: any,
  action: any,
) {
  try {
    const { watermark, signPdf, certPath, certPassword, pdf, folder } = options;

    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const pdfBytes = fs.readFileSync(outputFile);
    const pdfDoc = await PDFDocument.load(pdfBytes);

    if (watermark) {
      const pages = pdfDoc.getPages();
      for (const page of pages) {
        const { width, height } = page.getSize();
        page.drawText(watermark, {
          x: width / 2 - 120,
          y: height / 2,
          size: 48,
          opacity: 0.15,
          rotate: degrees(45),
          color: rgb(0.8, 0.1, 0.1),
        });
      }
    }

    const newPdfBytes = await pdfDoc.save({ useObjectStreams: false });
    let pdfBuffer;

    let tempFile;
    if (signPdf) {
      if (action === 'pdf-to-sign') {
        tempFile = outputFile.replace('.pdf', '-to-sign.pdf');
      } else {
        tempFile = outputFile.replace('.pdf', '-unsign.pdf');
      }

      fs.writeFileSync(tempFile, newPdfBytes);
      pdfBuffer = fs.readFileSync(tempFile);
    } else {
      fs.writeFileSync(outputFile, newPdfBytes);
      pdfBuffer = fs.readFileSync(outputFile);
    }

    if (signPdf && certPath) {
      const pdfWithPlaceholder = plainAddPlaceholder({
        pdfBuffer,
        ...placeholder,
      });

      const p12Buffer = fs.readFileSync(certPath);
      const signer = new SignPdf();
      const p12Signer = new P12Signer(p12Buffer, { passphrase: certPassword });

      const signedPdf = await signer.sign(pdfWithPlaceholder, p12Signer);

      const signedDir = path.join(outputDir, folder || 'signed');
      if (!fs.existsSync(signedDir)) {
        fs.mkdirSync(signedDir, { recursive: true });
      }

      const baseName = path.basename(outputFile, '.pdf');
      const signedFile = path.join(signedDir, `${baseName}-signed.pdf`);

      fs.writeFileSync(signedFile, signedPdf);
      console.log(`✅ PDF signed successfully: ${signedFile}`);

      return {
        output: signedFile,
        status : 'success',
        message: 'Successfully',
      };
    } else {

      fs.writeFileSync(outputFile, pdfBuffer);
      console.log(`✅ Watermarked PDF saved: ${outputFile}`);
      return {
        output: outputFile,
        status : 'success',
        message: 'Successfully',
      };
    }
  } catch (err:any) {
    return {
      output: outputFile,
      status : 'error',
      message: err.message,
    };
  }
}
