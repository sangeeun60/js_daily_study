// 문자열(str)에 대해 시작점(a)과 시작점으로부터 잘라낼 문자의 개수(b)를 입력하면
// 잘라낸 새로운 부분 문자열을 만드는 프로그램을 작성하세요

let str = "I love Javascript";
let a = 3;
let b = 4;

let arr = new Array();
let substr = "";
let resultstr = "";

for (let i=0; i<str.length; i++) {
    arr[i] = i+1
    if (arr[i] >= a) {
        substr += str[i];
    }
}
for (let j=0; j<b; j++) {
    resultstr += substr[j]
}

console.log(resultstr);