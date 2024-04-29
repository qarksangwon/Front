//JSON
let data = '{"name":"Jhon", "age":30}'
let obj = JSON.parse(data);
console.log(obj.name);
console.log(JSON.stringify(obj));

//Array
const numbers = [1,2,3,4,5,6,7,8,9,10];
// forEach
numbers.forEach(e => console.log(e));

//map -> 순회하고 새로 만듬.
const numMap = numbers.map(e => e*e);
console.log(numMap);

//filter -> 조건 만족하는 요소만 새로운 배열
const even = numbers.filter(e => e % 2 === 0);
console.log(even);

//reduce ->  누적 값으로 결과 값 하나 만듬
const sum = numbers.reduce((total, e) => total + e , 0);
// 첫 번째 매개변수는 계속해서 누적해서 쓸 매개변수, 
// 두 번째 매개변수는 순회 할 매개변수
// 즉 앞에서부터 매개변수에 배열의 값을 차례대로 넣는데,
// 함수 내부의 내용을 실행시켜 나온 값을 첫 번째 매개변수에 넣고,
// 그 다음 배열의 값을 두번 째 매개변수에 넣음.
console.log(sum);

