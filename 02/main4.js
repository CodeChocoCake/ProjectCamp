// [ 04. 조건문 ]

const isLoggedIn = false;
if (isLoggedIn) {
    // 0, null, undefined, "", NAN -> false
    console.log('로그인되었습니다.');
} else {
    console.log('로그아웃되었습니다.');
}

// switch
const area = '인천';
let bae = 0;
switch (area) {
    case '서울':
    case '인천':
    case '남양주':
        bae = 3000;
        break;
    case '경기도':
        bae = 3500;
        break;
    default:
        bae = 10000;
        break;
}
console.log(bae);

// switch문 if로 변경
if (area === '서울' || area === '인천' || area === '남양주') bae = 3000;
else if (area === '경기도') bae = 3500;
else bae = 10000;
console.log(bae);

/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/

let score = 100;
let num1;
if (score >= 90) num1 = 'A';
else if (score >= 80) num1 = 'B';
else if (score >= 70) num1 = 'C';
else if (score >= 60) num1 = 'D';
else num1 = 'F';

console.log(num1);
