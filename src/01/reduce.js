// import {map} from "./map.js";

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
];

export const reduce = (f, acc, iter) => {
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }

    for (const a of iter) {
        acc = f(acc, a);
    }

    return acc;
}

const add = (a, b) => a + b;
// console.log(reduce(add, 0, [1, 2, 3, 4, 5])); // 15
// console.log(reduce(add, [1, 2, 3, 4, 5])); // 15
//
// console.log(reduce(add, map(item => item.price, products))); // 총합
