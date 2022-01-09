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
		console.log('component mounted');
		const intervalId = setInterval(counter, 1000);

	}, [])

    console.log(count)
    return running ? (
        
            <h1 id='countdown'>{count}</h1>
       
    ) : (
        <div className='typewriter'>
    <h1>Welcome to my Portfolio</h1>
    </div>
)
}
