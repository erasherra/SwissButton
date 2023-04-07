let setter = null;

const bottomSide = (intiSetter) => {
  setter = intiSetter;
};

const asd = async (msg, time) => {
  setter(msg);

  setTimeout(function () {
    setter("");
  }, time);
};

export { bottomSide, asd };
