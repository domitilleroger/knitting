import { formatPart, formatJSON } from './patternUtils';

it('should format part', () => {
  const part1 = {
    title: 'title part 1',
    needlesSize: '3.5',
    instructions: [{
      title: 'instruction title'
    }]
  }
  const part2 = {
    title: 'title part 2',
    needlesSize: '3.5',
    instructions: [{
      title: 'instruction title1',
    },
    {
      title: 'instruction title2',
    },
    {
      title: 'instruction title3',
    }]
  }
  expect(formatPart(part1))
    .toEqual({
      title: 'title part 1',
      needlesSize: '3.5',
      instructions: [{
        order: 0,
        title: 'instruction title'
      }]
    });
  expect(formatPart(part2))
    .toEqual({
      title: 'title part 2',
      needlesSize: '3.5',
      instructions: [{
        order: 0,
        title: 'instruction title1'
      },
      {
        order: 1,
        title: 'instruction title2'
      },
      {
        order: 2,
        title: 'instruction title3'
      }]
    });
})

it('should format json file', () => {
  expect(formatJSON({
    name: 'pattern name',
    part: [{
      title: 'title part',
      instructions: [{
        title: 'instruction title'
      }]
    }]
  }))
    .toEqual({
      name: 'pattern name',
      part: [{
        title: 'title part',
        instructions: [{
          order: 0,
          title: 'instruction title'
        }]
      }]
    });
})
