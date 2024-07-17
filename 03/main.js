function printTxt(msg = 'Hello', name = 'Sucoding') {
    console.log(msg, name);
}

printTxt();
printTxt('Hello!', 'Su');

function add(a, ...args) {
    // 유사 배열 객체
    // console.log(arguments);

    // 나머지 매개변수(es6)
    // console.log(args);
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i] + a;
    }
    console.log(sum);
}
add(10, 20, 30, 40, 50);

// console.dir(add);

function add2(a, b) {
    const sum = a + b;
    return sum;
    console.log('호출되지 않는 코드');
}

function printNumber(number) {
    console.log(`${number}가 출력되었습니다.`);
}

const sum1 = add2(10, 20);
printNumber(sum1);

// 외부 함수
function membershipCard() {
    // 내부 함수
    return function () {
        // 내부 함수
        return function () {
            return {
                name: 'soo',
                grade: 'basic',
            };
        };
    };
}

const membership = membershipCard();
console.log(membership()());

// 화살표 함수
// return 생략 시 -> 객체는 소괄호로 묶음
const membershipCard2 = () => ({
    name: 'soo2',
    grade: 'basic2',
});

console.log(membershipCard2());

// 연습문제
const membershipCard3 = () => () => () => ({
    name: '수코딩 온라인 사이트',
    grade: 'basic',
});

// 연습문제
// q1

const add3 = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
};

console.log(add3(10, 20, 30, 40));

// q2
const cal = (a, b) => {
    let plus = a + b;
    let minus = a - b;
    let div = a / b;
    let l = a * b;
    console.log(plus, minus, div, l);
};

cal(20, 2);

// 답
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

console.log(calculate(10, 2, '/'));

//q3
const isEven = (n) => (n % 2 === 0 ? true : false);
console.log(isEven(7));

// q4
const factorial = (n) => {
    let sum = 1;
    for (let i = n; i >= 1; i--) {
        sum *= i;
    }
    return sum;
};
console.log(factorial(5));

// 방법 2
// 재귀 함수
// function factorial(n){
// if (n === 0 || n === 1) {
//     return 1;
// }else{
//     return n* factorial(n-1)
// }
// }

// q5
console.time();

const triangleArea = (bottom, high) => {
    console.log((bottom * high) / 2);
};
triangleArea(6, 10);
console.timeEnd();
