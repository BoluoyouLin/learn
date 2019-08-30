class SqQueue {
    constructor(length) {
        this.queue = new Array(length)
        this.first = 0
        this.last = 0
        this.size = 0;
    }

    enQueue(item) {
        if(this.last + 1 % this.queue.length === this.first) {
            this.resize(length * 2)
        }
        this.last = (this.last + 1) % this.array.length
        this.queue[this.last] = item
        this.size++
    }
    deQueue() {
        if(this.isEmpty()) {
            return;
        }
        let d = this.queue[this.first]
        this.queue[this.first] = null
        this.first = (this.first + 1) % this.queue.length
        this.size--
        if(this.size === (this.queue.length / 4) && this.queue.length !== 2) {
            this.resize(this.queue.length / 2)
        }
        return d
    }
    getHeader() {
        if(this.isEmpty()) {
            return;
        }
        return this.queue[this.first]
    }
    resize(length) {
        let q = new Array(length)
        for(let i = 0; i < this.size; i++) {
            q[i] = this.queue[i + first % this.queue.length]
        }
        this.queue = q
        this.first = 0
        this.last = this.size - 1
    }
    isEmpty() {
        return this.first === this.last
    }
}