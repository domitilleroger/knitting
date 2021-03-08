import {
  getCurrentSizes,
  concatNumbersToString,
  renderSizeGroups,
  parseValueToStringArray,
  getSizeGroups,
  renderAllSizes,
} from './sizeUtils';

it('should return Current Size selected from array of sizes', () => {
  const values = [ 80, 85, 90, 95, 100 ];
  expect(getCurrentSizes([], -1))
    .toEqual([]);
  expect(getCurrentSizes(values, -1))
    .toEqual(values);
  expect(getCurrentSizes([], 2))
    .toEqual([]);
  expect(getCurrentSizes(values, 2))
    .toEqual([ 90 ]);
  expect(getCurrentSizes(values, 10))
    .toEqual(values);
});

it('should return a string with numbers with ponctuation', () => {
  expect(concatNumbersToString([]))
    .toEqual('');
  expect(concatNumbersToString(['1']))
    .toEqual('1');
  expect(concatNumbersToString(['1', '20']))
    .toEqual('1, 20');
  expect(concatNumbersToString(['1', '20', '40', '23', '34']))
    .toEqual('1, 20, 40, 23, 34');
})

it('should renderSizeGroups', () => {
  expect(renderSizeGroups([]))
    .toEqual('');
  expect(renderSizeGroups(['group 1']))
    .toEqual('group 1');
  expect(renderSizeGroups(['group 1', 'group 2']))
    .toEqual('group 1, (group 2)');
  expect(renderSizeGroups(['group 1', 'group 2', 'group 3']))
    .toEqual('group 1, (group 2), [group 3]');
  expect(renderSizeGroups(['group 1', 'group 2', 'group 3', 'group 4']))
    .toEqual('group 1, (group 2), [group 3], group 4');
})

it('should parse value to string array', () => {
  const values = [ 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150 ];
  expect(parseValueToStringArray(values, [0, 1]))
    .toEqual(['80', '85']);
  expect(parseValueToStringArray(values, [2, 3, 4, 5, 6]))
    .toEqual(['90', '95', '100', '105', '110']);
  expect(parseValueToStringArray(values, [7, 8, 9, 10, 11]))
    .toEqual(['115', '120', '125', '130', '135']);
  expect(parseValueToStringArray(values, [12, 13, 14]))
    .toEqual(['140', '145', '150']);

  expect(parseValueToStringArray([], [0, 1]))
    .toEqual(['-', '-'])
  expect(parseValueToStringArray([], [2, 3, 4, 5, 6]))
    .toEqual(['-', '-', '-', '-', '-']);
  expect(parseValueToStringArray([], [7, 8, 9, 10, 11]))
    .toEqual(['-', '-', '-', '-', '-']);
  expect(parseValueToStringArray([], [12, 13, 14]))
    .toEqual(['-', '-', '-']);

})

it('should getSizeGroups', () => {
  const values = [ 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150 ];
  expect(getSizeGroups([]))
    .toEqual([
      "-, -",
      "-, -, -, -, -",
      "-, -, -, -, -",
      "-, -, -"
    ]);
  expect(getSizeGroups([80, 85]))
    .toEqual([
      "80, 85",
      "-, -, -, -, -",
      "-, -, -, -, -",
      "-, -, -"
    ]);
  expect(getSizeGroups(values))
    .toEqual([
      "80, 85",
      "90, 95, 100, 105, 110",
      "115, 120, 125, 130, 135",
      "140, 145, 150"
    ]);
})

it('should renderAllSizes', () => {
  const values = [ 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150 ];
  expect(renderAllSizes([]))
    .toEqual('-, -, (-, -, -, -, -), [-, -, -, -, -], -, -, -');
  expect(renderAllSizes([95]))
      .toEqual('95');
  expect(renderAllSizes(values))
    .toEqual('80, 85, (90, 95, 100, 105, 110), [115, 120, 125, 130, 135], 140, 145, 150');
})
