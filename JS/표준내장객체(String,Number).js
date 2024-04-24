// String 
const pw = "1234567";
if(pw.length < 8) console.log("비밀번호는 최소 8자리 이상이어야 합니다.");
const email = "test@naver.com";

// inclues()
if(email.includes('@') == false) console.log("올바른 이메일 형식이 아닙니다.");

    // indexOf()
console.log(email.indexOf("@")); // 똑같이 0부터 시작

// slice()
let str = "Apple, Banana, Kiwi";
let resp = str.slice(2,8); // 2 부터 8 미만
console.log(resp);

// substring() = slice()와 똑같은데 파라미터로 음수 줄 수 없음.
let resp1 = str.substring(7); // 7부터 끝까지 반환
console.log(resp1);

// replace()
let n = str.replace("Apple", "애플");
console.log(n);

// replaceAll()
let resp3 = str.replaceAll(", ", ",");
console.log(resp3);


// concat() 
let txt1 = "Hello";
let txt2 = "World";
let txt3 = txt1.concat(" ",txt2);
console.log(txt3);

let txt4 = "Hello";
txt4 += " " + "World";
