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

scene ('game', (
    // { level, score }
    ) => {
        layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
            'yccc)c^c)cccw',
            'a           b',
            ')      }    b',
            'a    }      b',
            '%           b',
            'a    }      b',
            ')   }       b',
            'a        *  b',
            'xdddddddddddz',
        ]

    const levelCfg = {
            width: 40,
            height: 48,
            'a':  [sprite('leftWall'), solid()],
            'b':  [sprite('rightWall'), solid()],
            'c' : [sprite('topWall'), solid()],
            'd':  [sprite('botWall'), solid()],
            'w':  [sprite('topRightWall'), solid()],
            'x' : [sprite('botLeftWall'), solid()],
            'y':  [sprite('topLeftWall'), solid()],
            'z':  [sprite('botRightWall'), solid()],
            '%' : [sprite('leftDoor'), solid()],
            '^':  [sprite('topDoor'), solid()],
            '$':  [sprite('stairs')],
            '*' : [sprite('slicer')],
            '}' : [sprite('skeletor')],
            ')' : [sprite('lanterns'), solid()],
            '(' : [sprite('firePot'), solid()],


        }

addLevel(map, levelCfg)

add([sprite('bg'), layer('bg')])

const player = add([sprite('linkR'), pos(5,190)])

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


})

start('game', 
// { level: 0, score: 0}
) 