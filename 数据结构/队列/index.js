// 单链队列
class Queue {
    constructor() {
        this.queue = []
    }

    enQueue(item) {
        this.queue.push(item)
    }

    deQueue() {
        return this.queue.shift()
    }

    getLength() {
        return this.queue.length
    }

    isEmpty() {
        return this.getLength() == 0
    }

    getHeader() {
        return this.queue[0]
    }
}