import styles from "./bottomSide.module.css";


const BottomSideButton = ({ elements, nodeRef, dragHandlers, checked, currentElements, toggleChecked, message, pos_x, pos_y, canITeleport, logo, feeling }) => {

  return (

    <div ref={nodeRef} className={styles.MainButton}>
      {
        //canITeleport ? <img className="pop" src={logo} alt="loading..." style={{ zIndex: "6" }}/> : 
        <>
          <p className={styles.messageContainer}>{message}</p>

          <div className={styles.defaultContainer}>
            <div id="buttons" className={styles.showButtons}>
              {elements.map((element) => {
                return element;
              })}
            </div>

            <div className={styles.hardCodedButtonsContainer}>
              <button
                className={styles.defaultIconButton}
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