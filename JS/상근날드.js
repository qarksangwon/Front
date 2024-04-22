// let ham1 = Number(prompt("햄버거 1 가격",""));
// let ham2 = Number(prompt("햄버거 2 가격",""));
// let ham3 = Number(prompt("햄버거 3 가격",""));
// let juice1 = Number(prompt("음료수 1 가격",""));
// let juice2 = Number(prompt("음료수 2 가격",""));

// let minHam;
// let minJuice;

// if(ham1 > ham2) minHam = ham2;
// else minHam = ham1;
// if(minHam > ham3) minHam = ham3;
// if(juice1 > juice2) minJuice = juice1;
// else minJuice = juice1;

// let total = minHam + minJuice - 50;
// document.write(`<h1> 상근날드 </h1>`)
// document.write(`<p>햄버거 1 가격 : ${ham1}</p>`)
// document.write(`<p>햄버거 2 가격 : ${ham2}</p>`)
// document.write(`<p>햄버거 3 가격 : ${ham3}</p>`)
// document.write(`<p>음료수 1 가격 : ${juice1}</p>`)
// document.write(`<p>음료수 2 가격 : ${juice2}</p>`)
// document.write(`<h2>가장 싼 햄버거 세트 할인 가격<h2>`)
// document.write(`<p class="min"> ${total} 원! </p>`)

//for와 list이용
let menu = [];

menu[0] = Number(prompt("햄버거 1 가격",""));
menu[1] = Number(prompt("햄버거 2 가격",""));
menu[2] = Number(prompt("햄버거 3 가격",""));
menu[3] = Number(prompt("음료 1 가격",""));
menu[4] = Number(prompt("음료 2 가격",""));
let minHam = menu[0];
let minJuice = menu[3];

document.write(`<h1> 상근날드 </h1>`)
for(let i =0; i<5; i++){
    if(i<3) {
        if(minHam>menu[i]) minHam = menu[i]
        document.write(`<p> 햄버거 ${i+1} 가격 : ${menu[i]}`)
    }else{
        if(minJuice>menu[i]) minJuice = menu[i]
        document.write(`<p> 음료 ${i-2} 가격 : ${menu[i]}`)
    } 
}
let total = minHam + minJuice - 50;
document.write(`<h2>가장 싼 햄버거 세트 할인 가격<h2>`)
document.write(`<p class="min"> ${total} 원! </p>`)