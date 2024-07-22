// ES6 문법
// 비구조화 할당
// 코드가 짧아지고 깔끔해짐
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카',
};

function print(hero) {
    // 이 코드가 객체에서 값들을 추출해서 새로운 상수로 선언
    // 키 값이랑 이름이 같아야 함
    // 다르게 선언하기 원하면 name: nickname으로 씀
    const { alias, name, actor } = hero;
    //
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

//
//

// 1. 스프레드 연산자
// 1.1 함수 매개 변수 -> 나머지(기반) 매개 변수
// 1.2 비구조화 할당 -> 비구조화 할당하고 남은 데이터를 한 번에 처리할 때 사용
// 1.3 배열
// 1.3.1 깊은 복사(Deep Copy)
// 1.3.2 배열 합치기

// 얕은 복사(shallow copy)
// 참조 자료형 참조값(주소)를 복사
const arr1 = [10, 20, 30];
const arr2 = arr1;

// 깊은 복사(deep copy)
// 스프레드 연산자
// 깊은 복사를 하기 위해 사용
// 참조 자료형 값 자체를 복사
const arr3 = [...arr1];

console.log(arr1 === arr2); // true
console.log(arr1 === arr3); // false

{
    // 배열 합치기
    const arr1 = [10];
    const arr2 = [20];

    const combind3 = [...arr1, ...arr2];
}

//
//

const user1 = { name: 'han', age: 20 };
const user2 = { name: 'park', age: 24 };

// 객체 병합 -> 속성이 덮어 씌워지는 것을 주의하자.
// 속성의 값이 중복되면 값이 덮어쓰기 됨
const combind = { ...user1, ...user2 }; // { }
console.log(combind);
