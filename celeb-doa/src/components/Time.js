import React, {useState, useEffect} from 'react';

const Time = () => {

    const count = 150;
    const [time, setTime] = useState(count);

    useEffect(() => {

        if(time === 0) return;

        const countDown = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(countDown);

    },[time])


    return(
        <div>
            <h1>Time Left</h1>
            <h2>{time}</h2>
        </div>
    )
}

export default Time;