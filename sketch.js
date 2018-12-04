class Nota{
	constructor(x,y,milli){
		this.x=x
		this.y=y
		this.milli = milli
		this.size = 50
	}
	show(t){
		push()
		stroke(0)
		fill(255)
		this.milli<=t?fill(0,255,0):fill(255,0,0)
		ellipse(this.x,this.y,this.size,this.size)
		pop()
	}
}

let nota = new Nota(512,384,200)
let time
function setup(){
	c = createCanvas(1024,768)
	x = (windowWidth - width) / 2
	y = (windowHeight - height) / 2
	c.position(x,y)
	time = 0
	
}

function draw(){
	background(51)
	nota.show(time)
	fill(255,255,255,100)
	ellipse(mouseX,mouseY,50,50)
	text(time,0,height-5)
	time++
}

