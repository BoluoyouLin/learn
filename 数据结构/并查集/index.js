class DisjointSet {
    constructor(count) {
        this.pre = []
        for(let i = 1; i <= count; i++) {
            this.pre[i] = i
        }
    }
    // 查找掌门
    find(p) {
        while(p != this.pre[p]) {
            this.pre[p] = this.pre[this.pre[p]]
            p = this.pre[p]
        }
        return p
    }
    // 合并两个集合
    union(p, q) {
        let pRoot = find(p)
        let qRoot = find(q)
        if(pRoot != qRoot) {
            this.pre[pRoot] = qRoot
        }
    }
}