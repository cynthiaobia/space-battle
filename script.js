// start with actors then actions
// actors: our spaceship, alien spaceships
// actions: attack, retreat

// make ship class

class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

// MY SHIP
const ussAssembly = new Ship(20, 5, .7);
console.log('My ship: ', ussAssembly);

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
        newShip.hull = randomNumber(3, 6);
        newShip.firepower = randomNumber(2, 4);
        newShip.accuracy = randomNumber(.6, .8);
        this.ships.push(newShip);
    }
}

const aliens = new Aliens();

//generate alien ships and add to array of ships
for (let i = 0; i <= 5; i++) {
    aliens.generateAlienShip();
}

// print array of ships
console.log(aliens);

// rename for clarity
const alienShips = aliens.ships;

// print 1 ship from array and some ship properties
console.log(alienShips[1]);
console.log(alienShips[2].hull);