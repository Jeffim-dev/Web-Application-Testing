import React from "react";

const Dashboard = props => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Strike</h3>
        <button onClick={props.strike} className="down__value">S</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Ball</h3>
        <button onClick={props.ball} className="toGo__value">B</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Hit</h3>
        <button onClick={props.hit} className="ballOn__value">H</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Foul</h3>
        <button onClick={props.foul} className="quarter__value">F</button>
      </div>
    </div>
  );
};

export default Dashboard;
