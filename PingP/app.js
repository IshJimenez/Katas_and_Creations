const gameBoard = document.getElementById("canvas");

const gameSettings = {
    targetFPS: 60,

    getIntLegh: function() { return 1.0 / this.targetFPS}
};

class pPGame {
    constructor (canvas) {
        this._canvas = canvas;

    }
    
    update(dTime) {
        console.log( "Hey Fool I See YOu: " + dTime)
    }

    run() {
        let that = this;
        let prevUpdateTime = Date.now();
        setInterval(function() {
            let updateTime = Date.now();
            let dTime = (updateTime - prevUpdateTime) / 1000.0;

            that.update(dTime);
            prevUpdateTime = updateTime;
        }, gameSettings.getIntLegh() * 1000)
    }
}
let game = new pPGame(gameBoard);

function startGame() {
game.run();
}