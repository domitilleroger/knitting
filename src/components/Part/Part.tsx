import React from 'react';
import { IPart } from '../../types/Pattern';
import Instruction from "../../components/Instruction/Instruction";
import './Part.scss';

interface PartProps {
  currentSize: number;
  part: IPart;
}

function Part({ part, currentSize }: PartProps) {
  return <div className="part">
    <h2 className="part-title">{part.title} <span>{part.needlesSize}</span></h2>
    {part.instructions.map(instruction =>
      <Instruction
        key={instruction.order}
        instruction={instruction}
        currentSize={currentSize}
      />
    )}
</div>;
}

export default Part;
