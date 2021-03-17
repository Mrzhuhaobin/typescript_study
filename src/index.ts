import './polyfill.js';

const identify = <T>(arg: T) : T => {
    return arg
}
// console.log(identify('12'))

const arrayIdentify = <T>(arg: T[]) : T[] => {
    // console.log(arg.length)
    return arg
}
arrayIdentify([1])
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identify;

// const setList = new Set();
const arr :Array<string> = ['a', 'b', 'c']
// arr.forEach(item => {
//     setList.add(item)
// })
// const result :boolean = Object.is(setList, arr);
// // console.log('result', result)
// const keys = Object.keys(arr)
// const values = Object.values(arr)
// console.log('keys', keys, values)

const obj =  Object.entries(arr)

// console.log('obj', obj)
enum a {
    x, y, z
}
console.log('a.x', a.x)
console.log('a', a)