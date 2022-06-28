/// WOEKING CODE 1 v1

import { useEffect, useState, useRef } from "react";
import { switcher } from "./stateController";
import buttonConfig from "./config";
import styles from "./mainButton.module.css";
import Draggable from "react-draggable";
import useCollapse from "react-collapsed";

let mainButon = function MainButton({ buttonView = "ROOT" }) {
  //Hooks

  const [checked, setChecked] = useState(
    buttonConfig.buttonCheckedState.checked
  );

  const [dragged, setIsDragged] = useState(false);

  buttonConfig.buttonCheckedState.checked = checked;

  useEffect(() => {
    setChecked(
      JSON.parse(
        window.localStorage.getItem(buttonConfig.buttonCheckedState.name)
      )
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem(buttonConfig.buttonCheckedState.name, checked);
  });

  let currentElements = switcher(buttonView);

  //Functions
  const toggleChecked = () => {
    if (!dragged) {
      setChecked((value) => !value);
      console.log("clicked");
    } else {
      setIsDragged(false);
      console.log("asdasd");
    }
  };

  const onStart = () => {
    //setIsDragged(true);
    //console.log("not stopped");
  };

  const onStop = () => {
    //setIsDragged(false);
    //console.log("stopped");
  };

  const onDrag = () => {
    setIsDragged(true);
  };

  const nodeRef = useRef(null);
  const dragHandlers = { onDrag: onDrag, onStart: onStart, onStop: onStop };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <Draggable nodeRef={nodeRef} {...dragHandlers}>
      <div className={styles.defaultContainer} ref={nodeRef}>
        {checked ? <Elements current={currentElements} /> : null}

        <div id="buttons" className={styles.buttonsContainer}>
          <button
            className={styles.defaultButtons}
            checked={checked}
            onClick={toggleChecked}
          >
            {checked ? "  >  " : "  <  "}
          </button>
        </div>
      </div>
    </Draggable>
  );
};

const Elements = ({ current }) => {
  return (
    <div id="buttons" className={styles.buttonsContainer}>
      {current.elements.map((element) => {
        return element.element;
      })}
    </div>
  );
};

module.exports = mainButon;

///CODE 2 v2 using react-collapsed

import { useEffect, useState, useRef } from "react";
import { switcher } from "./stateController";
import buttonConfig from "./config";
import styles from "./mainButton.module.css";
import Draggable from "react-draggable";
import useCollapse from "react-collapsed";

let mainButon = function MainButton({ buttonView = "ROOT" }) {
  //Hooks

  const [checked, setChecked] = useState(
    buttonConfig.buttonCheckedState.checked
  );

  const [dragged, setIsDragged] = useState(false);

  buttonConfig.buttonCheckedState.checked = checked;

  useEffect(() => {
    setChecked(
      JSON.parse(
        window.localStorage.getItem(buttonConfig.buttonCheckedState.name)
      )
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem(buttonConfig.buttonCheckedState.name, checked);
  });

  let currentElements = switcher(buttonView);

  //Functions
  const toggleChecked = () => {
    if (!dragged) {
      setChecked((value) => !value);
      console.log("clicked");
    } else {
      setIsDragged(false);
      console.log("asdasd");
    }
  };

  const onStart = () => {
    //setIsDragged(true);
    //console.log("not stopped");
  };

  const onStop = () => {
    //setIsDragged(false);
    //console.log("stopped");
  };

  const onDrag = () => {
    setIsDragged(true);
  };

  const nodeRef = useRef(null);
  const dragHandlers = { onDrag: onDrag, onStart: onStart, onStop: onStop };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    isExpanded: checked,
  });
  return (
    <Draggable nodeRef={nodeRef} {...dragHandlers}>
      <div className={styles.defaultContainer} ref={nodeRef}>
        <div {...getCollapseProps()} className={styles.buttonsContainer}>
          <Elements current={currentElements} />
        </div>
        <div
          {...getToggleProps()}
          className={styles.buttonsContainer}
          onClick={toggleChecked}
        >
          {isExpanded ? (
            <div className={styles.defaultButtons}>{"  >  "}</div>
          ) : (
            <div className={styles.defaultButtons}>{"  <  "}</div>
          )}
        </div>
      </div>
    </Draggable>
  );
};

const Elements = ({ current }) => {
  return (
    <div id="buttons" className={styles.buttonsContainer}>
      {current.elements.map((element) => {
        return element.element;
      })}
    </div>
  );
};

module.exports = mainButon;

/// code 4 v4 using react-collapse-pane

import { useEffect, useState, useRef } from "react";
import { switcher } from "./stateController";
import buttonConfig from "./config";
import styles from "./mainButton.module.css";
import Draggable from "react-draggable";
import { SplitPane } from "react-collapse-pane";

let mainButon = function MainButton({ buttonView = "ROOT" }) {
  //Hooks

  const [checked, setChecked] = useState(
    buttonConfig.buttonCheckedState.checked
  );

  const [dragged, setIsDragged] = useState(false);

  buttonConfig.buttonCheckedState.checked = checked;

  useEffect(() => {
    setChecked(
      JSON.parse(
        window.localStorage.getItem(buttonConfig.buttonCheckedState.name)
      )
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem(buttonConfig.buttonCheckedState.name, checked);
  });

  let currentElements = switcher(buttonView);

  //Functions
  const toggleChecked = () => {
    if (!dragged) {
      setChecked((value) => !value);
      console.log("clicked");
    } else {
      setIsDragged(false);
      console.log("asdasd");
    }
  };

  const onStart = () => {
    //setIsDragged(true);
    //console.log("not stopped");
  };

  const onStop = () => {
    //setIsDragged(false);
    //console.log("stopped");
  };

  const onDrag = () => {
    setIsDragged(true);
  };

  const nodeRef = useRef(null);
  const dragHandlers = { onDrag: onDrag, onStart: onStart, onStop: onStop };

  return (
    <Draggable nodeRef={nodeRef} {...dragHandlers}>
      <div className={styles.defaultContainer} ref={nodeRef}>
        <SplitPane
          split="horizontal"
          collapse={checked}
          className={styles.buttonsContainer}
        >
          <Elements current={currentElements} />
          <div></div>
        </SplitPane>
        <div className={styles.buttonsContainer} onClick={toggleChecked}>
          {checked ? (
            <div className={styles.defaultButtons}>{"  >  "}</div>
          ) : (
            <div className={styles.defaultButtons}>{"  <  "}</div>
          )}
        </div>
      </div>
    </Draggable>
  );
};

const Elements = ({ current }) => {
  return (
    <div id="buttons" className={styles.buttonsContainer}>
      {current.elements.map((element) => {
        return element.element;
      })}
    </div>
  );
};

module.exports = mainButon;
