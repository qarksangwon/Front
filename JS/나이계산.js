let currentYear = 2024;
let birthYear;
let age;

birthYear = prompt("태어난 연도 입력 : ", "");
age = currentYear - birthYear;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 "+age + "세 입니다.");