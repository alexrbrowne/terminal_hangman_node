
export function calculateOutput(word: string, guesses: Array<string>): string {
  return word.split('')
    .map((letter: string): string => guesses.includes(letter) ? letter : '_')
    .join(' ');
}
