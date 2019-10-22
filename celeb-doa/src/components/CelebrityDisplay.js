import React from "react";
import { withRouter } from "react-router-dom";

const CelebrityDisplay = props => {
  return (
    <div className="celebrity-info">
      <h1>{props.celeb.name}</h1>
      <p>Info: {props.celeb.info}</p>
      <p>Dead or Alive?: {props.celeb.dead}</p>
      <button
        onClick={() => {
          props.history.push(`/update-celebrity/${props.celeb.id}`);
        }}
      >
        Edit Celebrity
      </button>
    </div>
  );
};

export default withRouter(CelebrityDisplay);
