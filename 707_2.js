// ASCII 코드
// 임의의 문자가 입력될 때 해당 문자의 아스키코드 값 출력

const str = 'Ddew';
let tmp = "";

for (let i=0; i<str.length; i++) {
    tmp += str.charCodeAt(i) + '\n';
}
console.log(tmp);
