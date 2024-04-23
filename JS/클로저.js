// 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘
// js는 접근 제한자가 없기 때문에 이를 사용함으로 접근 제한자가 있는 것처럼 사용한다고 한다.
// 즉 java의 getter setter 와 비슷하게 생각하면 된다고 한다.
function Counter() {
    let count = 0;
    
    return {
        increment : function() {
            count++;
            console.log(count);
        }, 
        decrement : function() {
            count--;
            console.log(count);
        }
    }
}
  
const myCounter = Counter();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
