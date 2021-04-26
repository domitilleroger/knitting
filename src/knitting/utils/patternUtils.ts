import { IPart } from "knitting/components/Part/Part";

export interface Pattern {
  id: string;
  name: string;
  author: string;
  gauge: Array<number>;
  recommendedEase: Array<number>;
  yarn: {
    category: string,
    quantity: Array<number>
  };
  needles: Array<number>;
  sizes: Array<number>;
  part: Array<IPart>;
}

export function formatPart(part: IPart) {
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
    ...jsonPattern,
    part: jsonPattern.part.map(part => formatPart(part)),
  };
}
