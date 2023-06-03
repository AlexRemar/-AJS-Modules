class Character {
  constructor(name, type, attack, defence, health) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Допускаются только имена длиной от 2 символов и не более 10');
    }
    if (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead'
        && type !== 'Zombie') {
      throw new Error('Ошибка. Недопустимый тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export default Character;
