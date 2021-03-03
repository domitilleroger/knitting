export interface Pattern {
  id: string;
  name: string;
  author: string;
  sizes: Array<number>;
  part: Array<IPart>;
}

export interface IPart {
  title: string;
  needlesSize: string;
  instructions: Array<IInstruction>;
};

export enum InstructionTypes {
  default = "default",
  note = "note",
  changeNeedles = "changeNeedles",
  increase = "increase",
  decrease = "decrease",
  verif = "verif",
};

export interface IInstruction {
  order?: number;
  type: InstructionTypes|string;
  content: string;
  values?: Array<number>;
  onlySizes?: Array<number>;
}

function formatPart(part: IPart) {
  return {
    ...part,
    instructions: part.instructions && part.instructions.map((instruction, index) => (
      {
        ...instruction,
        order: index,
      }
    ))
  }
}

export function formatJSON(jsonPattern: Pattern): Pattern {
  return {
    id: jsonPattern.id,
    name: jsonPattern.name,
    author: jsonPattern.author,
    sizes: jsonPattern.sizes,
    part: jsonPattern.part.map(part => formatPart(part)),
  };
}
