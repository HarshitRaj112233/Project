import React, { useState } from "react";
import { Quotes } from "./Jsonfile";
export const Button = () => {
  const newquotes = (Quotes);
  const [num, setnum] = useState(Math.ceil(20 * Math.random(0, 1)));

  // const quotesapi = async () => {
  //   const response = await fetch("https://type.fit/api/quotes");
  //   const quotes = await response.json();
  //   setnewquotes(quotes);
  // };

  // useEffect(() => {
  //   quotesapi();
  // }, []);

  const changeQuotes = () => {
    const i = Math.ceil(newquotes.length * Math.random(0, 1));
    setnum(i);
  };
  return (
    <div className="quotes-family">
      <h1 className="quotes">{newquotes[num].text}</h1>

      <button className="quotes-button" onClick={changeQuotes}>
        Click Me!!
      </button>
      <p className="pop-up">
        <span>Click for new Quotes</span>
      </p>
    </div>
  );
};
