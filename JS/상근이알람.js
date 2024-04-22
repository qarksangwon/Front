let hour = prompt("시간 입력(24h) : ", "");
hour = Number(hour);

let min = prompt("분 입력 : " , "");
min = Number(min);

min = (min + hour*60);
if(min < 45){
    min = (24*60) + min;
}
min = min-45;
hour = Math.floor(min / 60);
min = min % 60;

document.write(`<h2> ${hour}시 ${min}분 </h2>`);

