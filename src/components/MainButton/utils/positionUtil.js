let clickHoldTimer = null;

const handleMouseDown = () => {
  clickHoldTimer = setTimeout(() => {
    //Action to be performed after holding down mouse
    console.log("YOU SUMMONED ME");
  }, 1000); //Change 1000 to number of milliseconds required for mouse hold
};

const handleMouseUp = () => {
  clearTimeout(clickHoldTimer);
};

export { handleMouseDown, handleMouseUp };
