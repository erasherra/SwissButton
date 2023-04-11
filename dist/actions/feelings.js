"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textForTime = exports.smile = exports.sleep = exports.setText = exports.ring = exports.readyToJump = exports.money = exports.initialize = exports.heartEye = exports.heart = exports.getSmileValue = exports.getSleepValue = exports.getReadyToJumpValue = exports.getDisyValue = exports.disy = exports.cry = void 0;
require("core-js/modules/es.promise.js");
let setter = null;
const initialize = intiSetter => {
  setter = intiSetter;
};
exports.initialize = initialize;
const textForTime = async (text, time, defaultText) => {
  setter(text);
  setTimeout(function () {
    setter(defaultText);
  }, time);
};
exports.textForTime = textForTime;
const setText = async text => {
  setter(text);
};
exports.setText = setText;
const smile = async () => {
  setter(" 😁 ");
};
exports.smile = smile;
const cry = async () => {
  setter(" 😢 ");
};
exports.cry = cry;
const sleep = async () => {
  setter(" 😴 ");
};
exports.sleep = sleep;
const money = async () => {
  setter(" 🤑 ");
};
exports.money = money;
const heartEye = async () => {
  setter(" 😍 ");
};
exports.heartEye = heartEye;
const heart = async () => {
  setter(" ❤️ ");
};
exports.heart = heart;
const ring = async () => {
  setter(" 💍 ");
};
exports.ring = ring;
const readyToJump = async () => {
  setter(" 😣 ");
};
exports.readyToJump = readyToJump;
const disy = async () => {
  setter(" 😵 ");
};
exports.disy = disy;
const getSleepValue = () => {
  return " 😴 ";
};
exports.getSleepValue = getSleepValue;
const getSmileValue = () => {
  return " 😁 ";
};
exports.getSmileValue = getSmileValue;
const getReadyToJumpValue = () => {
  return " 😣 ";
};
exports.getReadyToJumpValue = getReadyToJumpValue;
const getDisyValue = () => {
  return " 😵 ";
};
exports.getDisyValue = getDisyValue;