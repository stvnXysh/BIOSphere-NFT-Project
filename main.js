const { app, BrowserWindow } = require('electron');  
  
function createWindow() {  
  const win = new BrowserWindow({  
    width: 800,  
    height: 600,  
    webPreferences: {  
      preload: require('path').join(__dirname, 'preload.js')  
    }  
  });  
  win.loadURL('https://your-app-url.com'); // Replace with your app URL or local file  
}  
  
app.whenReady().then(createWindow);  