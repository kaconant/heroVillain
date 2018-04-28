/*
- A property called "name", 
which is a string passed in through the constructor

- A property called "damage", 
which is a random number between 10 and 20
*/


class Weapon {
    constructor(name) {
        this.name = name;
        this.damage = Math.floor(Math.random() * 10 + 10); // goes from 0-1 to 1-10 and then adds +10 to get the range from 10-20 damage
    }
}