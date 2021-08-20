import React from "react";
import { Button } from "./Button";
import { Textbox } from "./Textbox";
import { Dropdown } from "./Dropdown";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <Button />
        <Textbox />
        <Dropdown />
      </div>
    </>
  );
};

export default App;
