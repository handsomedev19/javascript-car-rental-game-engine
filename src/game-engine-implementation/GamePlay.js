import Hero from './Hero';
import Enemy from './Enemy';
import Boss from './Boss';

export const Config = {
    hero: {
        maxHealth: 100,
        hitDamage: 50,
        experienceToNextLevel: 150
    },
    enemy: {
        maxHealth: 30,
        hitDamage: 15,
        experienceGiven: 50
    },
    boss: {
        maxHealth: 130,
        hitDamage: 70,
        experienceGiven: 100
    }
}

export default class GamePlay {
    static fight(firstCharacter, secondCharacter) {
        if (firstCharacter instanceof Hero || secondCharacter instanceof Hero) {
            for(;;) {

                //console.log("First character attack! ------------------->");
                firstCharacter.attack(secondCharacter);
                if (this.isGameOver(secondCharacter)) {
                    this.gameOver(firstCharacter, secondCharacter);
                    break;
                }

                //console.log("Second character attack! ------------------->");
                secondCharacter.attack(firstCharacter);
                if (this.isGameOver(firstCharacter)) {
                    this.gameOver(secondCharacter, firstCharacter);
                    break;
                }

            }
        }
        return;
    }

    // judge if the game is over or not
    static isGameOver(character) {
        if (character.isDead) {
            if (character instanceof Hero && character.revive()) return false;
            return true;
        } else {
            return false;
        }
    }

    // finish game and evaluate scores
    static gameOver(winnerCharacter, loserCharacter) {
        if(winnerCharacter instanceof Hero) {
            if (loserCharacter instanceof Boss) {
                winnerCharacter.addLifes();
                winnerCharacter.addExperienceByBoss(loserCharacter);
            }
            if (loserCharacter instanceof Enemy) winnerCharacter.addExperienceByEnemy(loserCharacter);
            if (loserCharacter instanceof Hero) winnerCharacter.addExperienceByHero(loserCharacter);
            winnerCharacter.checkToNextLevel();
        }
    }
}
