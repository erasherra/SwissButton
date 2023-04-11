"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showTimedMessage = exports.showMesage = exports.initializeChat = void 0;
require("core-js/modules/es.promise.js");
let setter = null;
const initializeChat = intiSetter => {
  setter = intiSetter;
};
exports.initializeChat = initializeChat;
const showMesage = msg => {
  setter(msg);
};
exports.showMesage = showMesage;
const showTimedMessage = async (msg, time) => {
  setter(msg);
  setTimeout(function () {
    setter("");
  }, time);
};
exports.showTimedMessage = showTimedMessage;