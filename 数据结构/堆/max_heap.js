class MaxHeap {
    constructor() {
        this.array = []
    }

    size() {
        return this.array.length
    }

    empty() {
        return this.size() == 0
    }

    add(item) {
        this.array.push(item)
        this.shiftUp(this.size() - 1)
    }

    getParentIndex(index) {
        return parseInt((index - 1) / 2)
    }

    getLeftIndex(index) {
        return index * 2 + 1
    }

    removeMax() {
        this.swap(0,this.size() - 1)
        this.array.splice(this.size() - 1, 1)
        this.shiftDown(0)
    }

    shiftUp(index) {
        let pre = this.getParentIndex(index)
        while(this.array[index] > this.array[pre]) {
            this.swap(index,pre)
            index = pre
        }
    }

    shiftDown(index) {
        // 判断左节点是否存在
        while(this.getLeftIndex(index) < this.size()) {
            let j = this.getLeftIndex(index)
            // 判断右节点是否存在且大于左节点
            if(j + 1 < this.size() && this.array[j] < this.array[j + 1]) {
                j++
            }
            if(this.array[index] >= this.array[j]) {
                break;
            }
            this.swap(index, j)
            index = j
        }
    }

    swap(index1, index2) {
        let temp = this.array[index1]
        this.array[index1] = this.array[index2]
        this.array[index2] = temp 
    }
}