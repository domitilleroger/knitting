export interface Pattern {
  id: string;
  name: string;
  author: string;
  instructions: Array<IInstruction>;
}

export enum InstructionTypes {
  default = "default",
  note = "note",
  changeNeedles = "changeNeedles",
  increase = "increase",
  decrease = "decrease",
  verif = "verif",
};

export interface IValues {
  key: string;
  values: Array<Array<number>>;
  unity: string;
};

export interface IInstruction {
  order?: number;
  type: InstructionTypes|string;
  content: string;
  values?: Array<IValues>;
}

export function formatJSON(jsonPattern: Pattern): Pattern {
  return {
    id: jsonPattern.id,
    name: jsonPattern.name,
    author: jsonPattern.author,
    instructions: jsonPattern.instructions.map((instruction, index) => (
      {
        ...instruction,
        order: index,
      }
    ))
  };
}
