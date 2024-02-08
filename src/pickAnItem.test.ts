import { pickAnItem } from './pickAnItem';

describe('pickAnItem', () => {

  test('picks an item from the input array', () => {
    const input = ['a', 'b', 'c'];
    const result = pickAnItem(input);

    expect(result).not.toBeUndefined();
    // https://jestjs.io/docs/using-matchers#arrays-and-iterables
    expect(input).toContain(result);
  });

});
