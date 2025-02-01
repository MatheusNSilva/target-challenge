import React from 'react';
import Questions from './components/Questions';
import Answers from './components/Answers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Caderno de exercícios</h2>
      </header>
      <div>
        <Questions />      
        <Answers />
      </div>
    </div>
  );
}

export default App;
