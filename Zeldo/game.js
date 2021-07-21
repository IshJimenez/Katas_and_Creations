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

    const map = [
            'cccccccccc',
            'c        c',
            'c      } c',
            'c    }   c',
            'c        c',
            'c    }   c',
            'c   }    c',
            'c        c',
            'c         ',
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

})

start('game', 
// { level: 0, score: 0}
) 