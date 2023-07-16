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
        console.log(`${this.shipName.toUpperCase()} missed and cannot attack.`);
    }

    printInfo(){
        console.log(`${this.shipName.toUpperCase()} - HULL: ${this.hull} FIRE POWER: ${this.firepower} ACCURACY: ${this.accuracy}`)
    }
}

// * === ALIEN INFORMATION * === //
// make factory for alien ships
class Aliens {
    constructor(){
        this.ships = []
    }

    generateAlienShip (){
        const newShip = new Ship();
        newShip.shipName = 'Alien ' + (this.ships.length + 1);
        newShip.hull = Math.random() * (6 - 3) + 3
        newShip.firepower = Math.random() * (4 - 2) + 2
        newShip.accuracy = Math.random() * (.8 - .6) + .6
        this.ships.push(newShip);
    }
}

// function to create ships
function createShips() {
    const ussAssembly = new Ship('USS Assembly', 20, 5, .7);
    const aliens = new Aliens();

    //generate alien ships and add to array of ships
    for (let i = 0; i < 6; i++) {
        aliens.generateAlienShip();
    }
    return [ussAssembly, aliens];  
}

// My ship's turn to play
function myShipPlays(){
    if (Math.random() < myShip.accuracy){
        myShip.printInfo();
        oppShip.printInfo();
        myShip.attacking = true;
        myShip.attack();
        oppShip.hull -= myShip.firepower;
    }
    else {
        myShip.printInfo();
        oppShip.printInfo();
        myShip.attacking = false;
        myShip.noAttack();
    }    
}

// Opp ship's turn to play
function oppShipPlays(){
    if (Math.random() < oppShip.accuracy){
        myShip.printInfo();
        oppShip.printInfo();
        oppShip.attacking = true;
        oppShip.attack();
        myShip.hull -= oppShip.firepower;
    }
    else {
        myShip.printInfo();
        oppShip.printInfo();
        oppShip.attacking = false;
        oppShip.noAttack();
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
                console.log(`ROUND OVER: ${myShip.shipName.toUpperCase()} HULL: ${myShip.hull}, ${oppShip.shipName.toUpperCase()} HULL: ${oppShip.hull}`);
            }
            if ((oppShip.hull > 0) && (myShip.hull > 0)) {
                oppShipPlays();
            }
            else {
                console.log(`ROUND OVER: ${myShip.shipName.toUpperCase()} HULL: ${myShip.hull}, ${oppShip.shipName.toUpperCase()} HULL: ${oppShip.hull}`);
            }
        }
    allAliens.shift();

    if (myShip.hull <= 0){
        retreat = true;
        console.log("\nGAME OVER. YOU LOSE :(")
    }
    else {
        input = prompt("Would you like to retreat? (Y/N)");
        if (input === 'y'){
            retreat = true;
            console.log("\nTHANKS FOR PLAYING. YOU'VE SUCCEEDED FOR NOW. WE AWAIT YOUR RETURN...")
        } 
        else if (input === 'n'){
            retreat = false;
        }
        console.log(`RETREAT? ${input}`);
    }
    console.log(`\n`);
}
if (myShip.hull > 0){
    console.log('\nYOU DESTROYED ALL THE SHIPS, YOU WIN! ');
}

// ================================
// edit formatting
// fix functions
// random number generator











