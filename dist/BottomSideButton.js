"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _bottomSideModule = _interopRequireDefault(require("./bottomSide.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  return /*#__PURE__*/React.createElement("div", {
    ref: nodeRef,
    className: _bottomSideModule.default.MainButton
  },
  /*#__PURE__*/
  //canITeleport ? <img className="pop" src={logo} alt="loading..." style={{ zIndex: "6" }}/> : 
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: _bottomSideModule.default.messageContainer
  }, message), /*#__PURE__*/React.createElement("div", {
    className: _bottomSideModule.default.defaultContainer
  }, /*#__PURE__*/React.createElement("div", {
    id: "buttons",
    className: _bottomSideModule.default.showButtons
  }, elements.map(element => {
    return element;
  })), /*#__PURE__*/React.createElement("div", {
    className: _bottomSideModule.default.hardCodedButtonsContainer
  }, /*#__PURE__*/React.createElement("button", {
    className: _bottomSideModule.default.defaultIconButton,
    checked: checked,
    onClick: toggleChecked
  }, feeling)))));
};
var _default = BottomSideButton;
exports.default = _default;