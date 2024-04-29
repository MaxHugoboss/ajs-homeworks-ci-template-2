const Character = require('../Character');

describe('Character - damage', () => {
    let character;

    beforeEach(() => {
        character = new Character('Alice', 'Bowman');
    });

    test('damage method', () => {
        character.damage(20);
        expect(character.health).toBeLessThan(100); // здоровье должно уменьшиться, но остаться больше 0
    });    

    test('damage method with health going below 0', () => {
        character.damage(150); // inflicts more damage than current health
        expect(character.health).toBe(0); // health should become 0
    });

    test('damage method with health already 0', () => {
        character.health = 0;
        character.damage(20); // character already dead, damage should have no effect
        expect(character.health).toBe(0); // health should remain 0
    });
});
