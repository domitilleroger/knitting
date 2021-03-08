import React from 'react';
import { render } from '@testing-library/react';
import Part from './Part';

test('renders Part', () => {
  render(<Part
      part={{
        title: 'title part',
        needlesSize: '3.5',
        instructions: [{
          type: 'default',
          content: 'content'
        }]
      }}
      currentSize={3}
    />);
});
