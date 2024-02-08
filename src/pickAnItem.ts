
export function pickAnItem(arrayOfStrings: Array<string>): string {
  const index = Math.floor(Math.random() * arrayOfStrings.length);
  return arrayOfStrings[index];
}

