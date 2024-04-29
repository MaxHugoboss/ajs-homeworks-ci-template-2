const Character = require('../Character');

describe('Character - levelUp', () => {
    let character;

    beforeEach(() => {
        character = new Character('Alice', 'Bowman');
    });

    test('levelUp method', () => {
        character.levelUp();
        expect(character.level).toBe(2);
        expect(character.attack).toBe(30); // 25 * 1.2
        expect(character.defence).toBe(30); // 25 * 1.2
        expect(character.health).toBe(100); // health should be set to 100
    });

    test('levelUp method when health is 0', () => {
        character.health = 0;
        expect(() => {
            character.levelUp();
        }).toThrow('Cannot level up a dead character');
    });
});
