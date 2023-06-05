import Character from './Character';

class Undead extends Character {
  constructor(name, type) {
    if (type !== 'Undead') {
      throw new Error('Ошибка. Допускаются только персонажи типа: Undead');
    }
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export default Undead;
