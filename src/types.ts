export type StateUpdateFn = (state: IHangmanState) => void;

export interface IHangmanState {
  targetWord: string;
  guesses: Array<string>;
  score: [ number, number ];

  onupdate: StateUpdateFn;

  addGuess(guess: string): void;
  win(side: 0 | 1): void;
  reset(): void;
}