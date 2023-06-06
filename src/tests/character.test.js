import Bowman from '../js/bowman';

test('Нулевое здоровье levelUp', () => {
  expect(() => {
    const received = new Bowman('Berny', 'Bowman');
    received.health = 0;
    received.levelUp();
  }).toThrow();
});

test('НЕ нулевое здоровье levelUp', () => {
  const received = new Bowman('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  received.levelUp();
  expect(received).toEqual(expected);
});

test('НЕ нулевое здоровье damage', () => {
  const received = new Bowman('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  received.damage(10);
  expect(received).toEqual(expected);
});

test('Нулевое здоровье damage', () => {
  const received = new Bowman('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  received.damage(150);
  expect(received).toEqual(expected);
});
