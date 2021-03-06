import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (isTimeRunning && timeRemaining > 0) {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
      } else if (timeRemaining === 0) {
        endGame();
      }
    }, 1000);
  }, [isTimeRunning, timeRemaining]);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter(v => v !== "").length;
  }

  function startGame() {
    setText("");
    setWordCount(0);
    setTimeRemaining(STARTING_TIME);
    setIsTimeRunning(true);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(countWords(text));
  }

  return (
    <div>
        <h1>Speed Typing Game</h1>
        <textarea 
          onChange={handleChange} 
          value={text} 
          disabled={!isTimeRunning}
          ref={textAreaRef}
        />
        <h4>Time Remaining: {timeRemaining}</h4>
        <button onClick={startGame} disabled={isTimeRunning}>Start</button>
        <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
