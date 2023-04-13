/** @jsxImportSource @emotion/react */
//import styles from "./bottomSide.module.css";
import * as styles from './styles/mobile';

const BottomSideButton = ({ elements, nodeRef, dragHandlers, checked, currentElements, toggleChecked, message, pos_x, pos_y, canITeleport, logo, feeling }) => {

  return (

    <div ref={nodeRef} css={styles.MainButton}>
      {
        //canITeleport ? <img className="pop" src={logo} alt="loading..." style={{ zIndex: "6" }}/> : 
        <>
          <p css={styles.MessageContainer}>{message}</p>

          <div css={styles.DefaultContainer}>
            <div id="buttons" css={styles.ShowButtons}>
              {elements.map((element) => {
                return element;
              })}
            </div>

            <div css={styles.HardCodedButtonsContainer}>
              <button
                css={styles.DefaultIconButton}
                checked={checked}
                onClick={toggleChecked}
              >
                {feeling}
              </button>
            </div>
          </div>
        </>
      }
    </div>


  );
};

export default BottomSideButton;