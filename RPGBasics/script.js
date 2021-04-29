//  ------------------ Inside a location
//
{
    imageSrc: "Image png would go here",
    people: [
        {
            id: 1,
            skindId: "jacob",
            direction: "UP",
            x: 0,
            y: 0
        },
        {
            id: 1,
            skindId: "gal",
            direction: "DOWN",
            x: 2,
            y: 1
        },      
    ],
        walls: [ "3x1", "4x1"]
}

// ------------------ Camera View
//
// Within the wiewpoint the character will be in the middle.
// The map will move in the opposite direction as the character moves in the map.

.game-viewport {
     overflow: visible;
}

// More like pokemon style where its a smaller view
.game-viewport {
     overflow: hidden;
}

// ------------------ Game Art
//Natural png asset size 128 * 128
// STE can be used just be aware of the file size

// The character will be the similar to the camera view
// Where you have all the images of the pixels and it just moves to
// show the selected position 

// Scales up pixel art cleanly
// Wouldnt work for photos

canvas {
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}

//  ------------------ Spritesheet Animation
//
// 1 Only show one frame - overflow: hidden
// 2 Move the spritesheet underneath the crop

@keyframes walkDown {
   0% {
     transform: translate3d(0,0,0)
}
  100% {
     transform: translate3d(-100%,0,0)
}
}
//
// 3 Complete this animation in `steps` jumps
// steps would transform from one frame to another
// In the example below it has 4 since it only had 4 steps
// .person-walking-down {
//    animation:
//      walkDown 0.5s steps(4) infinite;
// }

//  ------------------ Turn Base Battles
//
// State of combatants
// belongsToTeam number would place them in their starting locatopn
[
    {
        id: 1,
        name: "Pat",
        maxHP: 100,
        hp: 100,
        belongsToTeam: "one",
        dangerMeter: 100
    },
    {
        id: 2,
        name: "Enemy Dude",
        maxHP: 80,
        hp: 4,
        belongsToTeam: "two",
    }     
]

//  ------------------ Actions
//

"action_slice": {
    name: "Slice",
    description: "Offensive move",
    iconType: "attack",

    successEvents(caster, targets) {
        return [
            {
                type: "PLAY_ANIMATION",
                animationId: "Slice",
                onCharacters: ["enemy1"]
            },
            {
                type: "CHANGE_HP",
                relativeChange: -20,
                onCharacters: ["enemy1"]
            }
        ]
    },

    shouldFail(caster, targets) {
        // Logic goes in this section
        return false
    }
}