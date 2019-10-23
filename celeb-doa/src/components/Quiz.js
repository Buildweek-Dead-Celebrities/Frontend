import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";

const Quiz = props => {
  const [celebs, setCelebs] = useState([]);
  const [celeb, setCeleb] = useState({});
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState();
  const [click, setClick] = useState(0);

  // currently have a list 80 celebrities, each celebrity has a unique ID
  // creating a random id function, math.random 0/1-80 -- setting max/min
  // once ID number has been chosen, then we use interp string for get request
  // once button for alive/dead is clicked, function runs again to pull new celebrity
  // adds score to score useState

  // Show one celebrity at a time -- filter, math.random
  // Have alive or dead button -- onClick
  // Alive or dead button advances to next celebrity
  // Button stores score + 1 or 0 depending if true/false
  // If user is signed in, put request for score -- /users/:id
  useEffect(() => {
    const random = Math.floor(Math.random() * 80);
    axios
      .get("https://celeb-death-status.herokuapp.com/api/celebs/")
      .then(response => {
        setCelebs(response.data);
        setCeleb(response.data[random]);
      })
      .catch(error => console.log(error));
  }, []);


  const randomCeleb = () => {
    const random = Math.floor(Math.random() * 80);
    setCeleb(celebs[random]);
  };

  const check = () => {
    if (celeb.dead === "true" && guess.guess === "Dead") {
      return (
        setScore(score + 1),
        setClick(click + 1),
        randomCeleb()
        )
    }
    else if (celeb.dead === "false" && guess.guess === "Alive") {
      return (
        setScore(score + 1),
        setClick(click + 1),
        randomCeleb()
        )
    }
    else {
      randomCeleb();
      setClick(click + 1);
      console.log("WRONG");
    }
    
  };

  const scorePut = () => {
    const user = { 
      score: score
    }
    axiosWithAuth()
    .put(`https://cors-anywhere.herokuapp.com/http://celeb-death-status.herokuapp.com/api/protected/users/${props.id}`, user)
    .then( res => { console.log(res)
    })
    .catch( res => console.log(res))
  }

  if ( click === 5 || score === 5 ){
      // this would be the put request to push score to user
      // pop up modal to display end score
      scorePut();
      console.log("this is from clicking - quiz has ended")
      // props.history.push("/dashboard")
  }

  const handleChanges = e => {
    setGuess({ [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div key={celeb.id}>
        <h1>{score}</h1>
        <h1>{celeb.name}</h1>
        <img src={celeb.imageurl} />
        <h4>{celeb.info}</h4>
      </div>
      <button onClick={handleChanges} name="guess" value="Alive">
        Alive
      </button>
      <button name="guess" value="Dead" onClick={handleChanges}>
        Dead
      </button>
      <button onClick={check}>Check</button>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    id: state.loginData.id
  }
}
export default connect(mapStateToProps,{})(withRouter(Quiz));

// useEffect(() => {
//     axios
//     .get('https://celeb-death-status.herokuapp.com/api/celebs/')
//     .then(response => {
//         setCelebs(response.data)
//     })
//     .catch(error => (console.log(error)))
// }, [])
//     return(
//         <div>
//           {celebs.map(celeb =>
//               <div key={celeb.id}>
//                  <h1>{celeb.name}</h1>
//                  <h4>{celeb.info}</h4>
//                  <img src={celeb.imageurl} />
//               </div>
//           )}
//         </div>
//     )
// }

