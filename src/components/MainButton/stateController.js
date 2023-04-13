
/** @jsxImportSource @emotion/react */
//import styles from "./mainButton.module.css";
import * as styles from './styles/main';
import { Link } from "react-router-dom";

let stateChanger = null;
let objects = null;

const switcher = (state) => {

  const objectList = objects.get(state);
  //console.log("STATE:", state)
  const elements = objectList.map(obj => getElement(obj))
  //console.log(elements)
  return (elements);
};



const getElement = (obj) => {


  if (!obj && !obj.type) {
    return null;
  }

  switch (obj.type) {
    case "Link":
      // code block
      return (
        <button 
          key={obj.key} 
          /*className={styles.defaultButtons}*/
          css={styles.DefaultButtons}
        >
          <Link to={obj.link}>{obj.text}</Link>
        </button>
      )

    case "Button":
      // code block
      return (
        <button 
          key={obj.key}
          onClick={obj.onClickAction}
          /*className={styles.defaultButtons}*/
          css={styles.DefaultButtons}
        >
          {obj.text}
        </button>
      )

    default:
      return null;

  }
}



const initializeStateController = (setHook, objectMatrix = [[]]) => {
  stateChanger = setHook;
  objects = new Map(objectMatrix);

}

const setButtonState = (newState) => {
  stateChanger(newState)
}

export { switcher, initializeStateController, setButtonState };
