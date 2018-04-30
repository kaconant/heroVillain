/*
- When the page loads, prompt the user for the name of the Hero 
and the name of the Villain.

- Create a new Hero and a new Villain, render them to the screen

- Create two new Weapons, 
and have the Hero and Villain each equip one.

- Provide two buttons on the screen: 
one that will let the Hero attack the Villain and 
another button that will let the Villain attack the Hero

- When the Hero's health goes below 1, show "Game over"

- When the Villain's health goes below 1, show "Victory!"
*/

$(function() {

let heroName = prompt("What is your Hero's name?")
let villainName = prompt("What is your Villain's name?")

let hero = new Hero(heroName);
let villain = new Villain(villainName)
hero.render();
villain.render();

let heroWeapon = new Weapon("Master Sword");
let villainWeapon = new Weapon("Claws");

hero.equipWeapon(heroWeapon);
villain.equipWeapon(villainWeapon);

function gameOver() {
    if(villain.health < 1) {
        alert('Victory!')
    } else if (hero.health < 1) {
        alert('Game over!')
    }
}

$('#heroAttack').click(() => {
    hero.attack(villain);
    villain.render();
    gameOver();
});

$('#villainAttack').click(() => {
    villain.attack(hero);
    hero.render();
    gameOver();
});

})