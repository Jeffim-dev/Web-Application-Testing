import React from "react";

const Display = props => {
  return (
    <div className="topRow">
          <div className="home">
            <h2 className="home__name">Strike</h2>
            <div className="home__score">{props.strikes}</div>
          </div>
          <div className="away">
            <h2 className="away__name">Ball</h2>
            <div className="away__score">{props.balls}</div>
          </div>
     </div>
  );
};

export default Display;