const { app, BrowserWindow } = require('electron');
const keys = require('./src/keyManager');
const ipc = require('./src/messaging');
const cli = require('./src/cli');
const path = require('path');
const url = require('url');

const iconUrl = url.format({
  pathname: path.join(__dirname, '/src/assets/DnShark.icns'),
  protocol: 'file:',
  slashes: true
});

// TODO Check for DO API Key using IPC

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    maximizeable: true,
    icon:  iconUrl
  });

  let DOKeyKnown = null;

  // and load the index.html of the app.
  win.loadFile('dist/index.html');
  ipc.asyncListener(
      "DOKeyPromptListener",
      function(arg) {
        DOKeyKnown = arg;
      },
      "DOKeyVerificationSender",
      DOKeyKnown
  )
}

// Run UI if not run via CLI
app.on('ready', () => {
  let wasRunFromCLI = cli.runFromCLI;

  if(!wasRunFromCLI) {
    createWindow();
  }

});