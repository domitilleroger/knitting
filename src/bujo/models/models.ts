import { Ecategories, Epains, Efluids, Emoods, Esanitories } from './enums';

interface IPain {
  category: Ecategories,
  type: Epains,
  intensity: number,
}

interface IFluid {
  category: Ecategories,
  type: Efluids,
  intensity: number,
}

interface IMood {
  category: Ecategories,
  type: Emoods,
  intensity: number,
}

interface ISanitory {
  category: Ecategories,
  type: Esanitories,
  intensity: number,
}

interface ITracker {
  date: string;
  pains: IPain[],
  fluids: IFluid[],
  moods: IMood[],
  sanitories: ISanitory[],
}

export default ITracker;
