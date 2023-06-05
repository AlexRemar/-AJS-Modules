import Character from './Character';

class Daemon extends Character {
  constructor(name, type) {
    if (type !== 'Daemon') {
      throw new Error('Ошибка. Допускаются только персонажи типа: Daemon');
    }
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export default Daemon;
