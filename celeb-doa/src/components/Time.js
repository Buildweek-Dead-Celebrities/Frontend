import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Time = () => {

    const count = 150;
    const [time, setTime] = useState(count);

    const Timer = styled.h2`
        font-size: 3rem;
        color: ${time <= 50 ? 'red' : 'green' };
        background-color: white;
        border-radius: 50px;
        font-family: font-family: 'Catamaran', sans-serif;
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
                <Timer>{time}</Timer>
            </div>
        )
    }

}

export default Time;
