// 1 +2 + 3 + … + n 인 수가 입력 받은 수를 넘어서는 시점에서의 n을 구하세요.
// (단, n은 자연수)

let n = 1000;
let sum = 0;
let num = 0
let i=1;

while(sum<=n) {
    i++;
    sum += i;

}

console.log(i);