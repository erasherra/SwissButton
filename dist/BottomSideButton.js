"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSideButton = void 0;
var styles = _interopRequireWildcard(require("./styles/mobile"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** @jsxImportSource @emotion/react */
//import styles from "./bottomSide.module.css";

const BottomSideButton = _ref => {
  let {
    elements,
    nodeRef,
    dragHandlers,
    checked,
    currentElements,
    toggleChecked,
    message,
    pos_x,
    pos_y,
    canITeleport,
    logo,
    feeling
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    ref: nodeRef,
    css: styles.MainButton,
    children:
    //canITeleport ? <img className="pop" src={logo} alt="loading..." style={{ zIndex: "6" }}/> : 
    (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)("p", {
        css: styles.MessageContainer,
        children: message
      }), (0, _jsxRuntime.jsxs)("div", {
        css: styles.DefaultContainer,
        children: [(0, _jsxRuntime.jsx)("div", {
          id: "buttons",
          css: styles.ShowButtons,
          children: elements.map(element => {
            return element;
          })
        }), (0, _jsxRuntime.jsx)("div", {
          css: styles.HardCodedButtonsContainer,
          children: (0, _jsxRuntime.jsx)("button", {
            css: styles.DefaultIconButton,
            checked: checked,
            onClick: toggleChecked,
            children: feeling
          })
        })]
      })]
    })
  });
};
exports.BottomSideButton = BottomSideButton;