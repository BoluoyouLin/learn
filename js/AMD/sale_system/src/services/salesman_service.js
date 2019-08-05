define([], function() {
    const salesman = [
            {name: "lin", age: 13},
            {name: "tom", age: 14}
    ]
    return {
        getList() {
            return salesman;
        },
        add(newOne) {
            salesman.push(newOne)
        },
        delete() {

        },
        modify() {

        }
    }
})