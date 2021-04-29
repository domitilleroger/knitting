import { Ecategories, Epains, Efluids, Emoods, Esanitories } from './enums';

export const categories = {
  [Ecategories.body]: [
    Epains,
    Efluids,
  ],
  [Ecategories.mindset]: [
    Emoods,
  ],
  [Ecategories.material]: [
    Esanitories,
  ]
};
