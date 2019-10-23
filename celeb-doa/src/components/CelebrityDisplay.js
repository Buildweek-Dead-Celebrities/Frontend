import React from "react";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const CelebrityDisplay = props => {

  const deleteCeleb = () => {
    axiosWithAuth()
    .delete(`https://cors-anywhere.herokuapp.com/http://celeb-death-status.herokuapp.com/api/protected/celebs/${props.celeb.id}`)
    .then(response => {
      console.log("Delete was successful", response)
      // props.history.push(`/celebrity-list`)
    })
    .catch(error => {
      console.log(error.response)
    })
  }

  return (
    <div className="celebrity-info">
      <h1>{props.celeb.name}</h1>
      <p>Info: {props.celeb.info}</p>
      <img src={props.celeb.imageurl} />
      <p>Dead or Alive?: {props.celeb.dead}</p>
      <button
        onClick={() => {
          props.history.push(`/update-celebrity/${props.celeb.id}`);
        }}
      >
        Edit Celebrity
      </button>
      <button onClick={deleteCeleb}>Delete Celebrity</button>
    </div>
  );
};

export default withRouter(CelebrityDisplay);
