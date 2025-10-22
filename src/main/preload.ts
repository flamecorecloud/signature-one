// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

contextBridge.exposeInMainWorld('electronAPI', {
  getLibreVersion: () => ipcRenderer.invoke("libre-version"),
  uploadFile: (params:any) => ipcRenderer.invoke('upload-file', params),
  selectCertFile: () => ipcRenderer.invoke('select-cert-file'),
  onConvertProgress: (callback:any) => {
    ipcRenderer.on('convert-progress', (_event, data) => {
      callback(data);
    });
  },
});

contextBridge.exposeInMainWorld("pandoc", {
  convert: (inputPath: string, outputFormat: string) =>
    ipcRenderer.invoke("pandoc:convert", inputPath, outputFormat),
});

export type ElectronHandler = typeof electronHandler;
