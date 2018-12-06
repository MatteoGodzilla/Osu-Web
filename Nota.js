class Nota {
    constructor(x, y, milli) {
        this.x = x
        this.y = y
        this.milli = milli
        this.notesize = 75
        this.hintsize = 100
        this.speed = 1000
        this.color = [255, 255, 255, 100]
        this.clicked = false
    }
    show(t) {
        push()
        stroke(0)
        fill(this.color[0], this.color[1], this.color[2], this.color[3])
        if (this.milli - this.speed <= t && t <= this.milli) {
            let localt = map(t, this.milli - this.speed, this.milli, 0, this.hintsize)
            push()
            noFill()
            stroke(0)
            ellipse(this.x, this.y, this.notesize + this.hintsize - localt)
            pop()
        }
        if (this.milli - this.speed <= t) {
            ellipse(this.x, this.y, this.notesize, this.notesize)
        }
        if (this.milli <= t - 100 && !this.clicked) this.color = [255, 0, 0]
        pop()
    }
    click(time) {
        this.clicked = true
        let diff = abs(time - this.milli)
        if (diff <= 80) {
            this.color = [0, 255, 0, 100] // perfect
        } else if (diff <= 160) {
            this.color = [0, 0, 255, 100] // good
        } else {
            this.color = [255, 0, 0, 100] // miss
        }

    }
}