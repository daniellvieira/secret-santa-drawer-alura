import shuffle from 'just-shuffle';

export function makeDraw(users: string[]) {
  const totalUsers = users.length;
  const shuffled = shuffle(users);
  const result = new Map<string, string>();

  for (let index = 0; index < totalUsers; index++) {
    const indexSanta = index === totalUsers - 1 ? 0 : index + 1;
    result.set(shuffled[index], shuffled[indexSanta]);
  }

  return result;
}
