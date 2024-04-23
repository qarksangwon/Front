// 콜백 함수 : 함수의 인자로 다른 함수 전달해서
// 함수 실행될 때 호출되는 함수
// 콜백함수는 주로 비동기적인 작업을 처리할 때 많이 사용


function cry() {
    console.log("cry --");
}
function sing() {
    console.log("sing ~~");
}
function dance() {
    console.log("dance !!");
}
// 일반적인 함수 호출
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
// checkMood("good");


// 콜백 함수
// js는 타입이 없기 때문에 매개변수로 함수가 넘어갈 지, 그냥 변수가 넘어갈 지 모른다.
function checkMoodCallback(mood, goodCall, badCall, notBadCall) {
    if(mood === "good") goodCall();
    else if(mood === "bad") badCall();
    else notBadCall();
}

checkMoodCallback("good", ()=> {console.log("끼얏호우!!")},cry, sing);


//추가 예시
function buy_tobe(item, price, quantity, callback) {
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    console.log(". . . 계산 중 . . .");
    setTimeout(function () {
        var total = price * quantity;
        callback(total);
    }, 2000); // 여기선 settimeout의 매개변수로 함수가 바로 주어졌기 때문에 얘도 콜백 함수고
}

// buy_tobe("\'밤고구마 맛없음\'", 1000, 5, (x)=>{console.log("지불할 금액은 : ",x,"입니다.")});
// 이친구도 콜백 함수.


// 이벤트 핸들러
let button = document.querySelector('#mybutton');
button.addEventListener('click',() =>{
    console.log('Button clicked');
})