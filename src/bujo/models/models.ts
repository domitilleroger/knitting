import { Ecategories, Epains, Efluids, Emoods, Esanitories } from './enums';

interface ITracker {
  date: string;
  pains: [{
    category: Ecategories,
    type: Epains,
    intensity: number,
  }],
  fluids: [{
    category: Ecategories,
    type: Efluids,
    intensity: number,
  }],
  moods: [{
    category: Ecategories,
    type: Emoods,
    intensity: number,
  }],
  sanitories: [{
    category: Ecategories,
    type: Esanitories,
    intensity: number,
  }],
}

export default ITracker;
