/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, dialog, screen } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import { execFile, spawn } from 'child_process';
import { postProcessPDF } from './functions/postProcessPDF';
// import { getSofficePath } from './functions/getSofficePath';
import { converterMap } from './functions/filterAction';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug').default();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload,
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    show: false,
    width: width,
    height: height,
    minWidth: 800,
    minHeight: 600,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

// === FEATURES ===
// const sofficePath = getSofficePath();
// console.log('Using LibreOffice binary:', sofficePath);

ipcMain.handle('libre-version', async () => {
  try {
    // return await new Promise((resolve, reject) => {
    //   execFile(sofficePath, ['--version'], (err: any, stdout: any) => {
    //     if (err) {
    //       console.error('LibreOffice version check failed:', err);
    //       return reject(err);
    //     }
    //     resolve(stdout.trim());
    //   });
    // });
    return '-'
  } catch (err: any) {
    return `Error checking LibreOffice version: ${err.message}`;
  }
});

ipcMain.handle('select-cert-file', async () => {
  const result = await dialog.showOpenDialog({
    title: 'Select the digital certificate file (.p12)',
    filters: [{ name: 'Certificates', extensions: ['p12', 'pfx'] }],
    properties: ['openFile'],
  });

  if (result.canceled || result.filePaths.length === 0) return null;
  return result.filePaths[0];
});

ipcMain.handle('upload-file', async (event, params) => {
  const { action, options, placeholder } = params || {};
  console.log(
    'action:',
    action,
    'options:',
    options,
    'placeholder:',
    placeholder,
  );

  const win = BrowserWindow.getFocusedWindow();

  const sendProgress = (value: any, message: any) => {
    if (win && !win.isDestroyed()) {
      win.webContents.send('convert-progress', { value, message });
    }
  };

  type ConverterAction = keyof typeof converterMap;

  function getConverterOptions(action: ConverterAction) {
    return (
      converterMap[action] || {
        filters: [
          {
            name: 'Documents',
            extensions: [
              'doc',
              'docx',
              'xls',
              'xlsx',
              'ppt',
              'pptx',
              'pdf',
              'txt',
              'odt',
              'ods',
              'csv',
              'html',
              'rtf',
              'odp',
              'jpg',
              'jpeg',
              'png',
              'bmp',
              'tiff',
            ],
          },
        ],
        convertTo: 'pdf:writer_pdf_Export',
      }
    );
  }

  const { filters, convertTo } = getConverterOptions(action as ConverterAction);

  const result = await dialog.showOpenDialog({
    title: 'Select files to upload',
    properties: ['openFile', 'multiSelections'],
    filters,
  });

  if (result.canceled || result.filePaths.length === 0) return null;

  const files = result.filePaths;
  const total = files.length;
  const results = [];

  type ConverterKey = keyof typeof converterMap;

  for (let i = 0; i < total; i++) {
    const key: ConverterKey = action;

    const filePath = files[i];
    const outputDir = path.dirname(filePath);

    const converter = converterMap[key];
    const targetExt = converter.convertTo.split(':')[0];

    const outputFile = path.join(
      outputDir,
      path.basename(filePath, path.extname(filePath)) + '.' + targetExt,
    );
    

    sendProgress(
      Math.round((i / total) * 10),
      `Processing file ${i + 1} of ${total}...`,
    );

    try {
      if(action === "pdf-to-sign"){
        if (options?.pdf) {
          const result = await postProcessPDF(filePath, options, placeholder, action);
          console.log('pdf-to-sign', result)
          results.push({
            input : filePath,
            output : result.output,
            status : result.status,
            message : result.message
          });
          sendProgress(
            Math.round(((i + 1) / total) * 100),
            `Completed ${i + 1}/${total}`,
          );
        }
      } else {
        // const conversionResult = await new Promise((resolve, reject) => {
        //   const libre = spawn(sofficePath, [
        //     '--headless',
        //     '--nologo',
        //     '--nofirststartwizard',
        //     '--norestore',
        //     '--invisible',
        //     '--nodefault',
        //     '--nolockcheck',
        //     '--convert-to',
        //     convertTo,
        //     '--outdir',
        //     outputDir,
        //     filePath,
        //   ]);
  
        //   libre.on('error', (err) => {
        //     console.error(`Failed to start LibreOffice: ${err.message}`);
        //     reject(err); // reject promise biar caller tau
        //   });
  
        //   libre.stdout.on('data', (data) =>
        //     console.log('stdout:', data.toString()),
        //   );
        //   libre.stderr.on('data', (data) =>
        //     console.error('stderr:', data.toString()),
        //   );
  
        //   libre.on('close', async (code) => {
        //     if (code === 0) {
        //       try {
        //         if (options?.pdf) {
        //           const result = await postProcessPDF(outputFile, options, placeholder, action);
        //           console.log('pdf-to-sign conver', result)
        //           resolve({ 
        //             input : filePath,
        //             output : result.output,
        //             status : result.status,
        //             message : result.message
        //           });
        //         } else {
        //           resolve({ 
        //             input: filePath, 
        //             output: outputFile,
        //             status : 'success',
        //             message : "Convert Successfully"
        //           });
        //         }
        //       } catch (err) {
        //         reject(err);
        //       }
        //     } else {
        //       reject(
        //         new Error(
        //           `LibreOffice failed to convert ${filePath} (exit code ${code})`,
        //         ),
        //       );
        //     }
        //   });
        // });
  
        // results.push(conversionResult);
        // sendProgress(
        //   Math.round(((i + 1) / total) * 100),
        //   `Completed ${i + 1}/${total}`,
        // );
      }
    } catch (err: any) {
      console.error('Conversion failed for file:', filePath, err);
      results.push({
        filePath,
        status : 'error',
        message : err.message
      });
      sendProgress(0, `Error converting ${filePath}: ${err.message}`);
    }
  }

  sendProgress(100, `Conversion of ${total} file(s) completed`);
  return results;
});
