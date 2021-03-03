export function getCurrentSizes(values: Array<number>, sizeSelected: number): Array<number> {
  if (sizeSelected !== -1) {
    return [values[sizeSelected]];
  } else {
    return values;
  }
}

function concatNumbersToString(params: Array<string>): any {
  const reducer = (accumulator: string, currentValue: string): string => accumulator + ", " + currentValue;

  return params.reduce(reducer);
}

function concatSizeGroups(params:Array<string>) {
  const reducer = (accumulator: string, currentValue: string, index: number): string => {
    const joiners = [' (', '), [', '], '];
    return accumulator + joiners[index-1] + currentValue;
  };

  return params.reduce(reducer);
}

function convertValueToStringArray(tab: Array<number>, params:Array<number>) {
  return params.map(item => tab[item].toString());
}

function DisplayAllSizes(currentSizes: Array<number>) {
  const first = concatNumbersToString(convertValueToStringArray(currentSizes, [0, 1]));
  const second = concatNumbersToString(convertValueToStringArray(currentSizes, [2, 3, 4, 5, 6]));
  const third = concatNumbersToString(convertValueToStringArray(currentSizes, [7, 8, 9, 10, 11]));
  const fourth = concatNumbersToString(convertValueToStringArray(currentSizes, [12, 13, 14]));

  return concatSizeGroups([first, second, third, fourth]);
}

export function DisplaySizes(currentSizes: Array<number>): any {
  return currentSizes.length === 1
    ? currentSizes[0]
    : DisplayAllSizes(currentSizes);
}
