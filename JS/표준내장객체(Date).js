const date = new Date();
console.log(date);

//const date1 = new Date(2022, 11, 27);

const date1 = new Date("2022-12-25");
console.log(date1);

const date2 = new Date("2022/12/25/18:30:50");
console.log(date2);


const completion = new Date("2024/08/30")
console.log(completion);

const remainTime = parseInt((completion.getTime() - date.getTime())/(1000*60*60*24));
console.log(remainTime)
document.querySelector('#result').innerHTML = remainTime;