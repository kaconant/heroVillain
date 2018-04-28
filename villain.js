/*
- A Villain should be a subclass of Person 
(hint: use "extend", and don't forget to use super() in the constructor)

- A method render() which will output HTML that represents the Villain

- You can render a simple <img> tag if you'd like! 
Find any old "villain" image on google

- Make sure to show the "health" of the villain too
*/

class Villain extends Person {
    constructor(name) {
        super(name);
        this.imageURL = "img/Ganon.png"
        this.selector = '.villain';
    }
}