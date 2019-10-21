import { axiosWithAuth } from "../utils/axiosWithAuth";

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

// export for deleting results - delete request
export const START_DELETION_SCORE = "START_DELETION_SCORE";
export const DELETION_SCORE_SUCCESS = "DELETION_SCORE_SUCCESS";
export const DELETION_SCORE_FAILURE = "DELETION_SCORE_FAILURE";

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
      .post("/api/login", loginInfo)
      .then(response =>
        dispatch(
          { type: LOGIN_SUCCESS, payload: response.data.payload },
          localStorage.setItem("token", response.data.payload)
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
