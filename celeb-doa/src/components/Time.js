import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Time = (props) => {

    const count = 150;
    const [time, setTime] = useState(Number(props.countDown));


    const Timer = styled.h2`
        font-size: 3rem;
        color: ${time <= 10 ? 'red' : 'green' };
        background-color: white;
        border-radius: 50px;
        font-family: 'Catamaran', sans-serif;
        margin: 0;
    `

    useEffect(() => {

        if(time === 0) return;

        const countDown = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(countDown);

    },[time])



    if(time === 0){
        return(
            <div>
                <Timer>Time Out!</Timer>
            </div>
        )
    }else{
        
        return(
            <div>
                <Timer onChange={props.count(time)}>{time}</Timer>
            </div>
        )
    }

}

export default Time;
