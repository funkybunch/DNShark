const keytar    = require('keytar');
const service   = "DNShark";
let DOKey     = checkDOKey();
let appPasscode   = checkAppPasscode();

function checkDOKey() {
    return keytar.getPassword(service, "DO-Key");
}

function checkAppPasscode() {
    return keytar.getPassword(service, "AppPasscode");
}

exports.promptForDOKey = function() {
    return (DOKey == null);
};

exports.appPasscodeExists = function() {
    return (appPasscode == null);
};

exports.verifyAppKey = function(codeInput) {
    if(appPasscode == null) {
        return null;
    } else {
        return (appPasscode.equals(codeInput));
    }
};

exports.saveDOKey = function(key) {
    keytar.setPassword(service, "DO-Key", key);
    DOKey = key;
};

exports.setAppPasscode = function(passcode) {
    keytar.setPassword(service, "AppPasscode", key);
    appPasscode = key;
};
