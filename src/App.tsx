import React from 'react';
import './App.css';
import jsonPattern from "./patterns/trescao.json";
import { formatJSON } from "./types/Pattern";

import Instruction from "./components/instruction/Instruction";

function App() {
  const currentPattern = formatJSON(jsonPattern);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{currentPattern.name}</h1>
        {currentPattern.instructions.map(instruction =>
          <Instruction
            key={instruction.order}
            instruction={instruction}
            currentSize={3}
          />
        )}
      </header>
    </div>
  );
}

export default App;
