import { calculateOutput } from './calculateOutput';

describe('calculateOutput', () => {

  test('returns space separated underscores instead of letters', () => {
    const word = 'hakuna';

    const result = calculateOutput(word, []);

    expect(result).toBe('_ _ _ _ _ _');
  });

  test('shows already guessed letters', () => {
    const word = 'hakuna';

    const result = calculateOutput(word, [ 'a', 'k' ]);

    expect(result).toBe('_ a k _ _ a');
  });

});

