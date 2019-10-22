import React from "react";

const CelebrityDisplay = props => {
  return (
    <div className="celebrity-info">
      <h1>{props.celeb.name}</h1>
      <p>Info: {props.celeb.info}</p>
      <p>Dead or Alive?: {props.celeb.dead}</p>
    </div>
  );
};

export default CelebrityDisplay;
