// start with actors then actions
// actors: our spaceship, alien spaceships
// actions: attack, retreat

// make ship class

class Ship {
    constructor(shipName, hull, firepower, accuracy){
        this.shipName = shipName;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.attack = true;
    }

    attack(){
        console.log(`${this.shipName.toUpperCase()} is attacking...`);
    }

    printInfo(){
        console.log(`SHIP INFORMATION\nNAME: ${this.shipName} HULL: ${this.hull} FIRE POWER: ${this.firepower} ACCURACY: ${this.accuracy}`)
    }
}

// * === ALIEN INFORMATION * === //
// make factory for alien ships
// generate random num in range (min max)
function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}

class Aliens {
    constructor(){
        this.ships = []
    }

    generateAlienShip (){
        const newShip = new Ship();
        // initialize alien ship values
        newShip.shipName = 'Alien ' + (this.ships.length + 1);
        // newShip.hull = randomNumber(3, 6);
        newShip.hull = 4; // remove later
        // newShip.firepower = randomNumber(2, 4);
        newShip.firepower = 3; // remove later
        // newShip.accuracy = randomNumber(.6, .8);
        newShip.accuracy = .7; // remove later
        this.ships.push(newShip);
    }
}

// test attack console.log 
// alienShips[2].attack();

// print alien ship info
// alienShips[1].printInfo();

// making the game
// compare accuracy of ships to randomly generated accuracy. greater accuracy gets to attack. ships that's attacked hull decreases by the fire power of the other. first hull to 0 loses

// function to create ships
function createShips() {
    // MY SHIP
    const ussAssembly = new Ship('USS Assembly', 20, 5, .7);
    // ussAssembly.printInfo();
    const aliens = new Aliens();

    //generate alien ships and add to array of ships
    for (let i = 0; i <= 1; i++) {
        aliens.generateAlienShip();
    }
    // rename for clarity
    const alienShips = aliens.ships;

    return [ussAssembly, aliens];
    // print array of ships
    // console.log(aliens);

    // print 1 ship from array and some ship properties
    // console.log(alienShips[1]);
    // console.log(alienShips[2].hull);
}

const players = createShips();
const myShip = players[0];
const allAliens = players[1].ships; // returns array of all alien ships
const oppShip = allAliens[0]

// starting scores.
console.log('starting scores');
console.log(myShip)
// console.log(allAliens);
console.log(oppShip)

let myShipAttack = true;
// if (Math.random() < myShip.accuracy){
if (.5 < myShip.accuracy){
    
    console.log('My ship can attack!');
    oppShip.hull -= myShip.firepower;
    console.log(myShip);
    console.log(oppShip);
}

if (.5 < oppShip.accuracy){
    console.log('Your ship can attack!');
    myShip.hull -= oppShip.firepower;
    console.log(myShip);
    console.log(oppShip);
}



