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
        this.attacking = true;
    }
    
    attack(){
        console.log(`${this.shipName.toUpperCase()} is attacking...`);
    }

    noAttack(){
        console.log(`${this.shipName.toUpperCase()} cannot attack.`);
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
        newShip.hull = 6; // remove later
        // newShip.firepower = randomNumber(2, 4);
        newShip.firepower = 4; // remove later
        // newShip.accuracy = randomNumber(.6, .8);
        newShip.accuracy = .8; // remove later
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
    for (let i = 0; i <= 4; i++) {
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

// generate game start function




// My ship's turn to play
function myShipPlays(){
    if (Math.random() < myShip.accuracy){
        myShip.attacking = true;
        myShip.attack();
        oppShip.hull -= myShip.firepower;
        console.log(myShip);
        console.log(oppShip);
    }
    else {
        myShip.attacking = false;
        myShip.noAttack();
        console.log(myShip);
        console.log(oppShip);
    }    
}

// opp ships, turn to play
function oppShipPlays(){
    if (Math.random() < oppShip.accuracy){
        oppShip.attacking = true;
        oppShip.attack();
        myShip.hull -= oppShip.firepower;
        console.log(myShip);
        console.log(oppShip);
    }
    else {
        oppShip.attacking = false;
        oppShip.noAttack();
        console.log(myShip);
        console.log(oppShip);
    }
}

const players = createShips();
const myShip = players[0];
const allAliens = players[1].ships; // returns array of all alien ships
let oppShip;

// set retreat value
 




// while game end != true and/or array not empty
// starting scores.
console.log('starting scores');
console.log(myShip)
// console.log(allAliens);
// console.log(oppShip)

let retreat = false;
let input;
const gameEnd = false;

for (const ship of allAliens){
    oppShip = ship;
    console.log(oppShip);
    // run continuous game til one player reaches 0
    while ((myShip.hull >= 0) && (oppShip.hull) >= 0){ // check conditions here
        myShipPlays();
        oppShipPlays();
        // print winner
        if (myShip.hull > 0){
            console.log(`${myShip.shipName} wins! ${oppShip.shipName} loses :(`);
        }
        else {
            console.log(`${myShip.shipName} loses :( ${oppShip.shipName} wins!`);
        }
    }
    console.log(allAliens);
}


/*
input = prompt("Would you like to retreat? (Y/N)");
if (input === 'y'){
    retreat = true;
} 
else if (input === 'n'){
    retreat = false;
}
console.log(`Retreat? ${input}`);
*/












