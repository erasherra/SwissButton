import { css } from '@emotion/react';

const MainButton = css`
  position: fixed;
  z-index: 2;
`;

const HardCodedButtonsContainer = css`
  display: inline-block;
  cursor: pointer;
`;

const DefaultIconButton = css`
  color: white;
  font-weight: bold;
  background-color: #673ab7;
  display: inline-block;
  margin: 5px;
  padding: 20px;
  height: 50px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.7;
  }
`;

const DefaultButtons = css`
  color: white;
  font-weight: bold;
  background-color: #673ab7;
  display: inline-block;
  margin: 5px;
  padding: 20px;
  height: 50px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.7;
  }
`;

const ShowButtons = css`
  color: white;
  font-weight: bold;
  background-color: #673ab7;
  display: inline-block;
  float: right;
  border: none;
`;

const Accept = css`
  background-color: #62b73a;
`;

const Delete = css`
  background-color: #b73a3a;
`;

const Interested = css`
  background-color: #b73a98;
`;

const DefaultContainer = css`
  color: white;
  background-color: #673ab7;
  display: inline-block;
  float: right;
  margin: 5px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  box-shadow: 12px 12px 5px 5px rgba(0, 0, 0, 0.2);

  /*transition: width 0.5s;*/

`;

const MessageContainer = css`
  float: right;
  margin: 5px;
  padding: 5px;
`;

export {
  MessageContainer,
  Interested,
  Delete,
  Accept,
  DefaultIconButton,
  HardCodedButtonsContainer,
  ShowButtons,
  DefaultContainer,
  MainButton,
  DefaultButtons
}