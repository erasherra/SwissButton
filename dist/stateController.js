"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switcher = exports.setButtonState = exports.initializeStateController = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _mainButtonModule = _interopRequireDefault(require("./mainButton.module.css"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let stateChanger = null;
let objects = null;
const switcher = state => {
  const objectList = objects.get(state);
  //console.log("STATE:", state)
  const elements = objectList.map(obj => getElement(obj));
  //console.log(elements)
  return elements;
};
exports.switcher = switcher;
const getElement = obj => {
  if (!obj && !obj.type) {
    return null;
  }
  switch (obj.type) {
    case "Link":
      // code block
      return /*#__PURE__*/React.createElement("button", {
        key: obj.key,
        className: _mainButtonModule.default.defaultButtons
      }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
        to: obj.link
      }, obj.text));
    case "Button":
      // code block
      return /*#__PURE__*/React.createElement("button", {
        key: obj.key,
        className: _mainButtonModule.default.defaultButtons,
        onClick: obj.onClickAction
      }, obj.text);
    default:
      return null;
  }
};
const initializeStateController = function initializeStateController(setHook) {
  let objectMatrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [[]];
  stateChanger = setHook;
  objects = new Map(objectMatrix);
};
exports.initializeStateController = initializeStateController;
const setButtonState = newState => {
  stateChanger(newState);
};
exports.setButtonState = setButtonState;