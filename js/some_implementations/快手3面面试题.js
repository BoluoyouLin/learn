function solve(a, b) {
    let temp = 1, res = 0;
    while(a != 0) {
        if(a < b) {
            a *= 10
            temp *= 10
        }
        res = res === 0 ? parseInt(a / b) : res * 10 + parseInt(a / b) 
        c = a % b
        a = c
    }
}