import {go} from "./go.js";
import {pipe} from "./pipe.js";

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
];

export const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
})


const filter = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        if(f(a)) {
            res.push(a);
        }
    }
    return res;
})

const reduce = curry((f, acc, iter) => {
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }

    for (const a of iter) {
        acc = f(acc, a);
    }

    return acc;
})

const add = (a, b) => a + b;

go(
    products,
    products => filter(p => p.price < 20000)(products),
    products => map(p => p.price)(products),
    prices => reduce(add)(prices),
    console.log
)
// 아래로 바뀜
go(
    products,
    filter(p => p.price < 20000),
    map(p => p.price),
    reduce(add),
    console.log
)

/**
 * 아래 중복 제거
 *     map(p => p.price),
 *     reduce(add),
 */

go(
    products,
    filter(p => p.price < 20000),
    map(p => p.price),
    reduce(add),
    console.log
)

go(
    products,
    filter(p => p.price >= 20000),
    map(p => p.price),
    reduce(add),
    console.log
)

const total_price = pipe(
    map(p => p.price),
    reduce(add),
)


go(
    products,
    filter(p => p.price < 20000),
    total_price,
    console.log
)

go(
    products,
    filter(p => p.price >= 20000),
    total_price,
    console.log
)