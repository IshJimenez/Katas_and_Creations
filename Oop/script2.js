let arena = [];

function Champion(
    name, atk, def, hP ) {
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.hP = hP;
        this.weapon = "sword";
        Champion.instances++;
    }

Champion.prototype.sayHi = function (){
        console.log("Hey, its me " + this.name)
    }
Champion.instances = 0;

Champion.prototype.roll = function (howMany, whatType) {
    let total = 0;
    for (let i=0; i<howMany; i++) {
        let result = Math.round(Math.random() * whatType);
        total = total + result;
    }
    return total;
}
Champion.prototype.atkTarget = function(thePersonHit) {
    let atkRol = this.roll(1,20);
    atkRol = atkRol + this.atk;
    if(atkRol >= thePersonHit.def){
        return true;
    }
    else {
        return false
    }
}
Champion.prototype.aplyDmg = function(thePersonHit) {
    let roll = this.roll(this.weapon.howDeath, this.weapon.typeDeath)
    roll = roll + this.atk;
    thePersonHit.hP = thePersonHit.hP - roll;
    return roll
    
}
Champion.prototype.getRandomTargetArena = function(arena){
    let myIndex = arena.indexOf(this);
    let targetArray = arena.concat();
    targetArray.splice(myIndex, 1);
    let randomIndex = Math.floor(Math.random()*targetArray.length);
    return targetArray[randomIndex];
}

function Weapon(howDeath, typeDeath){
    this.howDeath = howDeath;
    this.typeDeath = typeDeath;
}

function Human(
    name, atk, def, hP ) {
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.hP = hP;
        this.weapon = new Weapon(1, 1)
    }


Human.prototype = new Champion();
Human.prototype.constructor = Human;


function Animal (name, atk, def, hP ) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hP = hP;
    this.weapon = new Weapon(1, 2)
    }

Animal.prototype = new Champion();
Animal.prototype.constructor = Animal;
Animal.prototype.getRandomTargetArena = function(arena){
    let myIndex = arena.indexOf(this);
    let targetArray = arena.concat();
    targetArray.splice(myIndex, 1);
    let randomIndex = Math.floor(Math.random()*targetArray.length);
    return targetArray[randomIndex];
}
let sortByLowest = function(a,b) {
    if(a.hP > b.hP) {
        return 1;
    }
    else if (a.hP < b.hP){
        return -1
    }
    else {
        return 0;
    }
}
targetArray.sort(sortByLowest);
return targetArray[0];

let jason = new Champion("Jason", 12, 15, 20)
let ryu = new Champion("Ryu", 17, 17, 27)
let bobcat = new Animal("Bobcat", 15, 10, 24)
bobcat.weapon = new Weapon(2, 6)