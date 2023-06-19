"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowButtons = exports.MessageContainer = exports.MainButton = exports.Interested = exports.HardCodedButtonsContainer = exports.Delete = exports.DefaultIconButton = exports.DefaultContainer = exports.Accept = void 0;
var _react = require("@emotion/react");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const MainButton = (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  z-index: 2;\n"])));
exports.MainButton = MainButton;
const DefaultContainer = (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: white;\n  background-color: #673ab7;\n  position:absolute; \n  bottom:10px; \n  right:5px;\n  width: 90%;\n  margin: 5px;\n  padding: 10px;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 12px 12px 5px 5px rgba(0, 0, 0, 0.2);\n\n"])));
exports.DefaultContainer = DefaultContainer;
const ShowButtons = (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: white;\n  font-weight: bold;\n  background-color: #673ab7;\n  float: right;\n  border: none;\n"])));
exports.ShowButtons = ShowButtons;
const HardCodedButtonsContainer = (0, _react.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  float: left;\n"])));
exports.HardCodedButtonsContainer = HardCodedButtonsContainer;
const DefaultIconButton = (0, _react.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: white;\n  font-weight: bold;\n  background-color: #673ab7;\n  display: inline-block;\n  margin: 5px;\n  padding: 20px;\n  height: 50px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n\n"])));
exports.DefaultIconButton = DefaultIconButton;
const Accept = (0, _react.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: #62b73a;\n"])));
exports.Accept = Accept;
const Delete = (0, _react.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: #b73a3a;\n"])));
exports.Delete = Delete;
const Interested = (0, _react.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background-color: #b73a98;\n"])));
exports.Interested = Interested;
const MessageContainer = (0, _react.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  float: top;\n  margin: 5px;\n  padding: 5px;\n"])));
exports.MessageContainer = MessageContainer;