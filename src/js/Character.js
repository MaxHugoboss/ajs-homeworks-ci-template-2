class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name should be a string with length between 2 and 10 characters');
        }
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Invalid type');
        }
        
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("Cannot level up a dead character");
        }
    
        this.level++;
        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round(this.defence * 1.2);
    
        if (this.health < 100) {
            this.health = 100;
        }
    }       

    damage(points) {
        if (this.health === 0) {
            return;
        }
    
        const actualDamage = points * (1 - this.defence / 100);
        this.health -= actualDamage;
        if (this.health < 0) {
            this.health = 0;
        }
    }  
}

module.exports = Character;
