import React, { useState, useEffect } from 'react'

export default function LandingPage() {
    const [running, setRunning] = useState(true);
    const [count, setCount] = useState(5);
    const counter = () => {
		setCount(count => {
            if(count===1){
                setRunning(false)
            }
			return count - 1;
		});
	};

    useEffect(() => {
		const intervalId = setInterval(counter, 1000);
        return () => {
			clearTimeout(intervalId);
		}
	}, [])

    console.log(count)
    return running ? (
        <div className='portfolio-view'>
            <h1 id='countdown'>{count}</h1>
        </div>
       
    ) : (
        <div className='typewriter portfolio-view'>
    <h1>Welcome to my Portfolio</h1>
    </div>
)
}