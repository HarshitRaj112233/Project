import React, { useState } from "react";
import { teamsstats } from "./Jsonfile";
import { Stats } from "./Stats";
export const Dropdown = () => {
  const Q_teams = teamsstats.Teams;
  const [show_teams, setshow_teams] = useState(true);
  const [show_stats, setshow_stats] = useState(false);
  const [stats, setstats] = useState("");
  const click_to_show = () => {
    setshow_teams((prevshow) => !prevshow);
  };
  const showstats = (index) => {
    setshow_stats(!show_stats);
    if (index === 0) {
      setstats(teamsstats.IND);
    } else {
      setstats(teamsstats.AUS);
    }
  };
  return (
    <div className="dropdown-list">
      <div className="cards" onClick={click_to_show}>
        2011 Cricket World Cup Semifinal Stats
        <p className="dropdown-popup">Click to see the results</p>
      </div>
      <div className={show_teams ? "teams" : "do-not"}>
        <ul>
          {Q_teams.map((ele, index) => (
            <li key={index} onClick={() => showstats(index)}>
              {ele}
            </li>
          ))}
        </ul>
        <Stats
          stats={stats}
          shows={show_teams}
          setshow_stats={setshow_stats}
          show_stats={show_stats}
        />
      </div>
    </div>
  );
};
