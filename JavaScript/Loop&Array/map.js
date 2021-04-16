const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];
//1.
for (let i = 0; i < array.length; i++) {
	squared.push(array[i] * array[i]);
}
//2.
array.forEach(n => {
	squared.push(n * n);
});

console.log(squared); // [1, 4, 9, 16, 25, 36, 49, 64];

// 3. map
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const square = n => n * n;
const squared = array.map(square);
// const squared = array.map(n => n * n);
console.log(squared);


const items = [
	{
		id: 1,
		text: 'hello'
	},
	{
		id: 2,
		text: 'bye'
	}
];

const texts = items.map(item => item.text);
console.log(texts); // ["hello", "bye"]
