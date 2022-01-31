import Character from './Character';
import { Config } from './GamePlay';

export default class Boss extends Character {
    constructor(level) {
        // call super class constructor.
        super(level);
        // common character's properties
        this.maxHealth = Config.boss.maxHealth * level;
        this.hitDamage = Config.boss.hitDamage * level;
        this.health = this.maxHealth;
        this.experienceGiven = Config.boss.experienceGiven;
        this.isDead = false;
    }
}

