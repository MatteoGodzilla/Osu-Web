function setup(){
	c = createCanvas(1024,768);
	x = (windowWidth - width) / 2;
	y = (windowHeight - height) / 2;
	c.position(x,y)
}

function draw(){
	background(51);
	fill(255,255,255,100);
	ellipse(mouseX,mouseY,50,50);
}