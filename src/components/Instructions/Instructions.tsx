import React, { useState } from 'react';
import '../../App.scss';
import jsonPattern from "../../patterns/trescao.json";
import { formatJSON } from "../../utils/Pattern";

import Part from "../../components/Part/Part";

const defaultCurrentSize = -10;
const currentSizeToDev = 105;

function Instructions() {
  const currentPattern = formatJSON(jsonPattern);
  const [currentSize, setCurrentSize] = useState(currentPattern.sizes.indexOf(currentSizeToDev));

  function onChangeSelect(event:any) {
    event.target.value === "all"
      ? setCurrentSize(defaultCurrentSize)
      : setCurrentSize(currentPattern.sizes.indexOf(parseInt(event.target.value)));
  }

  return (
    <div className="instructions">
      <label>Choisir la taille : </label>
      <select name="sizes" id="size-select" onChange={onChangeSelect}>
        <option value={-1}>All</option>
        {currentPattern.sizes.map(size =>
          <option key={size} value={size} defaultValue={currentSizeToDev}>{size}</option>
        )}
      </select>
      <div className="part">
        {currentPattern.part.map((part, index) => <Part key={index} part={part} currentSize={currentSize}/>)}
      </div>
    </div>
  );
}

export default Instructions;
