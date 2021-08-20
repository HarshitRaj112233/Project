import React, { useState } from "react";

export const Stats = (props) => {
  const [show, setshow] = useState(true);
  const Show = () => {
    props.setshow_stats(!props.show_stats);
    setshow(!show);
  };
  return (
    <>
      <div
        className={
          props.shows && props.show_stats ? "semifinal-stats" : "donot-show"
        }
      >
        <div className="cross" onClick={Show}>
          X
        </div>
        <div className="summary">
          <h2>Toss-Won: {props.stats.TossWon}</h2>
          <h3> Chose To: {props.stats.Opted}</h3>
        </div>
        <h3 className="Inning">First Inning</h3>
        <div className="first-inn-stats">
          <p>{props.stats.Team1}</p>
          <p>{props.stats.F_Inn}</p>
        </div>
        <h3 className="Inning">Second Inning</h3>

        <div className="second-inn-stats">
          <p>{props.stats.Team2}</p>
          <p>{props.stats.S_Inn}</p>
        </div>
        <div className="finalize">
          <h3>Winner- {props.stats.Match_won}</h3>
          <h3>Man of the Match- {props.stats.Man_Match}</h3>
        </div>
      </div>
    </>
  );
};
