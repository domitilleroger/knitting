export function getCurrentSizes(values: Array<Array<number>>, sizeSelected: number|null): Array<Array<number>> {
  return values.map(vals => {
    if (sizeSelected !== null) {
      return [vals[sizeSelected]];
    } else {
      return vals;
    }
  });
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

function DisplayAllSizes(currentSizes: Array<number>) {
  const first = concatNumbersToString([currentSizes[0].toString(), currentSizes[1].toString()]);
  const second = concatNumbersToString([currentSizes[2].toString(), currentSizes[3].toString(), currentSizes[4].toString(), currentSizes[5].toString(),currentSizes[6].toString()]);
  const third = concatNumbersToString([currentSizes[7].toString(), currentSizes[8].toString(), currentSizes[9].toString(), currentSizes[10].toString(),currentSizes[11].toString()]);
  const fourth = concatNumbersToString([currentSizes[12].toString(), currentSizes[13].toString(), currentSizes[14].toString()]);

  return concatSizeGroups([first, second, third, fourth]);
}

export function DisplaySizes(currentSizes: Array<number>): any {
  return currentSizes.length === 1
    ? currentSizes[0]
    : DisplayAllSizes(currentSizes);
}
