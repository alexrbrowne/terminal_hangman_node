import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process'

export const std = createInterface({ input, output });

enum Colour {
    Lilac = 45,
    Red = 41,
    // other colors   
  }

export function writeLine(line: string, colour: Colour = Colour.Lilac): void {

    // Set color
    std.write('\x1b[38;2;224;102;255m');
  
    std.write(`${line}`);
  
    // Reset
    std.write("\x1b[0m\n");
  
  }

export function render(lines: Array<string>): void {
  console.clear();
  lines.forEach(writeLine, Colour.Lilac);
}   
