import {reduce} from "../01/reduce.js";
import {go} from "./go.js";

// 직접 시도해본 거
const myPipe = (...args) => (initial) => reduce((a, f) => f(a), initial, args);

// 강의 정석
export const pipe = (...args) => (initial) => go(initial, ...args);

const f = pipe(
    a => a + 1,
    a => a + 10,
    a => a + 100,
)

// console.log(f(0)) // 111 예상
