// initialize context
kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

// load assets
loadSprite('bean', 'bean.png');
// loadSprite('pep', 'pep.gif');

const bean = add([
    sprite("bean"),
    pos(80, 40),
    area(),
    body(),
])

keyPress("space", () => {
    bean.jump()
})

add([
    rect(width(), 48),
    pos(0, height() - 48),
    outline(4),
    area(),
    solid(),
    color(127, 200, 255),
])



