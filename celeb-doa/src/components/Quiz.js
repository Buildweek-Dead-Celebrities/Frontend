import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import styled from 'styled-components'

const Quiz = props => {
  const [celebs, setCelebs] = useState([]);
  const [celeb, setCeleb] = useState({});
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState();
  const [click, setClick] = useState(0);




  const Answer = styled.button`
    background-color: #AC3C3C;
    border: 1px solid #AC3C3C;
    color: white;
    font-family: 'Catamaran', sans-serif;
    font-size: 1.8rem;
    padding: 11px 32px;
    outline: none;
    cursor: pointer;
    transition: 0.4s ease-in-out;

    :hover{
      color: #AC3C3C;
      background-color: white;
      border: 1px solid #AC3C3C;
    }
  `

  const Score = styled.h1`
    background-color: white;
    font-family: 'Catamaran', sans-serif;
    border-radius: 30px;
    margin: 1% 25%;
  `

  const ButtonDiv = styled.div`

    display:flex;
    justify-content: space-evenly;
    background-color: #DB6B6B;
    
  `

    const Check = styled.button`
    background-color: #AC3C3C;
    border: 1px solid #AC3C3C;
    color: white;
    font-family: 'Catamaran', sans-serif;
    font-size: 2rem;
    padding: 11px 32px;
    margin-top: 2%;
    outline: none;
    cursor: pointer;
    transition: 0.4s ease-in-out;

    :hover{
      color: #AC3C3C;
      background-color: white;
      border: 1px solid #AC3C3C;
    }
  `

  const CheckDiv = styled.div`
    background-color:  #DB6B6B;
    margin: 0 22%;
  `

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
    .then( res =>  console.log(res.data.score)
    )
    .catch( res => console.log(res))
  }

  if ( click === 20 || score === 20 || Number(props.count) === 1){

      // this would be the put request to push score to user
      // pop up modal to display end score
      scorePut();

      console.log("this is from clicking - quiz has ended")
      props.history.push("/ScoreModal")
      props.setCount(50);


  }

  const handleChanges = e => {
    setGuess({ [e.target.name]: e.target.value });
  };
  return (

    <div className='pink'>
      <div key={celeb.id} className='form'>
        <Score>{score}/20</Score>
        <div>
          <img src={celeb.imageurl} width='300px' />
          <h1>{celeb.name}</h1>
          <h4 className='celeb-info'>{celeb.info}</h4>
        </div>

      </div>
      <ButtonDiv>
        <Answer onClick={handleChanges} name="guess" value="Alive">
        💗 Alive
        </Answer>
        
        or<Answer name="guess" value="Dead" onClick={handleChanges}>
          Dead 💀
        </Answer>
      </ButtonDiv>
      <CheckDiv>
        <Check onClick={check} > ✔️ </Check>
      </CheckDiv>

    </div>
  );
};


const mapStateToProps = state => {
  return {
    id: state.loginData.id
  }
}
export default connect(mapStateToProps,{})(withRouter(Quiz));

