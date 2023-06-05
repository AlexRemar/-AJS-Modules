import Character from './Character';

class Zombie extends Character {
  constructor(name, type) {
    if (type !== 'Zombie') {
      throw new Error('Ошибка. Допускаются только персонажи типа: Zombie');
    }
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export default Zombie;
