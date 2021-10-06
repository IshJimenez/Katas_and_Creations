// initialize context
kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [51, 151, 255]
})

// load assets
loadSprite('bean', 'bean.png');
// loadSprite('pep', 'pep.gif');
loadSprite('elom', 'elom.gif');

loadSound('mainFloor', 'Metre.mp3')

scene("game", ({score}) => {
    layers(['bg', 'obj', 'ui'], 'obj')

    add([sprite('elom'), layer('bg')])

    const music = play('mainFloor', {
        loop: true
    })


    const bean = add([
        sprite("bean"),
        pos(80, 40),
        area(),
        body(),
        music.play()
    ])
    
    // Platform for our dear bean
    const floor = add([
        rect(width(), 28),
        pos(0, height() - 28),
        outline(4),
        area(),
        solid(),
        color(127, 200, 255),
    ])

    const ceiling = add([
        rect(width(), 48),
        pos(0, height() - 510),
        outline(4),
        area(),
        solid(),
        color(227, 100, 255),
        // 'tree'
    ])
    
    function spwanTree() {
            // Add tree
            add([
                rect(rand(28, 58), rand(24, 64)),
                area(),
                outline(4),
                pos(width(), height() - 28),
                origin("botleft"),
                color(255, 180, 255),
                move(LEFT, 240),
                "tree",
            ]);
            wait(rand(0.6, 1.3), () => {
                spwanTree();
            })
            }
    spwanTree();

    function spawnMidSky() {
    add([
        rect(rand(28, 48), rand(28, 48)),
        area(),
        outline(4),
        pos(width(), height() - 225),
        origin("center"),
        color(255, 150, 155),
        move(LEFT, 260),
        "tree"
    ]);
    wait(rand(0.7, 1.6), () => {
        spawnMidSky();
    })
    
}
    spawnMidSky()

    function spawnHighSky() {
        add([
            rect(rand(28, 48), rand(18, 38)),
            area(),
            outline(4),
            pos(width(), height() - 400),
            origin("center"),
            color(155, 150, 255),
            move(LEFT, 240),
            "tree"
        ]);
        wait(rand(0.8, 1.8), () => {
            spawnHighSky();
        })
        
    }
spawnHighSky()
    
    // keyPress("space", () => {
    //     if (bean.grounded()) {
    //     bean.jump()
    //     score++;
    //     scoreLabel.text = score;
    //     }
    // })

    mouseClick(()   => {
        // if (bean.grounded()) {
        bean.jump()
        score++;
        scoreLabel.text = score;
        // }
    })
    
    bean.collides("tree", () => {
        addKaboom(bean.pos);
        shake()
        music.stop();
        go("lost", {score})
    })
 

// let score = 0;
const scoreLabel = add([
    text(score),
    pos(24,24),
    layer('ui'),
    // {
    //     value: score,
    // }
])

// action(() => {
//     score++;
//     scoreLabel.text = score;
// });

})

scene("lost", ({score}) => {
    add([text("NOT a winner", 100), origin('center'), pos(width()/2, height()/ 4)])
    add([text("Click to lose again" , 32), origin('center'), pos(width()/2, height()/ 2)])
    add([text("Score: " + score , 32), origin('bot'), pos(width()/2, height()/ 1.25)])

    // go back t}o game with space is pressed
    // keyPress("space", () => go("game"));
    mouseClick(() => window.location.reload());
})

go("game", {score: 0})