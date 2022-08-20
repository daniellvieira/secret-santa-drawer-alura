import { makeDraw } from './makeDraw';

describe('given a secret santa drawer', () => {
  test('should each user does not draw his own name', () => {
    const users = [
      'Daniel',
      'Fernandes',
      'Vieira',
      'João',
      'Márcia',
      'Cláudio',
    ];

    const draw = makeDraw(users);
    users.forEach((user) => {
      const secretSanta = draw.get(user);
      expect(secretSanta).not.toEqual(user);
    });
  });
});
