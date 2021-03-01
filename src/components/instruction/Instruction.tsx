import React from 'react';
import { IInstruction } from '../../types/Pattern';
import { getCurrentSizes, DisplaySizes } from "../../sizes/size";

interface InstructionProps {
  currentSize: number;
  instruction: IInstruction;
}

function Instruction(props: InstructionProps) {
  props.instruction.values && console.log(DisplaySizes(getCurrentSizes(props.instruction.values[0].values, props.currentSize)[0]))

  return (
    <div className="instructions">
      {props.instruction.content}
    </div>
  );
}

export default Instruction;
