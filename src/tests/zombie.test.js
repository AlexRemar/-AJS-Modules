import Character from '../js/Character';
import Zombie from '../js/zombie';

test('Верный ввод зомби', () => {
  const received = new Zombie('Berny', 'Zombie');
  const expected = {
    name: 'Berny',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('B', 'Zombie')).toThrow();
});

test('Не верный тип зомби', () => {
  expect(() => new Zombie('Berny', 'Thief')).toThrow();
});
