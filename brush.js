let shapes
let hue
let size
let img


function preload() {
    img = loadImage("background.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    loadImage("background.jpg", img => {
        image(img, 0, 0)
    })
    shapes = []
    size = 7
}

function draw() {
    background(img)
    shapes.forEach(shape => {
       shape.draw()
   })
}

function mouseDragged() {
    size = size + 1
    size = constrain(size, 7, 36)


    shapes.push(
        new Shape(mouseX, mouseY, hue, size)
        )
}

function mouseReleased() {
    size = 7
}

function keyTyped() {
    if (key === 's') {
        saveCanvas("fuzzyvibes", "jpg")
    }
}

