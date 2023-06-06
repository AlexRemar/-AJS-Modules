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
