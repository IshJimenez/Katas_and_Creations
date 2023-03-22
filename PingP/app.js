const gameBoard = document.getElementById("canvas");

const gameSettings = {
    wallCol: "#202020",
    wallSize: 22,
    courtMargX : 12,
    courtMargY: 0,
    targetFPS: 60,

    getIntLegh: function() { return 1.0 / this.targetFPS}
};
const PlayerIdx = {
    player1: 1,
    player2: 2,
}

class pPGame {
    constructor (canvas) {
        this._court = new Court(canvas);
        this._canvas = canvas;
        

    }
    
    update(dTime) {
        // console.log( "Hey Fool I See YOu: " + dTime)
    }
    draw() {
        let ctx = this._canvas.getContext('2d');
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._court.draw(this._canvas);
    }

    run() {
        let that = this;
        let prevUpdateTime = Date.now();
        setInterval(function() {
            let updateTime = Date.now();
            let dTime = (updateTime - prevUpdateTime) / 1000.0;

            that.update(dTime);
            that.draw();
            prevUpdateTime = updateTime;
        }, gameSettings.getIntLegh() * 1000)
    }
}

class Court {
    constructor(canvas) {
        this._canvas = canvas;
    }
   
    get bounds() {
        return {
            upper: gameSettings.courtMargY + gameSettings.wallSize,
            lower: this._canvas.height - (gameSettings.courtMagin + gameSettings.wallSize),
            left: 0,
            right: this._canvas.width
        }
        }
    
    update(dTime){
       
    }
        draw(canvas) {
            let ctx = canvas.getContext('2d');
            ctx.fillStyle = gameSettings.wallCol;
            ctx.fillRect(0, gameSettings.courtMargY, this._canvas.width, gameSettings.wallSize);
            ctx.fillRect(0, this._canvas.height - gameSettings.courtMargY - gameSettings.wallSize, this._canvas.width, gameSettings.wallSize);
        }
    

}
class Paddle {
    constructor(posX, posY, wit, heit, playerIndx, court){
        this.posX = posX;
        this.posY = posY;
        this.width = wit;
        this.height = heit;
        this._playerIndx = playerIndx;
        this._court = court;
        this._startPosX = posX;
        this._startPosY = posY;
    }

} 
class Rectangle {
    constructor(x, y, wit, heit) {
        this.x = x;
        this.y = y;
        this.wit = wit;
        this.heit = heit;


    }

    get left() {return this.x;}
    get right() {return this.x + this.wit;}
    get top() {return this.y;}
    get bot() {return this.y + this.heit;}

    overlaps(oter){
        return oter. left < this.right && 
        this.left < oter.right &&
        oter.top < this.bot &&
        this.top < oter.bot;
    }

    contains(x,y){
        return this.left < x && this.right > x 
        && this.top < y && this.bot > y;
    }

}
let game = new pPGame(gameBoard);

function startGame() {
game.run();
}