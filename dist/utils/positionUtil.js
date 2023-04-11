"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMouseUp = exports.handleMouseDown = void 0;
let clickHoldTimer = null;
const handleMouseDown = () => {
  clickHoldTimer = setTimeout(() => {
    //Action to be performed after holding down mouse
    console.log("YOU SUMMONED ME");
  }, 1000); //Change 1000 to number of milliseconds required for mouse hold
};
exports.handleMouseDown = handleMouseDown;
const handleMouseUp = () => {
  clearTimeout(clickHoldTimer);
};
exports.handleMouseUp = handleMouseUp;