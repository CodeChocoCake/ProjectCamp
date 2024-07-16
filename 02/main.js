// [ 01. 변수 ]

// 0. 자료형(Data Type)

// 1. 기본자료형 = 원시타입
// 1.1 숫자, 문자열(형), 논리, 특수, 심볼
// 1.1.1 숫자(Number)
// -> 우리가 생각하는 수의 값, 양수, 음수, 정수, 소수, 지수

// 1.1.2 문자열(형)
// -> 큰 따옴표나 작은 따옴표로 감싸진 값을 ("", '')

// 1.1.3 논리
//  -> true, false

// 1.1.4 특수 자료형
// 1.1.4.1 undefined
let number;
console.log(number);

// 1.1.4.2 null
// undefined와 다르게 의도해서 비워둠
const movieChannel = null;

// 1.1.5 symbol
// es6에서 추가됨
// 실무에서 제대로 사용해본적 없음
// -> Symbol('message') -> 절대로 중복되지 않는 유니크한 값을 생성함.
const t = Symbol('회원 테이블의 고유한 id 값을 사용하기 위해');
const a = Symbol();
console.log(t);

// ______________

// 2. 참조 자료형
// 2.1 배열, 객체, 함수

// 2.1.1 배열
// -> 여러 개의 값을 묶어둔 값
// -> 순수하게 값을 묶으려고
const scoreArr = [90, 40, 50, 80]; // 국어, 영어, 수학, 과학
console.log(scoreArr[0]); // 0 ~

// 2.2.2 객체
// -> 여러 개의 값을 묶어둔 값
// -> 값(키, 값)을 묶어둠
const scoreObj = {
    koreanScore: 90,
    englishScore: 40,
    mathScore: 50,
    scienceScore: 80,
};

// 마침표 연산자 (.)
console.log(scoreObj.englishScore);

// 대괄호 연산자 ([])
console.log(scoreObj['englishScore']);

// 2.1.3 함수
// function
function sum() {}

// [ 02. 자료형 ]

// typeof
console.log(typeof t);
console.log(typeof scoreArr); // array로 안나오고 object ? 자바스크립트 버그
console.log(typeof scoreObj);
console.log(typeof sum);

// 연습문제1
// 1. 변수 타입 확인
// 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
let num = 42;
let name = 'John';
let isTrue = true;
let person = { name: 'Alice', age: 30 };
let fruits = ['apple', 'banana', 'orange'];

console.log('연습문제1____');
console.log(typeof num);
console.log(typeof name);
console.log(typeof isTrue);
console.log(typeof person);
console.log(typeof fruits);

// 연습문제2
// 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
let length = 16; // number
let lastName = 'Brown'; // string
let score = [10, 20]; // object
let x = {
    firstName: 'Nick',
    lastName: 'Doe',
}; // object
