// // [ 05. 반복문 ]

// // 무한 루프(infinite loop, 무한 반복문)
// let num = 0;

// // 조건 맞으면 무한 반복
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// // 무조건 한 번은 실행하고 싶을 때
// do {
//     console.log(num);
// } while (num < 10);
// {
//     console.log(num);
//     num++;
// }

// // 배열이나 객체를 반복할 때 사용
// // for in
// const arr = ['banana', 'apple', 'orange'];
// for (let index in arr) {
//     console.log(arr[index]);
// }
// // for of문
// // 배열을 반복할 때 사용하는 반복문
// for (let value of arr) {
//     console.log(value);
// }

// const obj = { name: 'dj', age: 20 };
// for (let key in obj) {
//     console.log(obj[key]);
// }

// 연습문제
// 과제!!!!!!!!!!!!!!!!!!

// Q1.

//[연습문제 - 1부터 9까지 출력하기]
for (let i = 1; i < 10; i++) {
    console.log(i);
}
//_____________________

// Q2.

/*
[연습문제 - 음수 걸러내기]

배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.

*/

let numArr = [10, -10, 20, -30, 40];
let sum = 0;
for (index in numArr) {
    if (numArr[index] >= 0) sum += numArr[index];
}
console.log(sum);
//Let`s Do it!

//_____________________

// Q3.

/*
[연습문제 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/
for (let i = 0; i <= 15; i++) {
    i % 2 === 0 ? console.log('짝수') : console.log('홀수');
}
//_____________________

// Q4

/*
[연습문제 - 암스트롱 수 구하기]
난이도 ★★★★★

100부터 999까지 암스트롱 수를 구하세요

&암스트롱 수란?

암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다. 
예를 들어 153 = 1 + 125 + 27 입니다. 
이와 같은 수를 암스트롱의 수라고 말합니다.
*/

//153

for (let i = 100; i <= 999; i++) {
    const hundreds = Math.floor(i / 100);
    const tens = Math.floor((i % 100) / 10);
    const first = i % 10;
    const sum = hundreds ** 3 + tens ** 3 + first ** 3;
    i === sum ? console.log(i) : null;
}
