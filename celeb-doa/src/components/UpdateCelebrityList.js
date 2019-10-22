import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
// this will be for editing the celebrity data, only allowing for dead/alive updates

const UpdateCelebrityList = props => {
  const [editCeleb, setEditCeleb] = useState({
    dead: "",
    id: ""
  });

  useEffect(() => {
    const celebID = props.match.params.id;
    axios
      .get(`https://celeb-death-status.herokuapp.com/api/celebs/${celebID}`)
      .then(response => setEditCeleb(response.data))
      .catch(error => console.log(error.response));
  }, [props.match.params.id]);

  const handleChanges = event => {
    setEditCeleb({ ...editCeleb, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .put(
        `https://celeb-death-status.herokuapp.com/api/protected/celebs/${editCeleb.id}`,
        editCeleb
      )
      .then(response => {
        console.log("Response from handleSubmit in UpdateCeleb", response.data);
        props.history.push("/celebrity-list");
      })
      .catch(error => console.log(error.response));
  };

  return (
    <div className="celebrity-update">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="dead"
          onChange={handleChanges}
          value={editCeleb.dead}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateCelebrityList;
