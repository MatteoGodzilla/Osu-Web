let nota1 = new Nota(450, 384, 3000)
let nota2 = new Nota(550, 384, 3500)
let notes = [];
let time
let starting

function setup() {
	starting = millis()
	c = createCanvas(1024, 768)
	windowResized()
	notes.push(nota1)
	notes.push(nota2)
}

function draw() {
	time = millis() - starting
	background(51)
	for (n of notes) {
		n.show(time)
		if (n.milli <= time - 250)
			notes.splice(notes.indexOf(n), 1)
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
			let text = n.click(time);
			console.log(text)
			//setTimeout("notes.splice(notes.indexOf(n),1)",100);
			break;
		}
	}
}