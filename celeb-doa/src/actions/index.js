import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

// exports for login - post request
export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// exporting for registering - post request
export const START_REGISTERING = "START_REGISTERING";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

// export for deleting users - delete request
export const START_DELETION = "START_DELETION";
export const DELETION_SUCCESS = "DELETION_SUCCESS";
export const DELETION_FAILURE = "DELETION_FAILURE";

// export for deleting celebrity - delete request
export const CELEB_DELETE = "START_CELEB_DELETE";
// export const CELEB_DELETE_SUCCESS = "CELEB_DELETE_SUCCESS";
// export const CELEB_DELETE_FAILURE = "CELEB_DELETE_FAILURE";

// export for quiz scores - get request
export const START_QUIZ = "START_QUIZ";
export const QUIZ_SUCCESS = "QUIZ_SUCCESS";
export const QUIZ_FAILURE = "QUIZ_FAILURE";

// export for celebrities - get request
export const START_CELEBRITY = "START_CELEBRITY";
export const CELEBRITY_SUCCESS = "CELEBRITY_SUCCESS";
export const CELEBRITY_FAILURE = "CELEBRITY_FAILURE";

// export for username update - put request
export const START_USERNAME = "START_USERNAME";
export const USERNAME_SUCCESS = "USERNAME_SUCCESS";
export const USERNAME_FAILURE = "USERNAME_FAILURE";

// export for password update - put request
export const START_PASSWORD = "START_PASSWORD";
export const PASSWORD_SUCCESS = "PASSWORD_SUCCESS";
export const PASSWORD_FAILURE = "PASSWORD_FAILURE";

// post request for login user
export const loginUser = loginInfo => {
  return dispatch => {
    dispatch({ type: START_LOGIN });
    axiosWithAuth()
      .post("/login", loginInfo)
      .then(response =>
        dispatch(
          { type: LOGIN_SUCCESS, payload: response.data},
          localStorage.setItem("token", response.data.token)
        )
      )
      .catch(error =>
        dispatch({ type: LOGIN_FAILURE, payload: error.response })
      );
  };
};

//post request for registrate user
export const registerUser = registerInfo => {
  return dispatch => {
    dispatch({ type: START_REGISTERING });
    axios
    .post("https://celeb-death-status.herokuapp.com/api/register", registerInfo)
    .then(response =>
      dispatch(
        { type: REGISTRATION_SUCCESS, payload: response.data}
      )
    )
    .catch(error =>
      dispatch({ type: REGISTRATION_FAILURE, payload: error.response }))
  }
}

// this is the get request for celebrity data
export const getCelebrity = celeb => {
  return dispatch => {
    dispatch({ type: START_CELEBRITY });
    axios
    .get('https://celeb-death-status.herokuapp.com/api/celebs/', celeb)
    .then(response => 
      dispatch(
        {type: CELEBRITY_SUCCESS, payload: response.data}
      )
    )
    .catch(error =>
      dispatch({ type: CELEBRITY_FAILURE, payload: error.response}))
  }
}

// this is to delete celebrity data
// export const deleteCelebrity = celeb => {
//   return dispatch => {
//     dispatch({ type: CELEB_DELETE });
//     axiosWithAuth()
//     .delete(`https://celeb-death-status.herokuapp.com/api/celebs/${celeb.id}`)
//     .then(response =>
//       console.log("Celebrity has been deleted", response)
//       )
//     .catch(error => console.log(error.response)
//     )
//   }
// }
