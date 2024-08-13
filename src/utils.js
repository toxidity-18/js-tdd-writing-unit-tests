export function pointsForWord(word) {
  if (typeof word !== 'string') {
    throw new TypeError('Input must be a string');
  }

  let points = 0;
  for (const char of word) {
    if (/[aeiou]/i.test(char)) {
      points += 1; 
    } else if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
      points += 2;
    } else if (/[aeiou]/i.test(char)) {
      points += 3;
    } else if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
      points += 4;
    }

    if (/[!?,.]/.test(char)) {
      points += 1;
    }
  }
  return points;
}
