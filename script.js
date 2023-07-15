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

// const ussAssembly = new Ship(20, 5, .7);

// console.log(ussAssembly);

// make class for our ship

class alienShips {
    constructor(){
        this.ships = []
    }

    generateAlienShip (){
        const newShip = new Ship();
        this.ships.push(newShip);
    }
}

const aliens = new alienShips();

//generate alien ships and add to array of ships
for (let i = 0; i <= 5; i++) {
    aliens.generateAlienShip();
}
// print array of ships
console.log(aliens);
// print 1 ship from array
console.log(aliens.ships[1]);
console.log(aliens.ships[2]);
