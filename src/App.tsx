import React from 'react';
import './App.scss';
import KeyPadComponent from './components/KeyPadComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <div className="centerHolder">
      <div className="calculatorHolder">
        <h1>Calculator</h1>
        <ResultComponent />
        <KeyPadComponent />
      </div>
    </div>
  );
}

export default App;
