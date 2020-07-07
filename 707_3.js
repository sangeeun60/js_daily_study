// 시험 성적 평균과 등급 구하기

let kor = 100;
let math = 100;
let eng = 98;
let mean = (kor+math+eng)/3;
let score = Math.floor((mean/10));

switch (score) {
    case 10:
    case 9 :
        console.log(mean.toFixed(2)+' A');
        break;
    case 8 :
        console.log(mean.toFixed(2)+' B');
        break;
    case 7 :
        console.log(mean.toFixed(2)+' B');
        break;
    case 6 :
        console.log(mean.toFixed(2)+' B');
        break;
    default :
        console.log(mean.toFixed(2)+' F');
}