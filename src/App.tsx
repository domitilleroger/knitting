import React, { useState } from 'react';
import './App.css';
import jsonPattern from "./patterns/trescao.json";
import { formatJSON } from "./types/Pattern";

import Instruction from "./components/Instruction/Instruction";
import Part from "./components/Part/Part";

function App() {
  const [currentSize, setCurrentSize] = useState(-1);
  const currentPattern = formatJSON(jsonPattern);

  function onChangeSelect(event:any) {
    event.target.value === "all"
      ? setCurrentSize(-10)
      : setCurrentSize(currentPattern.sizes.indexOf(parseInt(event.target.value)));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{currentPattern.name}</h1>
      </header>
      <main>
        <label>Choisir la taille : </label>
        <select name="sizes" id="size-select" onChange={onChangeSelect}>
          <option value={-1}>All</option>
          {currentPattern.sizes.map(size =>
            <option key={size} value={size}>{size}</option>
          )}
        </select>
        {currentPattern.part.map((part, index) => <Part key={index} part={part} currentSize={currentSize}/>)}
      </main>
    </div>
  );
}

export default App;
