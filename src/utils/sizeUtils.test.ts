import { getCurrentSizes } from './sizeUtils';

it('sums numbers', () => {
  expect(getCurrentSizes([1, 2, 3], 2))
  .toEqual([ 3 ]);
});
