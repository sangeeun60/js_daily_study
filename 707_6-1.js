// 문자열의 문자를 앞뒤로 번갈아 출력하는 프로그램을 작성하세요.
// 예) ‘abcdef’일 때 ‘afbecd’ 출력

let str = 'Goorm';
let j=0;
let resultstr = "";

let strrev = "";
for (let i=str.length-1; i>=0; i--){
    strrev += str[i];
}
while (j<str.length-j) {
    resultstr += str[j] + strrev[j];
    j++;
    if(((str.length-j)-j)==1) {
        resultstr += str[j];
        j++;
    }
}
console.log(resultstr);