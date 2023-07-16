class Ship {
    constructor(shipName, hull, firepower, accuracy){
        this.shipName = shipName;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.attacking = true;
    }
    
    attack(){
        console.log(`\n${this.shipName.toUpperCase()} is attacking...`);
    }

    noAttack(){
        console.log(`\n${this.shipName.toUpperCase()} cannot attack.`);
    }

    printInfo(){
        console.log(`${this.shipName.toUpperCase()} HULL: ${this.hull} FIRE POWER: ${this.firepower} ACCURACY: ${this.accuracy}`)
    }
}

// * === ALIEN INFORMATION * === //
// make factory for alien ships
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

// function to create ships
function createShips() {
    // MY SHIP
    const ussAssembly = new Ship('USS Assembly', 20, 5, .7);
    // ussAssembly.printInfo();
    const aliens = new Aliens();

    //generate alien ships and add to array of ships
    for (let i = 0; i <= 8; i++) {
        aliens.generateAlienShip();
    }
    return [ussAssembly, aliens];  
}

// My ship's turn to play
function myShipPlays(){
    if (Math.random() < myShip.accuracy){
        myShip.attacking = true;
        myShip.attack();
        oppShip.hull -= myShip.firepower;
        myShip.printInfo();
        oppShip.printInfo();
    }
    else {
        myShip.attacking = false;
        myShip.noAttack();
        myShip.printInfo;
        oppShip.printInfo();
    }    
}

// Opp ship's turn to play
function oppShipPlays(){
    if (Math.random() < oppShip.accuracy){
        oppShip.attacking = true;
        oppShip.attack();
        myShip.hull -= oppShip.firepower;
        myShip.printInfo();
        oppShip.printInfo();
    }
    else {
        oppShip.attacking = false;
        oppShip.noAttack();
        myShip.printInfo();
        oppShip.printInfo();
    }
}

const players = createShips();
const myShip = players[0];
const allAliens = players[1].ships; // returns array of all alien ships

let retreat = false;
let input;


while ((allAliens.length !== 0) && (retreat === false) && (myShip.hull > 0)) {
    oppShip = allAliens[0];
        while ((myShip.hull > 0) && (oppShip.hull > 0)) {
            if ((myShip.hull > 0) && (oppShip.hull > 0)) {
                myShipPlays();
            }
            else {
                console.log('round over');
            }
            if ((oppShip.hull > 0) && (myShip.hull > 0)) {
                oppShipPlays();
            }
            else {
                console.log('round over');
            }
        }
    allAliens.shift();

    if (myShip.hull <= 0){
        retreat = true;
    }
    else {
        input = prompt("Would you like to retreat? (Y/N)");
        if (input === 'y'){
            retreat = true;
        } 
        else if (input === 'n'){
            retreat = false;
        }
        console.log(`Retreat? ${input}`);
    }
}

// ================================
// fix condition with hull value
// remove ship from array
// edit for user input
// edit formatting
// fix functions
// random number generator











