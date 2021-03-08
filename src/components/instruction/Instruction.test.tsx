import React from 'react';
import { render } from '@testing-library/react';
import Instruction, { InstructionTypes } from './Instruction';

test('renders Instruction', () => {
  render(<Instruction
    currentSize={2}
    instruction={{
      order: 1,
      type: InstructionTypes.note,
      content: 'content instruction'
    }}
    />);
});
