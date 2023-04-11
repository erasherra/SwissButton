"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bottomSide = exports.asd = void 0;
require("core-js/modules/es.promise.js");
let setter = null;
const bottomSide = intiSetter => {
  setter = intiSetter;
};
exports.bottomSide = bottomSide;
const asd = async (msg, time) => {
  setter(msg);
  setTimeout(function () {
    setter("");
  }, time);
};
exports.asd = asd;