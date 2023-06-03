import { Character } from '../Character';

test('Верный ввод', () => {
  const received = new Character('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: 40,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Не верный ввод', () => {
  expect(() => new Character('B', 'Bowman')).toThrow();
});

test('Нулевое здоровье уровень', () => {
  expect(() => {
    const received = new Character('Berny', 'Bowman');
    received.health = 0;
    received.levelUp();
  }).toThrow();
});

test('Нулевое здоровье урон', () => {
  expect(() => {
    const received = new Character('Berny', 'Bowman');
    received.health = 0;
    received.damage();
  }).toThrow();
});
