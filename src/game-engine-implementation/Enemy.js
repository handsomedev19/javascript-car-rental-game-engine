import Character from './Character';
import { Config } from './GamePlay';

export default class Enemy extends Character {
    constructor(level) {
        // call super class constructor.
        super(level);
        // common character's properties
        this.maxHealth = Config.enemy.maxHealth * level;
        this.hitDamage = Config.enemy.hitDamage * level;
        this.health = this.maxHealth;
        this.experienceGiven = Config.enemy.experienceGiven;
        this.isDead = false;
    }
}
