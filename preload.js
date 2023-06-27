const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('callback', {
    post: (state) => {
        state.status = 'success';
        ipcRenderer.send('dialog-window-output', state);
    }
})