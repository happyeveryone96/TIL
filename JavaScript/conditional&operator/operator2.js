// false: 0, -0, '', null, undefined, NaN
// true: -1, 'hello','false'
let obj = {
    name: 'ellie'
}
if (obj) {
    console.log(obj.name);
} 

obj && console.log(obj.name);