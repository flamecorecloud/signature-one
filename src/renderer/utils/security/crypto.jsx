import CryptoJS from "crypto-js";

const SECRET = process.env.VITE_ENCRYPT_SECRET;
const ENCRYPTION_KEY = CryptoJS.SHA256(SECRET);

export function encryptAES256(text) {
    const iv = CryptoJS.lib.WordArray.random(16); // iv random
    const encrypted = CryptoJS.AES.encrypt(text, ENCRYPTION_KEY, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return {
        iv: CryptoJS.enc.Base64.stringify(iv),
        data: encrypted.toString(), // ciphertext base64
    };
}

export function decryptAES256(encryptedData) {
    const iv = CryptoJS.enc.Base64.parse(encryptedData.iv);
    const decrypted = CryptoJS.AES.decrypt(encryptedData.data, ENCRYPTION_KEY, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
}
