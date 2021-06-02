import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./App.css";
import { Footer } from "./Footer";
import { CreateNode } from "./CreateNode";
import Note from "./Note";

const App = () => {
  let items = JSON.parse(localStorage.getItem("item"));
  if (items === null) {
    items = [];
  }
  const [addItem, setaddItem] = useState(items);

  const PassNote = (note) => {
    setaddItem([...addItem, note]);
  };
  const DeleteNode = (index) => {
    setaddItem(
      addItem.filter((e) => {
        return addItem[index] !== e;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(addItem));
  }, [addItem]);
  return (
    <>
      {" "}
      <Header />
      <CreateNode PassNote={PassNote} />
      <Note
        addItem={addItem}
        id={new Date().getTime()}
        DeleteNode={DeleteNode}
      />
      <Footer />
    </>
  );
};

export default App;
