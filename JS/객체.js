// 객체는 참조 타입
// 객체 리터럴은 중괄호 {} 로 만들고 속성(property)과 값(value)의 쌍으로 구성

const person = {
    name: "박재훈",
    addr: "올림피안",
    group : "allright",
    printInfo:function() {
        console.log("올라잇 24 !! ")
    }
}

console.log(person['name']);
person.printInfo();

// 객체 생성
// 생성자로 객체 생성 - 효율적으로 객체들을 생성하기 위한 방법.
function protoPerson(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person1 = new protoPerson('John', 30);
let person2 = new protoPerson('Jane', 35);
person1.sayHello();
person2.sayHello();