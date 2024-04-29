const Character = require('../Character');

describe('Character - damage', () => {
    let character;

    beforeEach(() => {
        character = new Character('Alice', 'Bowman');
    });

    test('damage method', () => {
        character.damage(20);
        expect(character.health).toBeGreaterThan(60); // ожидаем, что здоровье уменьшится на 20, оставляя его больше 80
    });

    test('damage method with health going below 0', () => {
        character.damage(150); // урон больше текущего здоровья
        expect(character.health).toBe(0); // здоровье должно стать равным 0
    });

    test('damage method with health already 0', () => {
        character.health = 0;
        character.damage(20); // персонаж уже мертв, урон не должен влиять
        expect(character.health).toBe(0); // здоровье должно остаться 0
    });
});
