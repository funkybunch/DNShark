const { ipcMain } = require('electron');

/**
 * function asyncListener()
 *
 * Listens for a message in the main process on a defined channel and takes
 * action based on the response.  Sends an asynchronous response to a configurable channel.
 *
 * @String      receiver - The channel to listen for a response on.
 * @function    handler  - An Anonymous function to handle the receipt of a message.
 * @String      sender   - The channel to send a response to.
 * @String      response - The response to send on the sender channel.
 */
exports.asyncListener = function (receiver, handler, sender, response) {
    ipcMain.on(receiver, (event, arg) => {
        handler(arg);
        event.reply(sender, response);
    });
};

/**
 * function syncListener()
 *
 * Listens for a message in the main process on a defined channel and takes
 * action based on the response.  Sends an synchronous response to the same channel.
 *
 * @String      receiver - The channel to listen for a response on.
 * @function    handler  - An Anonymous function to handle the receipt of a message.
 * @String      response - The response to send on the same channel.
 */
exports.syncListener = function (receiver, handler, response) {
    ipcMain.on(receiver, (event, arg) => {
        handler(arg);
        event.returnValue = response;
    })
};

/**
 * function sendToMain()
 *
 * Sends a one-way message to the render process on a defined channel.  Window Object is required.
 *
 * @param window
 * @param sender
 * @param message
 */
exports.sendToMain = function(window, sender, message) {
    window.webContents.send(sender, message);
};
