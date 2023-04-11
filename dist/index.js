"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var stateController = _interopRequireWildcard(require("./stateController"));
var _config = _interopRequireDefault(require("./config"));
var _mainButtonModule = _interopRequireDefault(require("./mainButton.module.css"));
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var chat = _interopRequireWildcard(require("./actions/chat"));
var positionUtil = _interopRequireWildcard(require("./utils/positionUtil"));
var _useLongPress = _interopRequireDefault(require("./utils/useLongPress"));
var _pop = _interopRequireDefault(require("./assets/pop.gif"));
var feelings = _interopRequireWildcard(require("./actions/feelings"));
var _BottomSideButton = _interopRequireDefault(require("./BottomSideButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const mainButon = function MainButton(_ref) {
  let {
    elements = [[]],
    buttonView = "ROOT",
    popup = ""
  } = _ref;
  //Hooks
  const [width, setWidth] = (0, _react.useState)(window.innerWidth);
  const [checked, setChecked] = (0, _react.useState)(_config.default.buttonCheckedState.checked);
  const [dragged, setIsDragged] = (0, _react.useState)(false);
  const [canITeleport, setCanITeleport] = (0, _react.useState)(true);
  const [pos_x, setPosition_X] = (0, _react.useState)(_config.default.positionX.pos);
  const [pos_y, setPosition_Y] = (0, _react.useState)(_config.default.positionY.pos);
  const [message, setMessage] = (0, _react.useState)(popup);
  const [buttonState, setButtonState] = (0, _react.useState)(buttonView);
  const [feeling, setFeeling] = (0, _react.useState)(null);
  stateController.initializeStateController(setButtonState, elements);
  chat.initializeChat(setMessage);
  feelings.initialize(setFeeling);
  _config.default.buttonCheckedState.checked = checked;
  _config.default.positionX.pos = pos_x;
  _config.default.positionY.pos = pos_y;
  (0, _react.useEffect)(() => {
    setChecked(JSON.parse(window.localStorage.getItem(_config.default.buttonCheckedState.name)));
    setPosition_X(JSON.parse(window.localStorage.getItem(_config.default.positionX.name)));
    setPosition_Y(JSON.parse(window.localStorage.getItem(_config.default.positionY.name)));
  }, []);
  (0, _react.useEffect)(() => {
    window.localStorage.setItem(_config.default.buttonCheckedState.name, checked);
    window.localStorage.setItem(_config.default.positionX.name, pos_x);
    window.localStorage.setItem(_config.default.positionY.name, pos_y);
  });
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  (0, _react.useEffect)(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  let currentElements = stateController.switcher(buttonState);

  //console.log("button psition x: " + pos_x + " y: " + pos_y);
  //Functions
  const toggleChecked = () => {
    console.log("toggleChecked");
    if (!dragged) {
      setChecked(value => !value);
    } else {
      setIsDragged(false);
    }
  };
  const onStart = () => {
    setCanITeleport(false);
  };
  const onStop = (event, data) => {
    setTimeout(setCanITeleport(true), 500);
    if (data) {
      setPosition_X(data.x);
      setPosition_Y(data.y);
    } else {
      feelings.disy();
      teleport(event);
      setTimeout(feelings.sleep, 3000);
    }
  };
  const onDrag = () => {
    setCanITeleport(false);
    setIsDragged(true);
  };
  const nodeRef = (0, _react.useRef)(null);
  const dragHandlers = {
    onDrag: onDrag,
    onStart: onStart,
    onStop: onStop
  };
  const teleport = e => {
    //console.log(e.type, e)

    if (e.type === "touchstart") {
      setPosition_X(e.changedTouches[0].pageX);
      setPosition_Y(e.changedTouches[0].pageY);
    } else {
      setPosition_X(e.pageX);
      setPosition_Y(e.pageY);
    }
    setChecked(false);
    chat.showTimedMessage([/*#__PURE__*/React.createElement("img", {
      fill: "red",
      className: "pop",
      src: _pop.default,
      alt: "loading...",
      style: {
        position: "fixed",
        zIndex: "6",
        top: "-40%",
        left: "-25%"
      }
    }), /*#__PURE__*/React.createElement("img", {
      fill: "red",
      className: "pop",
      src: _pop.default,
      alt: "loading...",
      style: {
        position: "fixed",
        zIndex: "6",
        top: "-10%",
        left: "-10%"
      }
    }), /*#__PURE__*/React.createElement("img", {
      fill: "red",
      className: "pop",
      src: _pop.default,
      alt: "loading...",
      style: {
        position: "fixed",
        zIndex: "6",
        top: "-100%",
        left: "-50%"
      }
    })], 300);
  };
  const onLongPress = e => {
    console.log('longpress is triggered');
    if (canITeleport) {
      onStop(e);
    }
  };
  const onClick = e => {
    console.log('click is triggered');
  };
  const onPress = e => {
    if (feeling === feelings.getSleepValue()) {
      feelings.readyToJump();
    }
  };
  const leavePress = e => {
    if (feeling === feelings.getReadyToJumpValue()) {
      feelings.sleep();
    }
  };
  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1500
  };
  const longPressEvent = (0, _useLongPress.default)(leavePress, onPress, onLongPress, onClick, defaultOptions);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: '15%',
      width: '100%',
      position: 'fixed',
      bottom: '0px',
      zIndex: "5"
    }
  }, /*#__PURE__*/React.createElement(_BottomSideButton.default, {
    elements: currentElements,
    nodeRef: nodeRef,
    dragHandlers: dragHandlers,
    checked: checked,
    currentElements: currentElements,
    toggleChecked: toggleChecked,
    message: message,
    pos_x: pos_x,
    pos_y: pos_y,
    canITeleport: canITeleport,
    logo: _pop.default,
    feeling: feelings.getSmileValue()
  })) : /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height: '100%',
      position: 'absolute',
      left: '0px',
      width: '100%',
      overflow: 'hidden'
    }
  }, longPressEvent), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      zIndex: "5"
    }
  }, /*#__PURE__*/React.createElement(DraggableElement, {
    nodeRef: nodeRef,
    dragHandlers: dragHandlers,
    checked: checked,
    currentElements: currentElements,
    toggleChecked: toggleChecked,
    message: message,
    pos_x: pos_x,
    pos_y: pos_y,
    canITeleport: canITeleport,
    logo: _pop.default,
    feeling: feeling
  }))));
};
const DraggableElement = _ref2 => {
  let {
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
  } = _ref2;
  //console.log("DraggableElement ", pos_x, pos_y)
  if (!checked) {
    console.log("DEBUG");
    if (feeling === null || feeling === feelings.getSmileValue()) {
      feelings.sleep();
    }
  } else if (checked && feeling === feelings.getSleepValue()) {
    feelings.smile();
  }
  return /*#__PURE__*/React.createElement(_reactDraggable.default, _extends({
    nodeRef: nodeRef
  }, dragHandlers, {
    defaultPosition: {
      x: pos_x,
      y: pos_y
    },
    position: pos_x && pos_y ? {
      x: pos_x,
      y: pos_y
    } : null,
    positionOffset: pos_x && pos_y ? {
      x: -100,
      y: -200
    } : null
    //className={styles.MainButton}
  }), /*#__PURE__*/React.createElement("div", {
    ref: nodeRef,
    className: _mainButtonModule.default.MainButton
  },
  /*#__PURE__*/
  //canITeleport ? <img className="pop" src={logo} alt="loading..." style={{ zIndex: "6" }}/> : 
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _mainButtonModule.default.defaultContainer
  }, checked ? /*#__PURE__*/React.createElement(Elements, {
    elements: currentElements
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: _mainButtonModule.default.hardCodedButtonsContainer
  }, /*#__PURE__*/React.createElement("button", {
    className: _mainButtonModule.default.defaultIconButton,
    checked: checked,
    onClick: toggleChecked
  }, feeling))), /*#__PURE__*/React.createElement("p", {
    className: _mainButtonModule.default.messageContainer
  }, message))));
};
const Elements = _ref3 => {
  let {
    elements
  } = _ref3;
  //console.log(elements)
  return /*#__PURE__*/React.createElement("div", {
    id: "buttons",
    className: _mainButtonModule.default.showButtons
  }, elements.map(element => {
    return element;
  }));
};
var _default = mainButon;
exports.default = _default;