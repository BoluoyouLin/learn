class TrieNode {
    constructor() {
        // 字符串经过该节点的次数
        this.path = 0;
        // 以该节点为结束的字符串的个数
        this.end = 0;
        // 和该节点连接的下一个节点
        this.next = new Array(26).fill(null)
    }
}

class Tire {
    constructor() {
        this.root = new TrieNode()
    }

    insert(str) {
        if(!str) {
            return;
        }
        str = str.toLowerCase()
        let node = this.root
        for(let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 'a'.charCodeAt(0)
            if(node.next[index] == null) {
                node.next[index] = new TrieNode()
            }
            node.next[index].path++
            node = node.next[index]
        }
        node.end++
    }
    select(str) {
        if(!str) {
            return 0;
        }
        let node = this.root
        for(let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 'a'.charCodeAt(0)
            if(node.next[index] == null) {
                return 0;
            }
            node = node.next[index]
        }
        return node.end
    }
    delete(str) {
        if(!str) {
            return false;
        }
        let node = this.root
        for(let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - 'a'.charCodeAt(0)
            if(node.next[index] == null) {
                return false;
            }
            else if(--node.next[index].path == 0) {
                node.next[index] = null
                return false
            }
            node = node.next[index]
        }
        node.end--
        return true;
    }
}