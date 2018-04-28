class Person {
    constructor(name) {
        this.name = name || "Default name"; // = is assignment. so if you use || and one variable is undefined, it's false. 
        this.health = 100;
        this.weapon = null;
    }

    attack(person) { // when inside of a class, we can only have method blocks, not functions. do not put function here.
        
        // what if they forget to pass in "person"?
        if (!person) {
            console.log('You forgot to pass in a person!');
            return; // return the value - so function execution stops and nothing else happens below
        }

        // what if this person doesn't have a weapon?
        if (this.weapon === null) {
            console.log('You forgot to equip weapon!')
            return;
        }

        person.health -= this.weapon.damage;
        // return person.health; -- if you do this, you can apply it to a varible in your main js file to list 
        // such as console.log("Villain now has" + villainHealthLevel + "health");
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }

    render() {
        $(this.selector).html(`
            <img width="200" src=${this.imageURL} />
            <span>${this.health}</span>
            `);
        }


};