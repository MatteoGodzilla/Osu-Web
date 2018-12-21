class Nota {
    constructor(x, y, milli) {
        this.x = x
        this.y = y
        this.milli = milli
        this.notesize = 75
        this.hintsize = 100
        this.speed = 1000
        this.color = [255, 255, 255, 100]
        this.toRemove = false
    }
    show(t) {
        push()
        stroke(0)
        fill(this.color[0], this.color[1], this.color[2], this.color[3]) //prende colori locali alla nota
        //render hint
        if (t <= this.milli && this.milli - this.speed <= t) {
            let localt = map(t, this.milli - this.speed, this.milli, 0, this.hintsize)
            push()
            noFill()
            stroke(0)
            ellipse(this.x, this.y, this.notesize + this.hintsize - localt)
            pop()
            ellipse(this.x, this.y, this.notesize, this.notesize)
        } else if (this.milli <= t && t <= this.milli +250) {
            push()
            rect(this.x - this.notesize / 2, this.y - this.notesize / 2, this.notesize, this.notesize)
            pop()
        }else if(this.milli + 250 < t)this.toRemove = true
        pop()
    }
    click(time) {
        this.toRemove = true;
        let diff = abs(time - this.milli);
        if (diff <= 80) {
            return 'Perfect ' + time
            //test = "Perfect :" + diff;
        } else if (diff <= 240) {
            return 'Good ' + time
            //test = "Good :" + diff;
        } else {
            return 'Miss ' + time
            //test = "Miss :" + diff;
        }
    }
}