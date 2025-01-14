import { fromPopperPlacement } from './fromPopperPlacement';
import type { Placement } from '@popperjs/core';

describe('fromPopperPlacement', () => {
  it.each([
    //[align, position, placement]
    ['top-start', 'start', 'above'],
    ['top', undefined, 'above'],
    ['top-end', 'end', 'above'],
    ['bottom-start', 'start', 'below'],
    ['bottom', undefined, 'below'],
    ['bottom-end', 'end', 'below'],
    ['left-start', 'top', 'before'],
    ['left', undefined, 'before'],
    ['left-end', 'bottom', 'before'],
    ['right-start', 'top', 'after'],
    ['right', undefined, 'after'],
    ['right-end', 'bottom', 'after'],
    ['top', undefined, 'above'],
    ['bottom', undefined, 'below'],
    ['left', undefined, 'before'],
    ['right', undefined, 'after'],
  ])(
    'should use placement %s and return position: %s and alignment: %s',
    (placement, expectedAlignment, expectedPosition) => {
      // Act
      const { position, alignment } = fromPopperPlacement(placement as Placement);

      // Assert
      expect(position).toEqual(expectedPosition);
      expect(alignment).toEqual(expectedAlignment);
    },
  );
});
