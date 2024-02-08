import { render, std, writeLine } from './std';
import { pickAnItem } from './pickAnItem';
import { calculateOutput } from './calculateOutput';
import { renderLines } from './renderLines';
import { BODY_PARTS, WORDS } from './constants'; 
import { HangmanState } from './state';

const state = new HangmanState();

const targetWord = pickAnItem(WORDS).toLowerCase();
const guesses: Array<string> = [];
const MAX_GUESSES = BODY_PARTS.length;

let WRONG_GUESSES = 0;

export function renderScreen(): void {
  // const { targetWord, guesses } = state;
  const output = calculateOutput(targetWord, guesses);
  const lines = renderLines(WRONG_GUESSES);
  render([ ...lines, output ]);
}

async function gameLoop(): Promise<void> {
  // draw an screen iteration
  renderScreen();

  let guessHelper = '';
  const remainingGuesses = MAX_GUESSES - WRONG_GUESSES;
  if (remainingGuesses === 1) {
    guessHelper = 'last guess';
  } else {
    guessHelper = `${remainingGuesses} guesses left`;
  }
  
  const guess = await std.question(`Please guess a letter (${guessHelper}): `);
  guesses.push(guess);
  
  renderScreen();

  if (targetWord.split('').every((letter: string): boolean => guesses.includes(letter))) {
    writeLine('You win!');
    process.exit(0);
  }

  if (!targetWord.includes(guess)) {
    WRONG_GUESSES++;

    if (WRONG_GUESSES === MAX_GUESSES) {
      writeLine('You lose!');
      process.exit(0);
    }
  }

  await gameLoop(); // recursion
}

async function main(): Promise<void> {
  await gameLoop();
  process.exit(0);
}

main();
