import { Epains, Efluids, Emoods, Esanitories } from './enums';

interface IPains {
  [Epains.head]?: number,
  [Epains.throat]?: number,
  [Epains.belly]?: number,
  [Epains.boobL]?: number,
  [Epains.boobR]?: number,
  [Epains.acne]?: number,
}

interface IFluids {
  [Efluids.brown]: number,
  [Efluids.white]: number,
  [Efluids.red]: number,
  [Efluids.clot]: number,
  [Efluids.eggWhite]: number,
}

interface IMoods {
  [Emoods.depression]?: number,
  [Emoods.tears]?: number,
  [Emoods.sadness]?: number,
  [Emoods.energy]?: number,
  [Emoods.neutral]?: number,
  [Emoods.motivation]?: number,
}

interface ISanitories {
  [Esanitories.cup]?: number,
  [Esanitories.towel]?: number,
  [Esanitories.towelZW]?: number,
  [Esanitories.panty]?: number,
  [Esanitories.tampon]?: number,
}

interface ITracker {
  date: Date;
  pains: IPains,
  fluids: IFluids,
  moods: IMoods,
  sanitories: ISanitories,
  notes?: string,
}

export default ITracker;
