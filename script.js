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
        console.log(`\n${this.shipName.toUpperCase()} attacked and missed!`);
    }

    printInfo(){
        console.log(`${this.shipName.toUpperCase()} || HULL: ${this.hull}, FIRE POWER: ${this.firepower}, ACCURACY: ${this.accuracy}`)
    }
}

// make factory class for alien ships
class Aliens {
    constructor(){
        this.ships = []
    }

    generateAlienShip (){
        const newShip = new Ship();
        newShip.shipName = 'Alien ' + (this.ships.length + 1);
        newShip.hull = Math.floor(Math.random() * 4) + 3;
        newShip.firepower = Math.floor(Math.random() * 3) + 2;
        newShip.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
        this.ships.push(newShip);
    }
}

function createShips() {
    const ussAssembly = new Ship('USS Assembly', 20, 5, .7);
    const aliens = new Aliens();

    //generate alien ships and add to array of ships
    for (let i = 0; i < 30; i++) {
        aliens.generateAlienShip();
    }
    return [ussAssembly, aliens];  
}

// My ship's turn to play
function myShipPlays(){
    console.log(`\n`)
    myShip.printInfo();
    oppShip.printInfo();
    if (Math.random() < myShip.accuracy){
        myShip.attacking = true;
        myShip.attack();
        oppShip.hull -= myShip.firepower;
    }
    else {
        myShip.attacking = false;
        myShip.noAttack();
    }    
}

// Opp ship's turn to play
function oppShipPlays(){
    console.log(`\n`)
    myShip.printInfo();
    oppShip.printInfo();
    if (Math.random() < oppShip.accuracy){
        oppShip.attacking = true;
        oppShip.attack();
        myShip.hull -= oppShip.firepower;
    }
    else {
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
                console.log(`\nROUND OVER | ${myShip.shipName.toUpperCase()} HULL: ${myShip.hull} | ${oppShip.shipName.toUpperCase()} HULL: ${oppShip.hull}`);
            }
            if ((oppShip.hull > 0) && (myShip.hull > 0)) {
                oppShipPlays();
            }
            else {
                console.log(`\nROUND OVER | ${myShip.shipName.toUpperCase()} HULL: ${myShip.hull} | ${oppShip.shipName.toUpperCase()} HULL: ${oppShip.hull}`);
            }
        }
    allAliens.shift();

    if (myShip.hull <= 0){
        retreat = true;
        console.log(`\nGAME OVER. YOU LOSE :(  | ${myShip.shipName.toUpperCase()} HULL: ${myShip.hull}, ${oppShip.shipName.toUpperCase()} HULL: ${oppShip.hull}`);
    }
    else {
        input = prompt("Would you like to retreat? (Y/N)").toLowerCase();
        if (input === 'y'){
            retreat = true;
            console.log("\nTHANKS FOR PLAYING. YOU'VE SUCCEEDED FOR NOW. WE AWAIT YOUR RETURN...")
        } 
        else if (input === 'n'){
            retreat = false;
        }
        else {
            alert(`You're input is invalid. Please enter Y or N and try again.`);
        }
        
        console.log(`RETREAT? ${input}`);
    }
    console.log(`=====================================`);
}

if ((myShip.hull > 0) && (retreat === false)){
    console.log('\nYOU DESTROYED ALL THE SHIPS, YOU WIN! ');
}

// check retreat value for invalid inputs
// Refactor fxns and classes
// Pause between logs









