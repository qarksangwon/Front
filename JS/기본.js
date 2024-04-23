// JS는 data type을 지정하지 않고 값이 대입될 때 결정되는 동적 데이터 타입 언어
// 변수와 상수는 var과 const, let
// 변수 - 값 여러번 대입 가능 -> lead, write -> let, var
// let의 특이점
// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

let x = 10;
x = 20;
console.log("x의 값은 : ", x);

// let과 var의 차이는 로딩 타이밍 차이
// 원래라면 나야 할 오류가 undefined로 출력이 나오게 됨
// js의 호이스팅 때문이라고 한다.
// 변수 및 함수의 선언이 스코프의 최상단으로 끌어올려지는 것을 얘기한다.
// var, let, const 모두 호이스팅이 일어나지만, 
// var과는 (let,const)이 스코프가 다른것
// var은 functionScope라고 하고 let과 const는 blockScope라서
// var -> undefined로 오류가 나고 let/const -> ReferenceError가 난다고 함.

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
// 원시 타입-> 자바의 값타입이랑 비슷 -> 할당받은 공간에 대입
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


// 객체 타입-> 기본 자료형(원시 타입) 을 제외한 모든 자료형
// 배열
let score = [80,99,true,"아이브",[100,99,98]]
// 자바와 다르게 모든 자료형 저장 가능
// JS도 문자열도 배열
console.log(score[3][1]);


// 객체 리터럴(오브젝트) : java의 map, python의 dictionary와 유사
let score2 = {
    kor : 80,
    eng : 90,
    mat : 56,
    scn : 99,
};
console.log(score2.eng);

//typeof()
//배열에서 toString() 사용 시 모든 문자를 (,)로 결합해 출력

// 비교 연산자에서 연산자가 3개인건 자료형까지 함께 비교
// 이게 왜 있나 ? 
// JS에선 let a = 1 이 있고 let b = "1" 이있을 때 비교하면
// 타입이 달라서 다른 값이어야하는데 a == b 를 하게되면 자동 형변환 때문에 같다고 한다.
console.log(1 == "1");


// 형변환 
// 묵시적 -> 숫자형 데이터와 문자열 데이터를 연결 연산자로 처리하면 문자열로 묵시적 형 변환
console.log(10 + "10");

// 명시적 ->  const num = 10;
// const str = String(num);


// 조건문은 if switch case 3항 연산자

// 반복문은 while, do-while, for, for-in, for-of

// for-in은 객체 리터럴의 프로퍼티를 열거하는데 사용. 
let person = { fname : "John", lname: "Doe", age : 25}
for ( let key in person){
    console.log(`key[${key}] value[${person[key]}]`);
}

// for-of 는 ES6에서 추가된 자바스크립트 반복분 중 하나.
// 루프를 사용하면 배열이나 이터러블 객체(iterable object)의 요소를 순회할 수 있다.
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"]
for (let brand of brands){
    console.log(brand);
}