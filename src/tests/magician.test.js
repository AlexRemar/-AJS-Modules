import Character from '../js/Character';
import Magician from '../js/magician';

test('Верный ввод маг', () => {
  const received = new Magician('Berny', 'Magician');
  const expected = {
    name: 'Berny',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('B', 'Magician')).toThrow();
});

test('Не верный тип маг', () => {
  expect(() => new Magician('Berny', 'Thief')).toThrow();
});
