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
        newShip.hull = randomNumber(3, 6);
        newShip.firepower = randomNumber(2, 4);
        newShip.accuracy = randomNumber(.6, .8);
        this.ships.push(newShip);
    }
}

// test attack console.log 
// alienShips[2].attack();

// print alien ship info
// alienShips[1].printInfo();

// making the game
// compare accuracy of ships. ship with greater accuracy get to attack. ships that's attacked hull decreases by the fire power of the other. first hull to 0 loses

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
const opps = players[1];
// console.log(arr[1].ships[1].hull);

