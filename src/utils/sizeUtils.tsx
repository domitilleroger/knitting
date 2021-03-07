/***
* Return value of size(s) selected
* values: array of sizes available
* indexSizeSelected: index of size(s) selected from array of sizes available
***/

export function getCurrentSizes(values: Array<number>, indexSizeSelected: number): Array<number> {
  if (indexSizeSelected !== -1 && values.length && values.length >= indexSizeSelected) {
    return [values[indexSizeSelected]];
  } else {
    return values;
  }
}

/***
* Concat array of sizes to string with ponctuation
***/
export function concatNumbersToString(params: Array<string>): any {
  const reducer = (accumulator: string, currentValue: string): string => accumulator + ", " + currentValue;

  return params.length ? params.reduce(reducer) : '';
}

/***
* Render size groups as strings as it is in the original knit pattern
***/
export function renderSizeGroups(params:Array<string>) {
  const joiners = [', (', ')', '[', ']'];
  const comma = ', ';

  if (params.length === 0) {
    return '';
  }

  else if (params.length === 1) {
    return params[0];
  }
  else if (params.length === 2) {
    return params[0] + joiners[0] + params[1] + joiners[1];
  }
  else if (params.length === 3) {
    return params[0] + joiners[0] + params[1] + joiners[1] + comma + joiners[2] + params[2] + joiners[3];
  }
  else if (params.length === 4) {
    return params[0] + joiners[0] + params[1] + joiners[1] + comma + joiners[2] + params[2] + joiners[3] + comma + params[3];
  }
}

export function parseValueToStringArray(tab: Array<number>, params:Array<number>) {
  return params.map(item => tab[item] ? tab[item].toString() : '');
}

export function getSizeGroups(currentSizes: Array<number>) {
  const sizeGroupsIndexes = [
    [0, 1],
    [2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [12, 13, 14]
  ];

  let sizeGroups = [];

  for (var i = 0 ; i < 4 ; i++) {
    sizeGroups[i] = concatNumbersToString(parseValueToStringArray(currentSizes, sizeGroupsIndexes[i]))
  }

  return sizeGroups;
}

export function renderAllSizes(currentSizes: Array<number>): any {
  return currentSizes.length === 1
    ? currentSizes[0]
    : renderSizeGroups(getSizeGroups(currentSizes));
}
