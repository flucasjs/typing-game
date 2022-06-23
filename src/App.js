import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, updateText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isTimeRunning && timeRemaining > 0) {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
      } else {
        setIsTimeRunning(false);
      }
    }, 1000);
  }, [isTimeRunning, timeRemaining])

  function handleChange(e) {
    const { value } = e.target;
    updateText(value);
  }

  return (
    <div>
        <h1>Speed Typing Game</h1>
        <textarea onChange={handleChange} value={text}/>
        <h4>Time Remaining: {timeRemaining}</h4>
        <button onClick={() => setIsTimeRunning(true)}></button>
        <h1>Word Count: "???"</h1>
    </div>
  );
}

export default App;
