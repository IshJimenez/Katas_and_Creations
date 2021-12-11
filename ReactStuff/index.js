ReactDOM.render(<h1>Look at hero pep up</h1>, document.getElementById("root"))

// Class name can be added

// ReactDOM.render(<h1 className="header">Look at the hero pep up</h1>, document.getElementById("root"))

ReactDOM.render(
    <ul><li>Swords</li><li>Greatswords</li></ul>, 
    document.querySelector("#root2"))


// ---- Imperative 

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent = "This is the imperative hero"
// h1.className = "header"
// document.getElementById("root").append(h1)

const  h1 = document.createElement("hero")
h1.textContent = "Hero has pep up"
h1.className = "header"
console.log(h1)

const element = <h1 className="header">Hero has unlocked JSX</h1>

// JSX
ReactDOM.render(element, document.querySelector("#root3"))