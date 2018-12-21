let nota1 = new Nota(450, 384, 3000)
let slider = new Slider(550, 384, 650, 284, 3500)
let notes = [];
let time
let starting

function setup() {
	starting = millis()
	c = createCanvas(1024, 768)
	angleMode(DEGREES)
	windowResized()
	notes.push(nota1)
	notes.push(slider)
}

function draw() {
	time = millis() - starting
	background(51)
	for (let i = 0; i < notes.length; i++) {
		notes[i].show(time);
		if (notes[i].toRemove === true && notes[i].milli <= time) {
			notes.splice(i, 1)
		}
	}
	fill(255, 255, 255, 100)
	ellipse(mouseX, mouseY, 25, 25)
	if (time > 12000) noLoop()
}

function windowResized() {
	x = (windowWidth - width) / 2
	y = (windowHeight - height) / 2
	c.position(x, y)
}

function mouseClicked() {
	for (n of notes) {
		if (dist(n.x, n.y, mouseX, mouseY) <= n.notesize / 2) {
			n.click(time);
			break;
		}
	}
}