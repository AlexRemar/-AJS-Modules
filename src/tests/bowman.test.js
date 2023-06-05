import Character from '../js/Character';
import Bowman from '../js/bowman';

test('Верный ввод лучник', () => {
  const received = new Bowman('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('B', 'Bowman')).toThrow();
});

test('Не верный тип лучник', () => {
  expect(() => new Bowman('Berny', 'Thief')).toThrow();
});

test('Нулевое здоровье уровень', () => {
  expect(() => {
    const received = new Character('Berny', 'Bowman');
    received.health = 0;
    received.levelUp();
  }).toThrow();
});

test('НЕ нулевое здоровье уровень', () => {
  const received = new Character('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 120,
    defence: 48,
  };
  received.health = 50;
  received.levelUp();
  expect(received).toEqual(expected);
});

test('НЕ нулевое здоровье урон', () => {
  const received = new Character('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: 44,
    level: 1,
    attack: 100,
    defence: 40,
  };
  received.health = 50;
  received.damage(10);
  expect(received).toEqual(expected);
});

test('Нулевое здоровье урон', () => {
  const received = new Character('Berny', 'Bowman');
  const expected = {
    name: 'Berny',
    type: 'Bowman',
    health: -6,
    level: 1,
    attack: 100,
    defence: 40,
  };
  received.health = 0;
  received.damage(10);
  expect(received).toEqual(expected);
});

test('Отрицательное здоровье урон', () => {
  const received = new Character('Berny', 'Bowman');
  received.health = -1;
  received.damage(10);
  expect(received).toThrow();
});