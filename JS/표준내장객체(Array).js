// Array

// forEach()
const arr = [10,20,30,40,50];
arr.forEach((e) => {
    console.log(e + 1000);
})

// map()
const resp = arr.map((e) => console.log(e * e));

// toString()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango


// pop()
console.log(fruits.pop()); // 빼내서 반환 후 원본 데이터에서 삭제
console.log(fruits);
// push() 
console.log(fruits.push("Melon")); // 넣고 길이 반환
console.log(fruits);
// shift() -> 맨앞 빼고 뺀 거 반환
console.log(fruits.shift());
console.log(fruits);
// unshift() -> 맨앞 넣고 길이 반환
console.log(fruits.unshift("WaterMelon"));
console.log(fruits);

// 요소 변경
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
console.log(fruits);


//concat()
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);

// filter()
let persons = [
    {
      name: "유재석",
      point: 78,
      city: "서울",
    },
    {
      name: "김종국",
      point: 92,
      city: "서울",
    },
    {
      name: "양세찬",
      point: 76,
      city: "제주",
    },
    {
      name: "하하",
      point: 81,
      city: "서울",
    },
  ];

  let pass = persons.filter(person => person.point > 80);
  console.log(pass);

  //map
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squaredNumbers);