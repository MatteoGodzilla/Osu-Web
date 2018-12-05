class Nota {
	constructor(x, y, milli) {
		this.x = x
		this.y = y
		this.milli = milli
		this.notesize = 75
		this.hintsize = 100
		this.speed = 60
	}
	show(t) {
		push()
		stroke(0)
		fill(255)
		if (this.milli - this.speed <= t && t <= this.milli) {
			let localt = map(t, this.milli - this.speed, this.milli, 0, this.hintsize)
			push()
			noFill()
			stroke(0)
			ellipse(this.x, this.y, this.notesize + this.hintsize - localt)
			pop()

		}
		if (this.milli - this.speed-this.speed <= t) {
			ellipse(this.x, this.y, this.notesize, this.notesize)
		}
		pop()
	}
}

let nota = new Nota(512, 384, 200)
let time

function setup() {
	c = createCanvas(1024, 768)
	x = (windowWidth - width) / 2
	y = (windowHeight - height) / 2
	c.position(x, y)
	time = 0

}

function draw() {
	background(51)
	nota.show(time)
	fill(255, 255, 255, 100)
	ellipse(mouseX, mouseY, 50, 50)
	text(Math.floor(time / 60), 0, height - 5)
	time++
	if (time > 1000) noLoop()
}