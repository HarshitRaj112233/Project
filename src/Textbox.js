import React, { useState } from "react";

export const Textbox = () => {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");

  const click = (e) => {
    if (e.keyCode === 72 && e.ctrlKey) {
      e.preventDefault();
      setinput2(input1);
    }
  };
  return (
    <>
      <div className="text-box">
        <input
          type="text"
          id="input-box-1"
          placeholder="Input your text here"
          value={input1}
          onChange={(e) => {
            setinput1(e.target.value);
          }}
          onKeyDown={click}
        />
        <p className="pop-up-textbox">
          Press Crtl+H to copy content to white box
        </p>
        <input
          type="text"
          id="input-box-2"
          placeholder=""
          onChange={(e) => {
            setinput2(e.target.value);
          }}
          value={input2}
        />
      </div>
    </>
  );
};
