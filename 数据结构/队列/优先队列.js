// 可以使用堆来实现
class PriorityQueue {
    constructor() {
        this.heap = new Heap()
    }

    enQueue(item) {
        this.head.add(item)
    }

    deQueue() {
        return this.heap.remove()
    }

    getSize() {
        this.heap.size()
    }
}