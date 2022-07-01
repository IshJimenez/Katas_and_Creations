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

// To render multiple things would need to be wrapped in a parent 

ReactDOM.render(
    <div>
        <h1 className = "header2">This is the section for hero's party</h1>
        <p>Erik</p>
        <p>8th mystery player</p>
        <p>Serena</p>
        </div>,
        document.querySelector("#root4")
)

// Above can be set as follow

const heroSection = (
<div>
    <h1 className = "header2">This is the section for hero's party</h1>
    <p>Erik</p>
    <p>8th mystery player</p>
    <p>Serena</p>
</div>
)

ReactDOM.render(
    heroSection, document.querySelector("#root5")
)

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navBar = (
    <nav>
        <h1>Anemonia</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navBar, document.querySelector("#root6")
)