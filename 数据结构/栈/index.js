class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    pop() {
        this.stack.pop()
    }

    getCount() {
        return this.stack.length
    }

    isEmpty() {
        return this.getCount() == 0
    }

    // 返回栈顶元素
    peek() {
        return this.stack[this.getCount() - 1]
    }
} 