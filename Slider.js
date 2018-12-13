class Slider extends Nota {
    constructor(x1, y1, x2, y2, milli) {
        super(x1, y1, milli);
        this.x2 = x2;
        this.y2 = y2;
    }
    show(t) {
        super.show(t)
        push()
        if (this.milli - this.speed <= t) {
            ellipse(this.x2, this.y2, this.notesize, this.notesize)
            let d = dist(this.x, this.y, this.x2, this.y2)
            let cx = abs(this.x - this.x2)
            let cy = abs(this.y, this.y2)
            let angle = acos(cx / d)
            translate(this.x, this.y)
            rotate(-angle)
            rect(0, 0 - this.notesize / 2, d, this.notesize)
        }
        pop()
    }
}