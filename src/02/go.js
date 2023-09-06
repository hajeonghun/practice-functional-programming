// import {filter} from "../01/filter.js";
// import {map} from "../01/map.js";
import {reduce} from "../01/reduce.js";
import {filter} from "../01/filter.js";
import {map} from "../01/map.js";

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
];

const add = (a, b) => a + b;

// reduce(
//     add,
//     map(p => p.price,
//         filter(p => p.price < 20000, products)));

// 직접 시도해본 거
const myGo = (a, ...fs) => {
    for (const f of fs) {
        a = f(a)
    }
};

// 강의 정석
export const go = (...args) => reduce((a, f) => f(a), args)

// 111
// myGo(
//     0,
//     a => a + 1,
//     a => a + 10,
//     a => a + 100,
//     console.log,
// );
//
// go(
//     0,
//     a => a + 1,
//     a => a + 10,
//     a => a + 100,
//     console.log,
// )

go(
    products,
    products => filter(p => p.price < 20000, products),
    products => map(p => p.price, products),
    prices => reduce(add, prices),
    // console.log
);
