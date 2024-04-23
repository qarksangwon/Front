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