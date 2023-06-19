"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowButtons = exports.MessageContainer = exports.MainButton = exports.Interested = exports.HardCodedButtonsContainer = exports.Delete = exports.DefaultIconButton = exports.DefaultContainer = exports.DefaultButtons = exports.Accept = void 0;
var _react = require("@emotion/react");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const MainButton = (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 2;\n"])));
exports.MainButton = MainButton;
const HardCodedButtonsContainer = (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n"])));
exports.HardCodedButtonsContainer = HardCodedButtonsContainer;
const DefaultIconButton = (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: white;\n  font-weight: bold;\n  background-color: #673ab7;\n  display: inline-block;\n  margin: 5px;\n  padding: 20px;\n  height: 50px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    opacity: 0.7;\n  }\n"])));
exports.DefaultIconButton = DefaultIconButton;
const DefaultButtons = (0, _react.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: white;\n  font-weight: bold;\n  background-color: #673ab7;\n  display: inline-block;\n  margin: 5px;\n  padding: 20px;\n  height: 50px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    opacity: 0.7;\n  }\n"])));
exports.DefaultButtons = DefaultButtons;
const ShowButtons = (0, _react.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: white;\n  font-weight: bold;\n  background-color: #673ab7;\n  display: inline-block;\n  float: right;\n  border: none;\n"])));
exports.ShowButtons = ShowButtons;
const Accept = (0, _react.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: #62b73a;\n"])));
exports.Accept = Accept;
const Delete = (0, _react.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: #b73a3a;\n"])));
exports.Delete = Delete;
const Interested = (0, _react.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background-color: #b73a98;\n"])));
exports.Interested = Interested;
const DefaultContainer = (0, _react.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: white;\n  background-color: #673ab7;\n  display: inline-block;\n  float: right;\n  margin: 5px;\n  padding: 5px;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 12px 12px 5px 5px rgba(0, 0, 0, 0.2);\n\n  /*transition: width 0.5s;*/\n\n"])));
exports.DefaultContainer = DefaultContainer;
const MessageContainer = (0, _react.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  float: right;\n  margin: 5px;\n  padding: 5px;\n"])));
exports.MessageContainer = MessageContainer;