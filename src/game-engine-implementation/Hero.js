import Character from './Character';
import { Config } from './GamePlay';

export default class Hero extends Character {
    experience;
    lifes;

    constructor(level) {
        // call super class constructor.
        super(level);
        // common character's properties
        this.maxHealth = Config.hero.maxHealth * level;
        this.hitDamage = Config.hero.hitDamage * level;
        this.health = this.maxHealth;
        this.isDead = false;
        // hero's own properties
        this.experience = 0;
        this.lifes = 2;
        this.experienceToNextLevel = Config.hero.experienceToNextLevel;
    }

    // Check if the hero can be promoted into the next level
    checkToNextLevel() {
        if (this.experience >= this.experienceToNextLevel * this.level) {
            this.level++;
            this.maxHealth = Config.hero.maxHealth * this.level;
            this.hitDamage = Config.hero.hitDamage * this.level;
            return true;
        }
        return false;    
    }

    // Add lifes
    addLifes() {
        this.lifes++;
    }

    /* ~ Add experiences based on the type of opposite */
    // In case of the boss
    addExperienceByBoss (character) {
        this.experience += character.experienceGiven * character.level;
    }
    // In case of the enemy
    addExperienceByEnemy (character) {
        this.experience += character.experienceGiven * character.level;
    }
    // In case of the hero
    addExperienceByHero (character) {
        this.experience += Math.floor(character.experience / 2);
    }
    /* Add experiences based on the type of opposite ~ */
    
    // check the hero can be revived when the hero dies
    revive() {
        if (this.lifes > 0) {
            this.isDead = false;
            this.health = Math.floor(parseFloat(this.maxHealth) * 0.7);
            this.lifes--;
            return true;
        } else {
            return false;
        }
    }
}
