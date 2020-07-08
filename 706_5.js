// 구구단
// 한 줄에 입력한 숫자 만큼 개수 출력

let multi = "";
let result = "";
let len = 0;
function multiple(n) {
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            multi = i * j;
            result += i + ' * ' + j + ' = ' + multi + ' ';
            len += 1;
            if (len%n === 0) {
                result += '\n';
            }
        }
    }

    return result;
}

console.log(multiple(5));

