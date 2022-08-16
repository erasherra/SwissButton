let setter = null;

const initializeChat = (intiSetter) => {
  setter = intiSetter;
};

const showMesage = (msg) => {
  setter(msg);
};

const showTimedMessage = async (msg, time) => {
  setter(msg);

  setTimeout(function () {
    setter("");
  }, time);
};

export { initializeChat, showMesage, showTimedMessage };
