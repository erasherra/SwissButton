import { useCallback, useRef, useState } from "react";

const useLongPress = (
    leavePress,
    onPress,
    onLongPress,
    onClick,
    { shouldPreventDefault = true, delay = 300 } = {}
    ) => {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timeout = useRef();
    const target = useRef();

    const start = useCallback(
        event => {
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
        },
        [onLongPress, delay, shouldPreventDefault]
    );

    const press = useCallback(
        event => {
            onPress(event)
        },
        [onPress, delay, shouldPreventDefault]
    );

    const onLeavePress = useCallback(
        event => {
            leavePress(event)
        },
        [onPress, delay, shouldPreventDefault]
    );

    const clear = useCallback(
        (event, shouldTriggerClick = true) => {
            timeout.current && clearTimeout(timeout.current);
            shouldTriggerClick && !longPressTriggered && onClick();
            setLongPressTriggered(false);
            if (shouldPreventDefault && target.current) {
                target.current.removeEventListener("touchend", preventDefault);
            }
        },
        [shouldPreventDefault, onClick, longPressTriggered]
    );

    return {
        onMouseDown: e => {start(e); press();},
        onTouchStart: e => {start(e); press();},
        onMouseUp: e => {clear(e); onLeavePress(e)},
        onMouseLeave: e => {clear(e, false); onLeavePress(e)},
        onTouchEnd: e => {clear(e); onLeavePress(e)}
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

export default useLongPress;