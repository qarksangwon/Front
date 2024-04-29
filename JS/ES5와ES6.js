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
const sum1 = numbers.reduce((total, e) => total + e , 0);
// 첫 번째 매개변수는 계속해서 누적해서 쓸 매개변수, 
// 두 번째 매개변수는 순회 할 매개변수
// 즉 앞에서부터 매개변수에 배열의 값을 차례대로 넣는데,
// 함수 내부의 내용을 실행시켜 나온 값을 첫 번째 매개변수에 넣고,
// 그 다음 배열의 값을 두번 째 매개변수에 넣음.
console.log(sum1);

//ES6
//화살표 함수
const add = (x, y) => x + y;

//백틱
const name = 'John';
const message = `Hello, ${name}!
How are you today?`;
console.log(message);

//전개 연산자
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, w: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3['x']);
console.log(obj3.x);

function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
  
console.log(sum(1, 2, 3, 4, 5)); // 15
// 전개 연산자 활용
const member = {
    name : "박상원",
    age : "25",
    addr : "서울시 강남구 역삼동"
}

// member.addr = "경기도 안산시"; 같은 주소의 내부 값이 바뀌어 버렸음. 
// 불변성의 원칙을 지키지 못함 -> 리액트가 변경점을 못알아먹음
const member2 = {...member, addr : "경기도 안산시"};
console.log(member);
console.log(member2);
