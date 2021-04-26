import React from 'react';
import shortid from 'shortid';

import Instruction, { IInstruction } from "knitting/components/Instruction/Instruction";
import './Part.scss';

export interface IPart {
  title: string;
  needlesSize: string;
  instructions: Array<IInstruction>;
};

interface PartProps {
  currentSize: number;
  part: IPart;
}

function Part({ part, currentSize }: PartProps) {
  return <div className="part">
    <h2 className="part-title">{part.title} <span>{part.needlesSize}</span></h2>
    {part.instructions.map(instruction =>
      <Instruction
        key={shortid.generate()}
        instruction={instruction}
        currentSize={currentSize}
      />
    )}
  </div>;
}

export default Part;
