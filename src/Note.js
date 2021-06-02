import React from "react";

const Note = (props) => {
  //
  console.log(props.id);
  const Delete = (index) => {
    // const element = props.addItem[index].title;
    props.DeleteNode(index);
  };
  return (
    <span key={props.id}>
      <div className="note_Display">
        {props.addItem.map((element, index) => {
          return (
            <>
              <div
                className="note"
                key={props.id}
                onClick={() => {
                  Delete(index);
                }}
              >
                <h4>{index}</h4>
                <h1>{element.title}</h1>
                <p>{element.content}</p>
                <div className="note_button">
                  <button className="note_button_button">-</button>
                  <h4>Delete</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </span>
  );
};

export default Note;
