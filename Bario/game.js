kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})


loadRoot('https://imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('badDude1', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('block', 'bdrLpi6.png')
loadSprite('bario', 'Wb1qfhK.png')
loadSprite('mushroom', '0wMd92p.png')
loadSprite('surprise', 'gesQ1KP.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-tleft', 'ReTPiWY.png')
loadSprite('pipe-tright', 'hj2GK4n.png')
loadSprite('pipe-bleft', 'c1cYSbt.png')
loadSprite('pipe-bright', 'nqQ79eI.png')

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
})

start("game")