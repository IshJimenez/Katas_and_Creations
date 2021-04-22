const user1 = {
    name: "Batman",
    score: 10,
    incremenet: function() {
        user1.score++;
    }
};
user1.incremenet();
// user1.score => 4
// This is the princicple of encapsulation

//
//-----------------------Creating user2 user 'dot notation'
//
const user2 = {}        //create an empty object
user2.name = "Clark";   //Assign properties to that object
user2.incerement = function(){
    user2.score++;
}

//Creating user3 using Object.create

const user3 = Object.create(null);
user3.name = "Diana";
user3.score = 9;
user3.increment = function() {
    user3.score++
};

//                                  Solution UNO
//
//Generate objects using a function

function userCreate(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    };
    return newUser;
};

const user1 = userCreate("greenLatern", 8);
const user2 = userCreate("mrFreeze", 7);
user1.increment()

//      Problems
// Each time we create a new user we make space in our computers 
// memory for all our data and functions. But our functions are just copies

//      Benefits
// It's simple and easy to reason about.

//
//                              Solution DOS
//
// Store the increment function in just one object and have the interpreter, if it
// doesnt find the function on user1, look up to that object to check if its there.

function userCreate2(name, score) {
    const newUser = Object.create(functionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
    const functionStore = {
        increment: function(){this.score++;},
        login: function(){console.log("You're In");}
};

const user1 = userCreate2("Batman", 10);
const user2 = userCreate2("Superman", 12)
user1.increment();

//      Problems
// No problems but maybe a little long winded.
// const newUser = Object.create(functionStore);
// return newUser
// Write this every single time - but its 6 words.
// Super sophisticated but not standard.

//                                  Solution TRES
//
// Introducing the keyword that automates the hard work: new
// const user1 = new userCreate("pickleRick", 21)
// When we call teh constructor function with new in front we automate 2 things.
// 1. Create a new user object
// 2. Return the new user object
// But now we need to adjust how we write the body of userCreate how can we 
// --Refer to the auto object?
// --Know where to put our single copies of functions?
//
//----
//--Interlude----
//----
// Functions are both objects and functions 
//
//  function multiBy2(num){
//  return num*2
//  }
//
// multiBy2.stored = 8
// multiBy2(5) = 10
//
// multiBy2.stored  // 8
// multiBy2.prototype // {}
//
// We could use that fact all functions have a default property
// on their object version, 'prototype', which is itself an object
// to replace our functionStore object.

function UserCreate3(name, score) {
    this.name = name;
    this.score = score;
}
UserCreate3.prototype.increment = function(){
    this.score++;
};
UserCreate3.prototype.login = function(){
    console.log("Login Fool");
};

const user1 = new UserCreate3("ang", 14)

user1.increment()

// requires new to run UserCreate

//      Benefits
// Faster to write
// Still typical practice in professional code
//      Cons
// 99%

//                                  Solution QUATRO
//
// The class 'syntactic sugar'

class UserCreate4 {
    constructor(name, score){
    this.name = name;
    this.score = score;
}
increment(){
    this.score++;
}
login(){
    console.log("Fool Login")
}
}
const user1 = new UserCreate4("katara", 14)

user1.increment()

//      Benefits
// Emerging as a new standard
// Feels more like other styles of other languages(e.g Python)
//      Cons
// 99%