//this defines the individual shapes the brush/app makes

//constructor does the same as setup in JS
class Shape {
    //
    constructor(x, y, hue, size) {
        // what do we need to setup a shape?
        this.x = x
        this.y = y
        this.hue = hue
        this.midSize = size
        this.circleDistance = size + 5
        this.numOfCircles = random(2, 7)
        this.pivot = 0
        this.pivotSpeed = random(-0.01, 0.03)


    }

    draw() {
        // what do we need to do to draw a shape?
        stroke("#2D393288")
        fill("#F6EFEF", 100, 100)
        circle(this.x, this.y, this.midSize)

        for (let num = 0;
             num < this.numOfCircles; 
             num = num + 1) {

            let angle = TWO_PI * num / this.numOfCircles + this.pivot
            let spud = createVector(this.circleDistance, 0)
            spud.rotate(angle)
            circle(this.x + spud.x, this.y + spud.y, 10)
        }

        this.pivot = this.pivot + 0.003

    }
}