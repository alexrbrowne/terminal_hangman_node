import { BODY_PARTS } from './constants';

export function renderLines(wrongGuesses: number): Array<string> {
  const lines: Array<string> = new Array(5).fill('');
  
  // Top
  lines[0] = ' _____';

  // Head
  lines[1] = ' |   '
  if (wrongGuesses >= 1) lines[1] += BODY_PARTS[0];

  // Body & Arms
  lines[2] = ' |  ';
  if (wrongGuesses >= 2) lines[2] += BODY_PARTS[1];
  if (wrongGuesses >= 3) lines[2] += BODY_PARTS[2];
  if (wrongGuesses >= 4) lines[2] += BODY_PARTS[3];

  // Legs
  lines[3] = ' |  ';
  if (wrongGuesses >= 5) lines[3] += BODY_PARTS[4];
   if (wrongGuesses >= 6) lines[3] += ' ' + BODY_PARTS[5];

  // Base
  lines[4] = '_|_';

  return lines;
}
