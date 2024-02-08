import { renderLines } from './renderLines';

describe('drawLines', () => {

  test('draws empty structure', () => {
    const lines = renderLines(0);

    expect(lines).toEqual([
      ' _____',
      ' |   ',
      ' |  ',
      ' |  ',
      '_|_',
    ]);
  });

  test('draws head only', () => {
    const lines = renderLines(1);

    expect(lines).toEqual([
      ' _____',
      ' |   O',
      ' |  ',
      ' |  ',
      '_|_',
    ]);
  });
  
  test('draws left arm', () => {
    const lines = renderLines(2);

    expect(lines).toEqual([
      ' _____',
      ' |   O',
      ' |  /',
      ' |  ',
      '_|_',
    ]);
  });
  
  test('draws left arm + body', () => {
    const lines = renderLines(3);

    expect(lines).toEqual([
      ' _____',
      ' |   O',
      ' |  /|',
      ' |  ',
      '_|_',
    ]);
  });
  
  test('draws left leg', () => {
    const lines = renderLines(5);

    expect(lines).toEqual([
      ' _____',
      ' |   O',
      ' |  /|\\',
      ' |  /',
      '_|_',
    ]);
  });
  
  test('draws left leg + right leg', () => {
    const lines = renderLines(6);

    expect(lines).toEqual([
      ' _____',
      ' |   O',
      ' |  /|\\',
      ' |  / \\',
      '_|_',
    ]);
  });
  
});
