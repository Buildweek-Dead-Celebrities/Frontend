import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Quiz = (props) => {
const [celebs, setCelebs] = useState([]);

useEffect(() => {
    axios
    .get('https://celeb-death-status.herokuapp.com/api/celebs/')
    .then(response => {
        setCelebs(response.data)
    })
    .catch(error => (console.log(error)))
}, [])
    return(
        <div>
          {celebs.map(celeb => 
              <div key={celeb.id}>
                 <h1>{celeb.name}</h1> 
                 <h4>{celeb.info}</h4> 
                 <h6>{celeb.dead}</h6> 
              </div>
          )}
        </div>
    )
}

export default Quiz;