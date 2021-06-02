import React, { useState, useRef, useEffect } from "react";

export const CreateNode = (props) => {
  const [expand, setexpand] = useState(false);
  const ref = useRef();
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const addNote = (e) => {
    if (note.title === "") {
      alert("Write the Title");
      return;
    }
    if (note.content === "") {
      alert("Write a note about it");
      return;
    }
    e.preventDefault();
    props.PassNote(note);
    setnote((prevnote) => {
      return { title: "", content: "" };
    });
  };
  const expand_True = () => {
    setexpand(true);
  };
  const expand_false = () => {
    setexpand(false);
  };
  useEffect(() => {
    if (expand === true) {
      ref.current.placeholder = "Write a note..(Double Click to Close)";
    } else {
      ref.current.placeholder = "Click here to write..";
    }
  }, [expand]);
  return (
    <>
      <div className="main_note" onDoubleClick={expand_false}>
        <form action="">
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              value={note.title}
              onChange={(e) => {
                setnote((prevtitle) => {
                  return { ...prevtitle, title: e.target.value };
                });
              }}
            />
          ) : null}
          <textarea
            ref={ref}
            placeholder="Click here to write ."
            value={note.content}
            onClick={expand_True}
            onChange={(e) => {
              setnote((prevcontent) => {
                return { ...prevcontent, content: e.target.value };
              });
            }}
            cols=""
            rows=""
          ></textarea>
          {expand ? (
            <button className="main_note_button" onClick={addNote}>
              +
            </button>
          ) : null}
        </form>
      </div>
    </>
  );
};
