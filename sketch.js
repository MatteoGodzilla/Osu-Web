function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background(51);
	ellipse(mouseX,mouseY,50,50);
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}

