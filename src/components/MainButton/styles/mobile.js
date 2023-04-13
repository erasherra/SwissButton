
import { css } from '@emotion/react';

const MainButton = css`
  z-index: 2;
`;

const DefaultContainer = css`
  color: white;
  background-color: #673ab7;
  position:absolute; 
  bottom:10px; 
  right:5px;
  width: 90%;
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 12px 12px 5px 5px rgba(0, 0, 0, 0.2);

`;

const ShowButtons = css`
  color: white;
  font-weight: bold;
  background-color: #673ab7;
  float: right;
  border: none;
`;

const HardCodedButtonsContainer = css`
  cursor: pointer;
  float: left;
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


const MessageContainer = css`
  float: top;
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
  MainButton
}
