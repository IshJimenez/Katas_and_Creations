kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

const MOVE_SPEED = 120
const JUMP_FORCE = 360
const BIG_JUMP_FORCE = JUMP_FORCE * 1.5
let CURRENT_JUMP_FORCE = JUMP_FORCE
let isJumping = true
const FALL_DEATH = 400


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

loadSprite('blueBlock', 'aBlueBlock.png')
loadSprite('blueBrick', 'aBlueBrick.png')
loadSprite('blueSteel', 'aBlueSteel.png')
loadSprite('blueEvilShroom', 'aBlueEvilShroom.png')
loadSprite('blueSurpise', 'aBlueSurprise.png')


scene("game", ( { level, score }) => {
    layers(['bg', 'obj', 'ui'], 'obj')

const maps = [
    [
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
    '                    = =                         -+           ',
    '                                       ^  ^     ()           ',
    '==================================================    =======',
],
    [
    'q                                                            q',
    'q                                              %             q',
    'q                                                            q',
    'q                                                            q',
    'q                                                            q',
    'q                                                            q',
    'q                                                x           q',
    'q                                               xx           q',
    'q       @@@@@@@@                               xxx           q',
    'q                                             xxxx           q',
    'q                    x x                     xxxxx         -+q',
    'q                                     z  z  xxxxxx         ()q',
    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
]
] 
const levelCfg = {
    width:  20,
    height: 20,
    '=': [sprite('block'), solid()],
    '$': [sprite('coin'), 'coin'],
    '%': [sprite('surprise'), solid(), 'coin-surprise'],
    '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
    '}': [sprite('box'), solid()],
    '(': [sprite('bleft'), solid(), scale(0.5)],
    ')': [sprite('bright'), solid(), scale(0.5)],
    '-': [sprite('tleft'), solid(), scale(0.5), 'pipe'],
    '+': [sprite('tright'), solid(), scale(0.5), 'pipe'],
    '^': [sprite('badDude1'), solid(), 'dangerous'],
    '#': [sprite('mushroom'), solid(), 'mushroom', body()],
    '!': [sprite('blueBlock'), solid(), scale(0.5)],
    'q': [sprite('blueBrick'), solid(), scale(0.5)],
    'z': [sprite('blueEvilShroom'), solid(), scale(0.5), 'dangerous'],
    '@': [sprite('blueSurpise'), solid(), scale(0.5), 'coin-surprise'],
    'x': [sprite('blueSteel'), solid(), scale(0.5)],

}

const gameLevel = addLevel(maps[level], levelCfg)

    const scoreLable = add([
        // text('test'),
        text(score),
        // text(meg),
        pos(30,6),
        layer('ui'),
        {
            // value: 'Test',
            value: score,
            // value: 'You dont win',

        }
])
    // const scoreLable2 = add([
    //     // text('test'),
    //     text(Text1),
    //     pos(40,8),
    //     layer('ui'),
    //     {
    //         // value: 'Test',
    //         value: 'You dont win.',
    //     }
    // ])

add([text('level ' + parseInt(level + 1)), pos(50,6)])

function big() {
        let timer = 0
        let isBig = false
        return {
            update() {
            if (isBig) {
                CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
                timer -= dt() 
            if (timer <= 0) {
                this.smallify()
        }
        }
        },
            isBig() {
            return isBig
        },
            smallify() {
            this.scale = vec2(1)
            CURRENT_JUMP_FORCE = JUMP_FORCE
            timer = 0
            isBig = false
        },
            biggify(time) {
            this.scale = vec2(2)
            timer = time
            isBig = true
        }
        }
}

const player = add([
        sprite('bario'), solid(),
        pos(30, 0),
        body(),
        big(),
        origin('bot')
])

action('mushroom', (m) => {
        m.move(20, 0)
    })

player.on("headbump", (obj) => {
        if (obj.is('coin-surprise')) {
            gameLevel.spawn('$', obj.gridPos.sub(0, 1))
            destroy(obj)
            gameLevel.spawn('}', obj.gridPos.sub(0,0))
        }
        if (obj.is('mushroom-surprise')) {
            gameLevel.spawn('#', obj.gridPos.sub(0, 1))
            destroy(obj)
            gameLevel.spawn('}', obj.gridPos.sub(0,0))
        }   
})

player.collides('mushroom', (m) => {
        destroy(m)
        player.biggify(6)
})

player.collides('coin', (c) => {
        destroy(c)
        scoreLable.value++
        scoreLable.text = scoreLable.value

})

const ENEMY_SPEED = 20

action('dangerous', (d) => {
        d.move(-ENEMY_SPEED, 0)
})

player.collides('dangerous', (d) => {
    if (isJumping) {
        destroy(d)
    } else {
        go('lose', { score: scoreLable.value})
    }
})

player.action(() => {
    camPos(player.pos)
    if (player.pos.y >= FALL_DEATH) {
        go('lose', { score: scoreLable.value})
    }
})

player.collides('pipe', () => {
    keyPress('down', () => {
        go('game', {
            level: (level + 1) % maps.length,
            score: scoreLable.value
        })
    })
})

    keyDown('left', () => {
        player.move(-MOVE_SPEED, 0)
    })
    keyDown('right', () => {
        player.move(MOVE_SPEED, 0)
    })

player.action(() => {
    if(player.grounded()) {
        isJumping = false
    }
})

    keyDown('space', () => {
        if (player.grounded()) {
            isJumping = true
            player.jump(CURRENT_JUMP_FORCE)
    }
    })
})

scene('lose', ({ score }) => {
    add([text(score, 32), origin('center'), pos(width()/2, height()/ 2)])
})

// start("game")
start("game", { level: 0, score: 0})
