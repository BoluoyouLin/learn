var d = [1,3,4],n = 6;
    // f(0) = 0;
    // f(n) = Math.min(f(n - dj)) + 1
    function changeMaking(d,n) {
        var f = [0]
        for(let i = 1; i <= n; i++) {
            let temp = Number.MAX_VALUE
            for(let j = 0; j < d.length; j++) {
                if(d[j] <= i) {
                    temp = Math.min(f[i - d[j]], temp)
                }
            }
            f[i] = temp + 1
        }
        console.log(f)
    }
    changeMaking(d,n)