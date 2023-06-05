import Character from '../js/Character';
import Undead from '../js/undead';

test('Верный ввод нежить', () => {
  const received = new Undead('Berny', 'Undead');
  const expected = {
    name: 'Berny',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('B', 'Undead')).toThrow();
});

test('Не верный тип нежить', () => {
  expect(() => new Undead('Berny', 'Thief')).toThrow();
});
