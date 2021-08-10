kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1]

}) 

loadSprite('linkL', 'aLeftLinko.png')
loadSprite('linkR', 'aRightLinko.png')
loadSprite('linkD', 'aDownLinko.png')
loadSprite('linkU', 'aUpLinko.png')
loadSprite('leftWall', 'aLeftWall.png')
loadSprite('topWall', 'aTopWall.png')
loadSprite('botWall', 'aBotWall.png')
loadSprite('rightWall', 'aRightWall.png')
loadSprite('botLeftWall', 'aBotLeftWall.png')
loadSprite('botRightWall', 'aBotRightWall.png')
loadSprite('topLeftWall', 'aTopLeftWall.png')
loadSprite('topRightWall', 'aTopRightWall.png')
loadSprite('topDoor', 'aTopDoor.png')
loadSprite('firePot', 'aFirePot.png')
loadSprite('leftDoor', 'aLeftDoor.png')
loadSprite('lanterns', 'aLaterns.png')
loadSprite('slicer', 'aSlicer.png')
loadSprite('skeletor', 'aSkeletor.png')
loadSprite('kaboom', 'aKaboom.png')
loadSprite('stairs', 'aStairs.png')
loadSprite('bg', 'aBg.png')

scene ('game', ({ level, score }) => {
        layers(['bg', 'obj', 'ui'], 'obj')

    const maps = [
        [
            'yccc) ^ )cccw',
            'a           b',
            ')      }    b',
            'a    }      b',
            '%           b',
            'a    }      b',
            ')   }       b',
            'a   }       b',
            'a        *( b',
            'xdddddddddddz',
        ],
        [
            'ycccccccccccw',
            'a           b',
            ')  $   }    )',
            'a    }      b',
            '%           b',
            'a    }      b',
            ')   }       )',
            'a   }       b',
            'a        *( b',
            'xdddddddddddz',
        ]
    ]

    const levelCfg = {
            width: 40,
            height: 48,
            'a':  [sprite('leftWall'), solid(), 'wall'],
            'b':  [sprite('rightWall'), solid(), 'wall'],
            'c' : [sprite('topWall'), solid(), 'wall'],
            'd':  [sprite('botWall'), solid(), 'wall'],
            'w':  [sprite('topRightWall'), solid(), 'wall'],
            'x' : [sprite('botLeftWall'), solid(), 'wall'],
            'y':  [sprite('topLeftWall'), solid(), 'wall'],
            'z':  [sprite('botRightWall'), solid(), 'wall'],
            '%' : [sprite('leftDoor'),  solid()],
            '^':  [sprite('topDoor'), 'nextLevel'],
            '$':  [sprite('stairs'), 'nextLevel'],
            '*' : [sprite('slicer'), 'slicer', 'dangerous', { dir: 1}],
            '}' : [sprite('skeletor'), 'dangerous'],
            ')' : [sprite('lanterns'), solid(), 'wall'],
            '(' : [sprite('firePot'), solid()],


        }

addLevel(maps[level], levelCfg)

add([sprite('bg'), layer('bg')])

const scoreLabel = add([
    text('0'),
    pos(400,500),
    layer('ui'),
    {
        value: score,
    },
    scale(4)
])

const player = add([sprite('linkR'), pos(5,190)])

player.action(() => {
    player.resolve()
})

player.overlaps('nextLevel', () => {
    go('game', {
        level: (level + 1) % maps.length,
        score: scoreLabel.value

    })
})
const MOVE_SPEED = 120

keyDown('left', () => {
    player.changeSprite('linkL')
    player.move(-MOVE_SPEED, 0)
})
keyDown('right', () => {
    player.changeSprite('linkR')
    player.move(MOVE_SPEED, 0)
})
keyDown('up', () => {
    player.changeSprite('linkU')
    player.move(0, -MOVE_SPEED)
})
keyDown('down', () => {
    player.changeSprite('linkD')
    player.move(0, MOVE_SPEED)
})

const SLICER_SPEED = -120
action('slicer', (s) => {
    s.move(0, s.dir * SLICER_SPEED )
})

collides('slicer', 'wall', (s) => {
    s.dir = -s.dir
})

player.overlaps('dangerous', () => {
    go('lose', { score: scoreLabel.value})
})
})

scene('lose', ({ score }) => {
    add([text(score, 32), origin('center'), pos(width()/ 2, height()/ 2)])
})

start('game',  { level: 0, score: 0})