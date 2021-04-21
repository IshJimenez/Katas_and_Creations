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