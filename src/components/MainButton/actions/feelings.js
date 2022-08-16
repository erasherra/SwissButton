let setter = null;

const initialize = (intiSetter) => {
  setter = intiSetter;
};

const textForTime = async (text, time, defaultText) => {
  setter(text);

  setTimeout(function () {
    setter(defaultText);
  }, time);
};

const setText = async (text) => {
  setter(text);
};

const smile = async () => {
  setter(" 😁 ");
};

const cry = async () => {
  setter(" 😢 ");
};

const sleep = async () => {
  setter(" 😴 ");
};

const money = async () => {
  setter(" 🤑 ");
};

const heartEye = async () => {
  setter(" 😍 ");
};

const heart = async () => {
  setter(" ❤️ ");
};

const ring = async () => {
  setter(" 💍 ");
};

export { initialize, textForTime, setText, smile, cry, sleep, money, ring, heartEye, heart };
