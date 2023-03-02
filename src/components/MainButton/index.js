import { useEffect, useState, setState, useRef } from "react";
import * as stateController from "./stateController";
import buttonConfig from "./config";
import styles from "./mainButton.module.css";
import Draggable from "react-draggable";
import * as chat from "./actions/chat";
import * as positionUtil from "./utils/positionUtil";
import useLongPress from "./utils/useLongPress";
import logo from './assets/pop.gif';
import * as feelings from "./actions/feelings";

const mainButon = function MainButton({ elements = [[]], buttonView = "ROOT", popup = "", }) {
  //Hooks

  const [checked, setChecked] = useState(
    buttonConfig.buttonCheckedState.checked
  );
  const [dragged, setIsDragged] = useState(false);
  const [canITeleport, setCanITeleport] = useState(true);
  const [pos_x, setPosition_X] = useState(buttonConfig.positionX.pos);
  const [pos_y, setPosition_Y] = useState(buttonConfig.positionY.pos);
  const [message, setMessage] = useState(popup);
  const [buttonState, setButtonState] = useState(buttonView);
  const [feeling, setFeeling] = useState(null);


  stateController.initializeStateController(setButtonState, elements);
  chat.initializeChat(setMessage);
  feelings.initialize(setFeeling);

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

  let currentElements = stateController.switcher(buttonState);
  
  console.log("button psition x: " + pos_x + " y: " + pos_y);
  //Functions
  const toggleChecked = () => {
    if (!dragged) {
      setChecked((value) => !value);
    } else {
      setIsDragged(false);
    }
  };

  const onStart = () => {
    setCanITeleport(false);

  };

  const onStop = (event, data) => {
    
    setTimeout(setCanITeleport(true),500)

    if(data){
      setPosition_X(data.x);
      setPosition_Y(data.y);
    }else{
      teleport(event);
    }
    
  };

  const onDrag = () => {
    setCanITeleport(false);
    setIsDragged(true);
  };

  const nodeRef = useRef(null);
  const dragHandlers = { onDrag: onDrag, onStart: onStart, onStop: onStop };
  
  const teleport = (e) =>{
    //console.log(e)
    setPosition_X(e.pageX);
    setPosition_Y(e.pageY);
    setChecked(false);
    chat.showTimedMessage([
    <img fill='red' className="pop" src={logo} alt="loading..." style={{ position: "fixed", zIndex: "6", top: "-40%", left: "-25%" }}/>,
    <img fill='red' className="pop" src={logo} alt="loading..." style={{ position: "fixed", zIndex: "6", top: "-10%", left: "-10%" }}/>,
    <img fill='red' className="pop" src={logo} alt="loading..." style={{ position: "fixed", zIndex: "6", top: "-100%", left: "-50%" }}/>
    ],300)
  }


  const onLongPress = (e) => {
    console.log('longpress is triggered');
    if (canITeleport) {
      onStop(e);
    }

};

const onClick = (e) => {
    console.log('click is triggered')
}

const defaultOptions = {
  shouldPreventDefault: true,
  delay: 1500,
};

const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}} {...longPressEvent}>
    <div style={{ position: "fixed", zIndex: "5" }}>

    
      <DraggableElement nodeRef={nodeRef} 
      dragHandlers={dragHandlers} 
      checked={checked} 
      currentElements={currentElements} 
      toggleChecked={toggleChecked} 
      message={message} 
      pos_x={pos_x}
      pos_y={pos_y} 
      canITeleport={canITeleport}
      logo={logo}
      feeling={feeling}
      />
      
      
    </div>
    </div>
  );
};

const DraggableElement = ({nodeRef, dragHandlers, checked, currentElements, toggleChecked, message, pos_x, pos_y, canITeleport, logo, feeling}) => {


  //console.log("DraggableElement ", pos_x, pos_y)
  if(!checked){
    feelings.sleep();
  }else if ( feeling === " 😴 "){
    feelings.smile();
  }
  return(

    <Draggable
    nodeRef={nodeRef}
    {...dragHandlers}
    defaultPosition={{ x: pos_x, y: pos_y }}
    position={pos_x && pos_y ? { x: pos_x, y: pos_y } : null}
    positionOffset={pos_x && pos_y ? { x: -100, y: -200 } : null}
    //className={styles.MainButton}
  >
    
    
    <div ref={nodeRef} className={styles.MainButton}>
    {
    //canITeleport ? <img className="pop" src={logo} alt="loading..." style={{ zIndex: "6" }}/> : 
    <>
      <div className={styles.defaultContainer}>
        {checked ? <Elements elements={currentElements} /> : null}
        
        <div className={styles.buttonsContainer}>
          <button
            className={styles.defaultButtons}
            checked={checked}
            onClick={toggleChecked}
          >
            {feeling}
          </button>
        </div>
      </div>
      <p className={styles.messageContainer}>{message}</p>
    </>
    }
    </div>
  </Draggable>
  );
}

const Elements = ({ elements }) => {
  console.log(elements)
  return (
    <div id="buttons" className={styles.showButtons}>
      {elements.map((element) => {
        return element;
      })}
    </div>
  );
};

export default mainButon;
