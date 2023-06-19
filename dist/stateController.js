"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switcher = exports.setButtonState = exports.initializeStateController = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var styles = _interopRequireWildcard(require("./styles/main"));
var _reactRouterDom = require("react-router-dom");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** @jsxImportSource @emotion/react */
//import styles from "./mainButton.module.css";

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
      return (0, _jsxRuntime.jsx)("button", {
        /*className={styles.defaultButtons}*/
        css: styles.DefaultButtons,
        children: (0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: obj.link,
          children: obj.text
        })
      }, obj.key);
    case "Button":
      // code block
      return (0, _jsxRuntime.jsx)("button", {
        onClick: obj.onClickAction
        /*className={styles.defaultButtons}*/,
        css: styles.DefaultButtons,
        children: obj.text
      }, obj.key);
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