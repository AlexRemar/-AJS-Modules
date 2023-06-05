import Character from '../js/Character';
import Swordsman from '../js/swordsman';

test('Верный ввод мечник', () => {
  const received = new Swordsman('Berny', 'Swordsman');
  const expected = {
    name: 'Berny',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('B', 'Swordsman')).toThrow();
});

test('Не верный тип мечник', () => {
  expect(() => new Swordsman('Berny', 'Thief')).toThrow();
});
