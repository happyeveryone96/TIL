const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

const sum = add(3, 4);
console.log(sum);

const doSomething = add;

const result3 = doSomething(2, 3);
console.log(result3);
const result4 = add(2, 3);
console.log(result4);

function print(a, b) {
    console.log(`${a} ${b}`);
}

print(6, 33);
print();

function surprise(operator) {
    const result = operator(2, 3); // divide(2, 3)
    console.log(result);
}

surprise(divide);