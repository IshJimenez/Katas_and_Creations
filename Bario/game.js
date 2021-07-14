kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

loadSprite('coin', 'aCoin.png')
loadSprite('badDude1', 'aBadDude1.png')
loadSprite('brick', 'aBrick.png')
loadSprite('block', 'aBlock.png')
loadSprite('bario', 'aBario.png')
loadSprite('mushroom', 'aMushroom.png')
loadSprite('surprise', 'aSurprise.png')
loadSprite('box', 'aBox.png')
loadSprite('tleft', 'aTleft.png')
loadSprite('tright', 'aTRight.png')
loadSprite('bleft', 'aBLeft.png')
loadSprite('bright', 'aBRight.png')

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

const map = [
    '                                                             ',
    '                                               %             ',
    '                                                             ',
    '                                                             ',
    '                                                             ',
    '                                                             ',
    '                                                             ',
    '                                                             ',
    '       %  =*=%=                                               ',
    '                                                             ',
    '                                                -+           ',
    '                                       ^  ^     ()           ',
    '==================================================    =======',
]

const levelCfg = {
    width:  20,
    height: 20,
    '=': [sprite('block'), solid()],
    '$': [sprite('coin')],
    '%': [sprite('surprise'), solid(), 'coin-surprise'],
    '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
    '}': [sprite('box'), solid()],
    '(': [sprite('bleft'), solid(), scale(0.5)],
    ')': [sprite('bright'), solid(), scale(0.5)],
    '-': [sprite('tleft'), solid(), scale(0.5)],
    '+': [sprite('tright'), solid(), scale(0.5)],
    '^': [sprite('badDude1', solid())],
    '#': [sprite('mushroom', solid())],

}

const gameLevel = addLevel(map, levelCfg)

    const scoreLable = add([
        text('test'),
        pos(30,6),
        layer('ui'),
        {
            value: 'test',
        }
    ])

    add([text('level ' + 'test', pos(4,6))])

    const player = add([
        sprite('bario'), solid(),
        pos(30, 0),
        body(),
        origin('bot')
    ])

    const MOVE_SPEED = 120

    keyDown('left', () => {
        player.move(-MOVE_SPEED, 0)
    })
})

start("game")
