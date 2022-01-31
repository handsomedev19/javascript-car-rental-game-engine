export default class Character {
    health;
    level;
    hitDamage;
    maxHealth;
    isDead;

    constructor(level) {
        this.level = level;
    }

    attack(character) {
        character.takeAHit(this.hitDamage);
        if(character.health <= 0) character.die();
    }

    takeAHit(damage) {
        this.health -= damage;
    }

    die() {
        this.isDead = true;
        this.health = 0;
    }
}