import {reduce} from "../01/reduce.js";

const range = l => {
    let i = -1;
    let res = [];
    while (++i < l){
        res.push(i)
    }
    return res;
}

// [0, 1, 2, 3, 4]
// console.log(range(5))


// 느긋한 L.range
const L = {};
L.range = function *(l) {
    let i = -1;
    while (++i < l){
        yield i;
    }
}
const add = (a, b) => a + b;
// console.log(L.range(5).next())

console.log(reduce(add, L.range(4)))
