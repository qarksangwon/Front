// JS는 data type을 지정하지 않고 값이 대입될 때 결정되는 동적 데이터 타입 언어
// 변수와 상수는 var과 const, let
// 변수 - 값 여러번 대입 가능 -> lead, write -> let, var

let x = 10;
x = 20;
console.log("x의 값은 : ", x);

// let과 var의 차이는 로딩 타이밍 차이
// 원래라면 나야 할 오류가 undefined로 출력이 나오게 됨
// js의 호이스팅 때문이라고 한다.
// 변수 및 함수의 선언이 스코프의 최상단으로 끌어올려지는 것을 얘기한다.

console.log("y의 값은 : " , y);
var y = 20;
y = 30;
// 이렇게 되면 js의 hoisting으로 인해
// var y;
// console.log("y의 값은 : " ,y);
// y = 20;
// y = 30; 이렇게 되는 것

//또한
var z = 20;
var z = 30;
// 이것도 오류가 나지 않아, var은 안 쓰는 게 좋다.



// 데이터 타입 : 내부적으로 존재
// 원시-> 자바의 값타입이랑 비슷 -> 할당받은 공간에 대입
// 숫자, 문자열, 논리값, 특수(undefined, null), 심벌

let str = "안녕하세요" + "자바스크립트" + `배워봅시다.`;
// 문자열 "" , '' , `` (백틱)
// ``(백틱) -> ES6에서 추가된 문법, `${변수or 코드}` 넣을 수 있음
// python의 f"{}"과 비슷
console.log(str);


// 숫자형(Number) : JS는 정수와 실수를 구별하지 않고 숫자 취급
let num1 = 10;
let num2 = 0.1;
console.log(num1 * num2, num1+num2);
console.log(0.1 + 0.2); 
// 0.300000004 -> 실수 계산할 때 부동 소수점 방식으로 표현해서 값이 정확하게 안나온다.

// toString() : 숫자 -> 문자





// 논리형 : true, false