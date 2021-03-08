import React from 'react';
import { getCurrentSizes, renderAllSizes } from "../../utils/sizeUtils";
import './Instruction.scss';
interface InstructionProps {
  currentSize: number;
  instruction: IInstruction;
}

export enum InstructionTypes {
  default = "default",
  note = "note",
  inline = "inline",
  changeNeedles = "changeNeedles",
  control = "control",
  waiting = "waiting",
};

export interface IInstruction {
  order?: number;
  type: InstructionTypes|string;
  content: string;
  values?: Array<number>;
  onlySizes?: Array<number>;
}

function Instruction(props: InstructionProps) {
  let displayInstruction = true;
  const valuesToDisplay = props.instruction.values
    ? renderAllSizes(getCurrentSizes(props.instruction.values, props.currentSize))
    : '';

    if (props.currentSize !== -1 && props.instruction.onlySizes){
      if (props.instruction.onlySizes[props.currentSize] === -1) {
        displayInstruction = false;
      }
    }

  return displayInstruction
    ? (
      <span className={`instruction instruction-${props.instruction.type}`}>
        {props.instruction.content.replace('///', valuesToDisplay)}
      </span>
    )
    : null;
}

export default Instruction;
