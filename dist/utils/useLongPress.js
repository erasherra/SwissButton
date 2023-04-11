"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
const useLongPress = function useLongPress(leavePress, onPress, onLongPress, onClick) {
  let {
    shouldPreventDefault = true,
    delay = 300
  } = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  const [longPressTriggered, setLongPressTriggered] = (0, _react.useState)(false);
  const timeout = (0, _react.useRef)();
  const target = (0, _react.useRef)();
  const start = (0, _react.useCallback)(event => {
    if (shouldPreventDefault && event.target) {
      event.target.addEventListener("touchend", preventDefault, {
        passive: false
      });
      target.current = event.target;
    }
    timeout.current = setTimeout(() => {
      onLongPress(event);
      setLongPressTriggered(true);
    }, delay);
  }, [onLongPress, delay, shouldPreventDefault]);
  const press = (0, _react.useCallback)(event => {
    onPress(event);
  }, [onPress, delay, shouldPreventDefault]);
  const onLeavePress = (0, _react.useCallback)(event => {
    leavePress(event);
  }, [onPress, delay, shouldPreventDefault]);
  const clear = (0, _react.useCallback)(function (event) {
    let shouldTriggerClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    timeout.current && clearTimeout(timeout.current);
    shouldTriggerClick && !longPressTriggered && onClick();
    setLongPressTriggered(false);
    if (shouldPreventDefault && target.current) {
      target.current.removeEventListener("touchend", preventDefault);
    }
  }, [shouldPreventDefault, onClick, longPressTriggered]);
  return {
    onMouseDown: e => {
      start(e);
      press();
    },
    onTouchStart: e => {
      start(e);
      press();
    },
    onMouseUp: e => {
      clear(e);
      onLeavePress(e);
    },
    onMouseLeave: e => {
      clear(e, false);
      onLeavePress(e);
    },
    onTouchEnd: e => {
      clear(e);
      onLeavePress(e);
    }
  };
};
const isTouchEvent = event => {
  return "touches" in event;
};
const preventDefault = event => {
  if (!isTouchEvent(event)) return;
  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};
var _default = useLongPress;
exports.default = _default;