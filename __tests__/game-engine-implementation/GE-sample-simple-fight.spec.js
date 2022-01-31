const { describe, test, expect } = global;
import GamePlay, { Config } from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Enemy from '../../src/game-engine-implementation/Enemy';
import Boss from '../../src/game-engine-implementation/Boss';

describe('GE-sample-simple-fight', function () {

    test('If hero will take damage and defeat the enemy', () => {
        const hero = new Hero(2);
        const enemy = new Enemy(4);

        GamePlay.fight(hero, enemy);

        expect(hero.health).toBe(140);
        expect(enemy.health).toBe(0);
    })

    test('If hero will take damage and defeat the boss', () => {
        const boss3 = new Boss(3);
        const hero5 = new Hero(5);

        GamePlay.fight(hero5, boss3);

        expect(hero5.health).toBe(290);
        expect(hero5.experience).toBe(300);
        expect(hero5.level).toBe(5);
        expect(boss3.health).toBe(0);
    })

    test('If hero will take damage and defeat the another hero', () => {
        let hero1 = new Hero(1);
        hero1.experience = 600;         // set expereince manually to test the change of it
        let hero2 = new Hero(2);
        hero2.experience = 100;         // set expereince manually to test the change of it

        GamePlay.fight(hero1, hero2);

        expect(hero1.health).toBe(0);
        expect(hero1.lifes).toBe(0);
        expect(hero1.level).toBe(1);
        expect(hero2.health).toBe(50);
        expect(hero2.lifes).toBe(2);
        expect(hero2.experience).toBe(400);
        expect(hero2.level).toBe(3);
    })

});

/** Game with hero5 and boss3
    
    Initial status.
    boss3 = {
        health: 130 * 3 = 390
        hitDamage: 70 * 3 = 210
    }
    hero5 = {
        health: 100 * 5 = 500
        hitDamage: 50 * 5 = 250
        experience: 0
    }
    ---------------------------->

    GamePlay.fight(hero5, boss3)
    
    Round 1. hero5 attacks
    boss3 = {
        health: 390 - 250 = 140
        hitDamage: 210
    }
    hero5 = {
        health: 500
        hitDamage: 250
        experience: 0
    }
    ---------------------------->

    Round 2. boss3 attacks.
    boss3 = {
        health: 140
        hitDamage: 210
    }
    hero5 = {
        health: 500 - 210 = 290
        hitDamage: 250
        experience: 0
    } 
    ---------------------------->

    Round 3. hero5 attacks again.
    boss3 = {
        health: 140 - 250 = -110
        hitDamage: 210
    }
    hero5 = {
        health: 290
        hitDamage: 250
        experience: 0
    }
    ---------------------------->

    GameOver.
    boss3 = {
        health: 0(-110)
        hitDamage: 210
    }
    hero5 = {
        health: 290
        hitDamage: 250
        experience: 0 + 100 * 3 = 300
    }
    ---------------------------->
*/

/** Game with hero1 and hero2

    Initial status.
    hero1 = {
        health: 100
        hitDamage: 50
        experience: 600
        level: 1
        lifes: 2
    }
    hero2 = {
        health: 200
        hitDamage: 100
        experience: 100
        level: 2
        lifes: 2
    }
    ---------------------------->

    GamePlay.flight(hero1, hero2);

    Round 1. hero1 attacks.
    hero1 = {
        health: 100
        hitDamage: 50
        experience: 600
        level: 1
        lifes: 2
    }
    hero2 = {
        health: 200 - 50 = 150
        hitDamage: 100
        experience: 100
        level: 2
        lifes: 2
    }
    ---------------------------->

    Round 2. hero2 attacks.
    hero1 = {
        health: 100 - 100 = 0
        hitDamage: 50
        experience: 600
        level: 1
        lifes: 2
    }
    hero2 = {
        health: 150
        hitDamage: 100
        experience: 100
        level: 2
        lifes: 2
    }
    ---------------------------->

    Round 3. hero1 revives and attacks.
    hero1 = {
        health: 70
        hitDamage: 50
        experience: 600
        level: 1
        lifes: 1
    }
    hero2 = {
        health: 150 - 50 = 100
        hitDamage: 100
        experience: 100
        level: 2
        lifes: 2
    }
    ---------------------------->

    Round 4. hero2 attacks.
    hero1 = {
        health: 70 - 100 = -30
        hitDamage: 50
        experience: 600
        level: 1
        lifes: 1
    }
    hero2 = {
        health: 100
        hitDamage: 100
        experience: 100
        level: 2
        lifes: 2
    }
    ---------------------------->

    Round 5. hero1 revives and attacks.
    hero1 = {
        health: 70
        hitDamage: 50
        experience: 600
        level: 1
        lifes: 0
    }
    hero2 = {
        health: 100 - 50 = 50
        hitDamage: 100
        experience: 100
        level: 2
        lifes: 2
    }
    ---------------------------->

    Round 6. hero2 attacks.
    hero1 = {
        health: 70 - 100 = -30
        hitDamage: 50
        experience: 600
        level: 1
        lifes: 0
    }
    hero2 = {
        health: 50
        hitDamage: 100
        experience: 100
        level: 2
        lifes: 2
    }
    ---------------------------->

    GameOver
    hero1 = {
        health: 0
        hitDamage: 50
        experience: 0
        level: 1
        lifes: 0
    }
    hero2 = {
        health: 50
        hitDamage: 100
        experience: 100 + 600 / 2 = 400
        level: 2 + 1 = 3
        lifes: 2
    }
    ---------------------------->
 */