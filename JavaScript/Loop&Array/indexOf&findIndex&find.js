const superheros = [
	'아이언맨',
	'캡틴 아메리카',
	'토르',
	'닥터 스트레인지',
];
const index = superheros.indexOf('토르'); 
console.log(index); // 2


const todos = [
	{
		id: 1,
			text: '자바스크립트 입문',
			done: true
	},
	{
		id: 2,
			text: '함수 배우기',
			done: true
	},
	{
		id: 3,
			text: '객체와 배열 배우기',
			done: true
	},
	{
		id: 4,
			text: '배열 내장함수 배우기',
			done: false
	}
];

const index = todos.findIndex(todo => todo.id === 3)
console.log(index); // 2    특정 조건을 만족하는 것이 몇 번째인지

const todo = todos.find(todo => todo.id === 3)
console.log(todo) // Object {id: 3,text: '객체와 배열 배우기',done: true}
                  // 찾은 값 자체를 반환
