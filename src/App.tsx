import React from 'react';
import './App.scss';
import Instructions from "./components/Instructions/Instructions";

function App() {
  return (
    <div className="knittingApp">
      <div className="pattern">
        <div className="pattern-global">
          <h2>Global</h2>
        </div>
        <div className="pattern-explanations">
          <h2>explanations</h2>
        </div>
        <div className="pattern-instructions">
          <h2>instructions</h2>
          <Instructions />
        </div>
      </div>
    </div>
  );
}

export default App;
