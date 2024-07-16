// // 1. 산술연산자
// // 연습문제

// const a = 10;
// const b = 5;

// const sum = a + b;
// const difference = a - b;
// const multiple = a * b;
// const division = a / b;
// const remainder = a % b;

// console.log(sum, difference, multiple, division);

// // 2. 증감연산자
// // 연습문제
// let y = 7;
// console.log(y++);
// console.log(y--);
// console.log(++y);
// console.log(--y);

// // 3. 대입연산자
// // 연습문제
// let x = 20;
// console.log((x += 10));
// console.log((x -= 5));
// console.log((x /= 2));
// console.log((x *= 3));
// console.log((x %= 3));

// 4. 비교 연산자
const num1 = 10;
const num2 = 10;
const strNum = '10';

// 동등연산자
// js 엔진이 자동으로 형 변환을 해서 true 나옴
// 피연산자들의 데이터가 같으면 true
// 자료형 검사 x
// 암묵적 형 변환
// console.log(num1 == num2);
// console.log(num1 == strNum);

// 일치연산자
// 피연산자들의 데이터가 같으면 true
// 자료형 검사 o
// console.log(num1 == num2);
// console.log(num1 === strNum);

// 연습문제
// 1. 나이 비교
const age1 = 25;
const age2 = 30;
// console.log(age1 > age2);
// console.log(age1 === age2);

// 5. 삼항연산자
// 피연산자1 ? 피연산자2 : 피연산자3
console.log(age1 > age2 ? 'Older' : 'Younger or Same');

//연습문제
// 1. 숫자 비교
const num = 1;
console.log(num > 0 ? 'Positive' : num === 0 ? 'Zero' : 'Negative');

// 2. 최댓값 찾기
const a = 1;
const b = 2;
const c = 3;
const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

// 3. 짝수 홀수 확인
const number = 8;
console.log(number % 2 === 0 ? 'Even' : 'Odd');

// 4. 로그인 확인
const isLoggedIn = true;
console.log(isLoggedIn === true ? 'Welcome' : 'Please log in');

// 5. 성인 확인
const age = 22;
console.log(age >= 18 ? 'Adult' : 'Minor');
