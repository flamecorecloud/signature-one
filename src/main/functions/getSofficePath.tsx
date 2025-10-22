import path from 'path';
import { app } from 'electron';

export function getSofficePath() {
  let sofficePath = '';

  if (app.isPackaged) {
    switch (process.platform) {
      case 'darwin':
        if (process.arch === 'arm64') {
          sofficePath = path.join(
            process.resourcesPath,
            'libreoffice/mac/arm64/LibreOffice.app/Contents/MacOS/soffice'
          );
        } else {
          sofficePath = path.join(
            process.resourcesPath,
            'libreoffice/mac/x86-64/LibreOffice.app/Contents/MacOS/soffice'
          );
        }
        break;
      case 'win32':
        sofficePath = path.join(
          process.resourcesPath,
          'libreoffice/win/x86-64/soffice.exe'
        );
        break;
      case 'linux':
        sofficePath = path.join(
          process.resourcesPath,
          'libreoffice/linux/x86-64/soffice'
        );
        break;
      default:
        throw new Error('Unsupported platform: ' + process.platform);
    }
  } else {
    // Dev mode
    switch (process.platform) {
      case 'darwin':
        sofficePath = path.join(
          __dirname,
          '../../src/resources/libreoffice/mac/' +
            (process.arch === 'arm64' ? 'arm64' : 'x86-64') +
            '/LibreOffice.app/Contents/MacOS/soffice'
        );
        break;
      case 'win32':
        sofficePath = path.join(
          __dirname,
          '../../src/resources/libreoffice/win/x86-64/soffice.exe'
        );
        break;
      case 'linux':
        sofficePath = path.join(
          __dirname,
          '../../src/resources/libreoffice/linux/x86-64/soffice'
        );
        break;
      default:
        throw new Error('Unsupported platform: ' + process.platform);
    }
  }

  return sofficePath;
}
