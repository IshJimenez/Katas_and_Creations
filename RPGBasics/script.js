// Inside a location
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

// Camera View
// Within the wiewpoint the character will be in the middle.
// The map will move in the opposite direction as the character moves in the map.
// You will want

// .game-viewport {
//      overflow: visible;
// }

// More like pokemon style where its a smaller view
// .game-viewport {
//      overflow: hidden;
// }

// Game Art
//Natural png asset size 128 * 128

// Scales up pixel art cleanly

// canvas {
//     image-rendering: -moz-crisp-edges;
//     image-rendering: -webkit-crisp-edges;
//     image-rendering: pixelated;
//     image-rendering: crisp-edges;
// }