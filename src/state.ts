import { WORDS } from './constants'; 
import { pickAnItem } from './pickAnItem';
import { IHangmanState, StateUpdateFn } from './types';

export class HangmanState implements IHangmanState {
  public targetWord: string = '';
  public guesses: Array<string> = [];
  public score: [ number, number ] = [ 0, 0 ];

  public onupdate: StateUpdateFn = (state: HangmanState) => {};

  constructor() {
    this.reset();
  }

  public addGuess(guess: string): void {
    this.guesses.push(guess);
    this.onupdate(this);
  }

  public win(side: 0 | 1): void {
    this.score[side] = this.score[side]++;
    this.onupdate(this);
  }

  public reset(): void {
    this.targetWord = pickAnItem(WORDS).toLowerCase();
    this.guesses = [];
    this.onupdate(this);
  }

}



