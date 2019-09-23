
    function main() {
        var read = [1,2,3,4,5],target = 10
        read.sort((a, b) => {return a - b})
        for(let i = 0; i < read.length - 2; i++) {
            var l = i + 1,r = read.length - 1
            while(l < r) {
                if(read[l] + read[r] + read[i] === target) {
                    return true
                }
                if(read[l] + read[r] + read[i] < target) {
                    l++
                }
                else {
                    r--
                }
            }
        }
        return false
    }
    console.log(main())