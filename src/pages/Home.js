import React from 'react';
import '../App.css';
import {setButtonState} from "../components/MainButton/stateController";

function Page1() {
  setButtonState("ROOT");
  return (
    <div className="Page1">
      <header className="Page1-header">
        <h2>
          HOME PAGE
        </h2>
      </header>
    </div>
  );
}

export default Page1;