import data from "./sample.json" assert { type: "json" };
import * as R from 'ramda'


const result = R.pipe(
    R.groupBy(item => item.actor.login),
    R.toPairs,
    R.map(([key, value]) => ({login: key, events: { TotalEvent: value.length }}))
)

function first(data){
    console.log('first:', data);
    return 111;
}
function second(data){
    console.log('second:', data);
}
function third(data){
    console.log('third:', data);
}
R.pipe(first, second, third)(333)
// console.log('result:',result(data))