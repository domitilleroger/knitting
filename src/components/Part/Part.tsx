import React from 'react';
import { IPart, IInstruction } from '../../types/Pattern';
import { getCurrentSizes, DisplaySizes } from "../../sizes/size";
import Instruction from "../../components/Instruction/Instruction";

interface PartProps {
  currentSize: number;
  part: IPart;
}

function Part({ part, currentSize }: PartProps) {
  return <div className="part">
    <h2>{part.title} (<i>{part.needlesSize}</i>)</h2>
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
