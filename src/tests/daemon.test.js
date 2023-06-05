import Character from '../js/Character';
import Daemon from '../js/daemon';

test('Верный ввод демон', () => {
  const received = new Daemon('Berny', 'Daemon');
  const expected = {
    name: 'Berny',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Не верное имя', () => {
  expect(() => new Character('B', 'Daemon')).toThrow();
});

test('Не верный тип демон', () => {
  expect(() => new Daemon('Berny', 'Thief')).toThrow();
});
