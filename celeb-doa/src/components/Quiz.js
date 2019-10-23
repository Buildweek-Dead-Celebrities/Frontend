import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Quiz = props => {
  const [celebs, setCelebs] = useState([]);
  const [celeb, setCeleb] = useState({});
  const [score, setScore] = useState(1);

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
        setCelebs(response.data)
        setCeleb(response.data[random])
      }) 
        
      .catch(error => console.log(error));
  }, []);

  const randomCeleb = () => {
    const random = Math.floor(Math.random() * 80);
    setCeleb(celebs[random])
  }

  const isAlive = () => {
    console.log("onClick for Dead", score);
    if (`${celebs.id}` && `${celebs.dead}` === "false") {
      console.log(props)
      return setScore(score + 1);
    } else if(`${celebs.id}` && `${celebs.dead}` === "true"){
      return setScore(score + 0);
    } else {
      props.history.push('/quiz')
    }
    randomCeleb()
  }

  const isDead = () => {
    console.log("onClick for Dead", score);
    if (`${celebs.id}` && `${celebs.dead}` === "true") {
      console.log(props)
      return setScore(score + 1);
    } else if(`${celebs.id}` && `${celebs.dead}` === "false"){
      return setScore(score + 0);
    } else {
      props.history.push('/quiz')
    }
    randomCeleb()
  }

  return (
    <div>
      <div key={celeb.id}>
        <h1>{celeb.name}</h1>
        <h4>{celeb.info}</h4>
        <img src={celeb.imageurl} />
      </div>

      <button
        onClick={isAlive}
      >
        Alive
      </button>
      <button
        onClick={isDead}
      >
        Dead
      </button>
    </div>
  );
};

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

export default withRouter(Quiz);
