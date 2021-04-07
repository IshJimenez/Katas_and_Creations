let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

        //(x,   y,  width, height) 
// c.fillStyle = "rgba(255, 0, 255, 0.5)";
// // Will take whatever fillStyle is before to add color to the shape
// c.fillRect(100, 100, 20, 20)
// c.fillStyle = "rgba(255, 255, 0, 0.5)";
// c.fillRect(150, 150, 20, 20)
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(50, 50, 20, 20)
// c.fillRect(50, 100, 20, 20)
// console.log(canvas);

//
//      DRAW A LINE
//

//Always start a new c.beginPath if not from the last shape it will follow
// c.beginPath();
// c.moveTo(200, 100);
// c.lineTo(300, 150);
// c.lineTo(200, 200);
// // can be rgb or name or hex "#fa34a3"
// c.strokeStyle = "blue"
// c.stroke();

//
//      DRAW A ARC/ CIRCLE 
//

//Takes an x, y, radius, startAngle,  endingAngle, drawCounterClockwise
//StartAngle and end take radiance not degree
//StartAngle at what angle start drawing
//endingAngle how long would you like it till go till
// c.beginPath();
// c.arc(350, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "green"
// c.stroke();

// for (var i = 0; i < 99; i++) {
//         let x = Math.random() * window.innerWidth;
//         let y = Math.random() * window.innerHeight;
//         let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//         c.beginPath();
//         c.arc(x, y, 30, 0, Math.PI * 2, false);
//         c.strokeStyle = randomColor;
//         c.stroke();
// }

//
// Javascript Object start with capital Letter
//

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let x1 = 200;
// let y1 = 200;
// let dx = (Math.random() - 0.5);
// let dy = (Math.random() - 0.5) * 9;
// let radius = 30;

function Circle(x,y,dx,dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
//
// Create an annoymous function 
//
        this.draw = function() {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.strokeStyle = "orange"
                c.stroke();
                c.fill();
        }
        this.update = function() {
                // Left and Right

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.dx = -this.dx;
        }

// Top and Botton

        if ( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
        }
}

let circleArray = [];

for (let i = 0; i < 100; i++){
        let radius = 30;  
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);     
        circleArray.push(new Circle(x, y, dx, dy, radius));
}

//
//      ANIMATION
//
// To change x, y declare outside of function



// clearRect (x, y, width, height)

let circle = new Circle(200, 200, 3, 3, 30);

function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        
        for (let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
        }

// velocity speed that our projectile moves
// We will need to create a variable


        
        // Add to make it look interesting

        // c.arc(x1, y1, 30, 0, Math.PI * 2, false);
        // c.strokeStyle = "yellow"
        // c.stroke();

        // x += 1;
        }

animate();

// function animate1() {
//         requestAnimationFrame(animate1);
//         c.beginPath();
//         c.arc(x1, y1, 30, 0, Math.PI * 2, false);
//         c.strokeStyle = "yellow"
//         c.stroke();

//         x1 += 1;
//         }

// animate1();
