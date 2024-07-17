// this
// 예약 키워드
// this -> 자신을 호출한 객체를 가르키는 특수한 키워드
//

// 객체
// 키와 값으로 이뤄진 속성(property)들의 집합
const membership = {
    name: 'kim',
    // 메서드
    // 단축 메서드
    joined() {
        // console.log(this);
        return `${this.name}님이 가입했습니다`;
    },
    //.bind({ name: '수코딩' }),
};
console.log(membership.joined()); // membership

const joined = membership.joined;
joined(); // window

//
//
//

// 실행 컨텍스트

// var
// 생성 단계에서 undefined로 초기화를 해주기 때문에 에러x
console.log(uname); // undefined
var uname = 'su';

// let, const
// console.log(uname); // ReferenceError
// const uname = 'su';

//
const num1 = 10;
printNum(); // 10
function printNum() {
    console.log(num1);
}

//
const num2 = 20;
function printNum2() {
    console.log(num2);
}
printNum2();
console.log('전역 실행 컨텍스트 종료');

// 호이스팅
// 선언부가 최상단으로 올라가는 현상
// 선언과 할당

// var
console.log(name);
var name = '철수';

// 실행 컨텍스트 예
const num = 10;
function floor2() {
    const num = 20;
    function floor3() {
        const num = 30;
        console.log(num);
    }
    floor3();
}
floor2();
console.log(num);

//
//

//
//

// 1
const i = 'aaabbbccc';
// const o = "a3b3c3";
const i2 = 'aabbaa';
// const o2 = "a2b2a2";
const i3 = 'abbbffd';
// const o3 = "a1b3f2d1";

let count = 1;
let order = 0;
let letters = '';
letters += i3[order];
for (let k = 0; k < i3.length - 1; k++) {
    if (i3[order] === i3[k + 1]) count++;
    else {
        letters += count;
        count = 1;
        order = k + 1;
        letters += i3[order];
    }
}
letters += count;

console.log('letters', letters);

// 2
const gugudan = function (n) {
    for (let i = 1; i < 10; i++) {
        console.log(`${n}*${i}=${n * i}`);
    }
};

gugudan(3);
gugudan(4);
gugudan(5);
