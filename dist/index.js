"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainButton = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var stateController = _interopRequireWildcard(require("./stateController"));
var _config = _interopRequireDefault(require("./config"));
var styles = _interopRequireWildcard(require("./styles/main"));
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var chat = _interopRequireWildcard(require("./actions/chat"));
var positionUtil = _interopRequireWildcard(require("./utils/positionUtil"));
var _useLongPress = require("./utils/useLongPress");
var feelings = _interopRequireWildcard(require("./actions/feelings"));
var _BottomSideButton = require("./BottomSideButton");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /** @jsxImportSource @emotion/react */ //import styles from "./mainButton.module.css";
const MainButton = function MainButton(_ref) {
  let {
    buttonState = null,
    setButtonState = null,
    elements = [[]],
    buttonView = "ROOT",
    popup = "",
    teleportEffect = null
  } = _ref;
  //Hooks
  const [width, setWidth] = (0, _react.useState)(window.innerWidth);
  const [checked, setChecked] = (0, _react.useState)(_config.default.buttonCheckedState.checked);
  const [dragged, setIsDragged] = (0, _react.useState)(false);
  const [canITeleport, setCanITeleport] = (0, _react.useState)(true);
  const [pos_x, setPosition_X] = (0, _react.useState)(_config.default.positionX.pos);
  const [pos_y, setPosition_Y] = (0, _react.useState)(_config.default.positionY.pos);
  const [message, setMessage] = (0, _react.useState)(popup);
  // const [buttonState, setButtonState] = useState(buttonView);
  const [feeling, setFeeling] = (0, _react.useState)(null);
  const teleporteffect = teleportEffect;
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
    if (teleporteffect) {
      chat.showTimedMessage([(0, _jsxRuntime.jsx)("img", {
        fill: "red",
        className: "pop",
        src: teleporteffect,
        alt: "loading...",
        style: {
          position: "fixed",
          zIndex: "6",
          top: "0%",
          left: "0%"
        }
      })], 300);
    }
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
  const longPressEvent = (0, _useLongPress.useLongPress)(leavePress, onPress, onLongPress, onClick, defaultOptions);
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: isMobile ? (0, _jsxRuntime.jsx)("div", {
      style: {
        height: '15%',
        width: '100%',
        position: 'fixed',
        bottom: '0px',
        zIndex: "5"
      },
      children: (0, _jsxRuntime.jsx)(_BottomSideButton.BottomSideButton, {
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
        teleporteffect: teleporteffect,
        feeling: feelings.getSmileValue()
      })
    }) : (0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
      style: {
        height: '100%',
        position: 'absolute',
        left: '0px',
        width: '100%',
        overflow: 'hidden'
      }
    }, longPressEvent), {}, {
      children: (0, _jsxRuntime.jsx)("div", {
        style: {
          position: "fixed",
          zIndex: "5"
        },
        children: (0, _jsxRuntime.jsx)(DraggableElement, {
          nodeRef: nodeRef,
          dragHandlers: dragHandlers,
          checked: checked,
          currentElements: currentElements,
          toggleChecked: toggleChecked,
          message: message,
          pos_x: pos_x,
          pos_y: pos_y,
          canITeleport: canITeleport,
          teleporteffect: teleporteffect,
          feeling: feeling
        })
      })
    }))
  });
};
exports.MainButton = MainButton;
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
    teleporteffect,
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
  return (0, _jsxRuntime.jsx)(_reactDraggable.default, _objectSpread(_objectSpread({
    nodeRef: nodeRef
  }, dragHandlers), {}, {
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
    ,
    children: (0, _jsxRuntime.jsx)("div", {
      ref: nodeRef,
      css: styles.MainButton,
      children:
      //canITeleport ? <img className="pop" src={teleporteffect} alt="loading..." style={{ zIndex: "6" }}/> : 
      (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsxs)("div", {
          css: styles.DefaultContainer,
          children: [checked ? (0, _jsxRuntime.jsx)(Elements, {
            elements: currentElements
          }) : null, (0, _jsxRuntime.jsx)("div", {
            css: styles.HardCodedButtonsContainer,
            children: (0, _jsxRuntime.jsx)("button", {
              css: styles.DefaultIconButton,
              checked: checked,
              onClick: toggleChecked,
              children: feeling
            })
          })]
        }), (0, _jsxRuntime.jsx)("p", {
          css: styles.MessageContainer,
          children: message
        })]
      })
    })
  }));
};
const Elements = _ref3 => {
  let {
    elements
  } = _ref3;
  //console.log(elements)
  return (
    // <div id="buttons" className={styles.showButtons}> LEGACY STYLE
    (0, _jsxRuntime.jsx)("div", {
      id: "buttons",
      css: styles.ShowButtons,
      children: elements.map(element => {
        return element;
      })
    })
  );
};