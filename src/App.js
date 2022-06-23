import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, updateText] = useState("");

  function handleChange(e) {
    const { value } = e.target;

    updateText(value)
  }

  return (
    <div>
        <h1>Speed Typing Game</h1>
        <textarea onChange={handleChange} value={text}/>
        <h4>Time Remaining: </h4>
        <button></button>
        <h1>Word Count:</h1>
    </div>
  );
}

export default App;
