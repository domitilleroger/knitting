import React, { useState } from 'react';
import './App.css';
import jsonPattern from "./patterns/trescao.json";
import { formatJSON } from "./types/Pattern";

import Instruction from "./components/instruction/Instruction";

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
        {
          currentPattern.part.map((partt, index) =>
            <div key={index}>
              <h2>{partt.title} (<i>{partt.needlesSize}</i>)</h2>
              {partt.instructions.map(instruction =>
                <Instruction
                  key={instruction.order}
                  instruction={instruction}
                  currentSize={currentSize}
                />
              )}
          </div>
          )
        }
      </main>
    </div>
  );
}

export default App;
