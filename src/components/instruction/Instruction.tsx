import React from 'react';
import { IInstruction } from '../../types/Pattern';
import { getCurrentSizes, DisplaySizes } from "../../sizes/size";

interface InstructionProps {
  currentSize: number;
  instruction: IInstruction;
}

function Instruction(props: InstructionProps) {
  let displayInstruction = true;
  const valuesToDisplay = props.instruction.values
    ? DisplaySizes(getCurrentSizes(props.instruction.values, props.currentSize))
    : '';

    if (props.currentSize !== -1 && props.instruction.onlySizes){
      if (props.instruction.onlySizes[props.currentSize] === -1) {
        displayInstruction = false;
      }
    }

  return displayInstruction
    ? (
      <span className="instruction instruction-{instruction.type}">
        {props.instruction.content.replace('///', valuesToDisplay)}
      </span>
    )
    : null;
}

export default Instruction;
