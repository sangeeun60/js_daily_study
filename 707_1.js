// substring
// 문자열 시작점과 시작점으로부터 잘라낼 문자의 개수를 입력해
// 새로운 부분 문자열을 만듬

let str = 'I love Javascript';
let a = 3;
let b = 4;

let resultstr = "";
let result = "";

let substr = new Array(str.length);
for (let i =0; i<substr.length; i++) {
    substr[i] = i+1;
    if (substr[i] >= a) {
        resultstr += str[i];
    }

}
for (let j=0; j<b; j++) {
    result+= resultstr[j];

}
console.log(result);