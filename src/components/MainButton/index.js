import { useEffect, useState, useRef } from "react";
import switcher from "./stateController";
import buttonConfig from "./config";
import styles from "./mainButton.module.css";
import Draggable from "react-draggable";
import * as chat from "./actions/chat";
import * as positionUtil from "./utils/positionUtil";

const mainButon = function MainButton({ buttonView = "ROOT", popup = "" }) {
  //Hooks

  const [checked, setChecked] = useState(
    buttonConfig.buttonCheckedState.checked
  );
  const [dragged, setIsDragged] = useState(false);
  const [pos_x, setPosition_X] = useState(buttonConfig.positionX.pos);
  const [pos_y, setPosition_Y] = useState(buttonConfig.positionY.pos);
  const [message, setMessage] = useState(popup);

  chat.initializeChat(setMessage);

  buttonConfig.buttonCheckedState.checked = checked;
  buttonConfig.positionX.pos = pos_x;
  buttonConfig.positionY.pos = pos_y;

  useEffect(() => {
    setChecked(
      JSON.parse(
        window.localStorage.getItem(buttonConfig.buttonCheckedState.name)
      )
    );
    setPosition_X(
      JSON.parse(window.localStorage.getItem(buttonConfig.positionX.name))
    );
    setPosition_Y(
      JSON.parse(window.localStorage.getItem(buttonConfig.positionY.name))
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem(buttonConfig.buttonCheckedState.name, checked);
    window.localStorage.setItem(buttonConfig.positionX.name, pos_x);
    window.localStorage.setItem(buttonConfig.positionY.name, pos_y);
  });

  let currentElements = switcher(buttonView);

  console.log("button psition x: " + pos_x + " y: " + pos_y);
  //Functions
  const toggleChecked = () => {
    if (!dragged) {
      setChecked((value) => !value);
      console.log("clicked");
    } else {
      setIsDragged(false);
    }
  };

  const onStart = () => {
    //setIsDragged(true);
    //console.log("not stopped");
  };

  const onStop = (event, data) => {
    //setIsDragged(false);
    //console.log("stopped");
    setPosition_X(data.x);
    setPosition_Y(data.y);
  };

  const onDrag = () => {
    setIsDragged(true);
  };

  const nodeRef = useRef(null);
  const dragHandlers = { onDrag: onDrag, onStart: onStart, onStop: onStop };

  return (
    <div style={{ position: "fixed", zIndex: "5" }}>
      <Draggable
        nodeRef={nodeRef}
        {...dragHandlers}
        defaultPosition={{ x: pos_x, y: pos_y }}
        //className={styles.MainButton}
      >
        <div ref={nodeRef} className={styles.MainButton}>
          <div className={styles.defaultContainer}>
            {checked ? <Elements current={currentElements} /> : null}
            <div className={styles.buttonsContainer}>
              <button
                className={styles.defaultButtons}
                checked={checked}
                onClick={toggleChecked}
              >
                {checked ? " 😁 " : " 😴 "}
              </button>
            </div>
          </div>
          <p className={styles.messageContainer}>{message}</p>
        </div>
      </Draggable>
    </div>
  );
};

const Elements = ({ current }) => {
  return (
    <div id="buttons" className={styles.showButtons}>
      {current.elements.map((element) => {
        return element.element;
      })}
    </div>
  );
};

export default mainButon;
