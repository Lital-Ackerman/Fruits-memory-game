import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/cards';
import ScoreBoard from './components/scoreBoard/scoreBoard'

function App() {
    let isStorage= localStorage.getItem("score");

    let [score, setScore]= useState(
        isStorage? JSON.parse(localStorage.score) : 0);

    const handleScore=(currentScore)=>{
        setScore(currentScore);
    }

useEffect(()=>{
    localStorage.setItem('score', String(score));
}, [score])

    return (
        <div className="App">
            <ScoreBoard score={score} updateScore={handleScore}/>
            <h1 className='headline'>Memory Game</h1>
            <Cards updateScore={handleScore}/>
        </div>
    );
}

export default App;


