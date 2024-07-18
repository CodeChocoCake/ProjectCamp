// 12. 표준 내장 객체
const str = new String('Hello');
console.dir(str);
console.log(str.length);

//
//
//

// 13. 배열 내장 객체

// 1. 인스턴트 메서드
// 1.1 파괴적 메서드
// 1.1.1 인스턴스 메서드를 호출했을 때, 원본 데이터가 변경되는 메서드
// shift, unshift 메서드 등

// 1.2 비파괴적 메서드
// 1.2.1 메서드를 호출했을 떄, 원본 데이터가 변경되지 않는 메서드

// filter
// 둘다 괜찮지만 메서드를 많이 알면 코드가 깔끔해진다
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// 방법 1
const result1 = words.filter((word) => word[0] === 'e' && word[1] === 'l');
// 방법 2
const result22 = words.filter((word) => word.startsWith('el'));

console.log(result1);
console.log(result22);

// some()
// 배열 안의 요소가 주어진 판별 함수를 하나라도 통과하는지 테스트
// 비파괴적 메서드

// every()
// 모두 통과해야 true

// find()
// 콜백함수의 조건에 맞는 값을 찾음

//
//
//

// 연습문제

const students = [
    { name: 'Alice', age: 21, gender: 'male', height: 170 },
    { name: 'Bob', age: 19, gender: 'male', height: 165 },
    { name: 'Charlie', age: 20, gender: 'male', height: 175 },
    { name: 'David', age: 22, gender: 'male', height: 180 },
    { name: 'Eve', age: 17, gender: 'female', height: 160 },
    { name: 'Frank', age: 18, gender: 'male', height: 175 },
    { name: 'Grace', age: 21, gender: 'female', height: 165 },
    { name: 'Henry', age: 19, gender: 'male', height: 170 },
    { name: 'Ivy', age: 20, gender: 'female', height: 155 },
    { name: 'Jack', age: 22, gender: 'male', height: 185 },
];

// 1. 키가 185인 학생 찾기
{
    const result = students.find((student) => student.height === 185);
    console.log(result);
}

//2. 나이가 20살 이상인 학생들 찾기
{
    const result = students.filter((student) => student.age >= 20);
    console.log(result);
}

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
    const result = students.some((student) => student.height <= 165);
    console.log(result);
}

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
{
    const result = students.every((student) => student.age >= 10);
    console.log(result);
}

//5. 학생들의 평균 연령 구하기
{
    const init = 0;
    const result =
        students.reduce((acc, cur) => acc + cur.age, init) / students.length;
    console.log(result);
}

//6. 남학생들의 평균 연령 구하기
{
    const init = 0;
    const result =
        students
            .filter((student) => student.gender === 'male')
            .reduce((acc, cur) => acc + cur.age, init) /
        students.filter((student) => student.gender === 'male').length;
    console.log(result);
}

//7. 여학생들만 따로 추출해서 새로운 배열 만들기
{
    const result = students
        .filter((student) => student.gender === 'female')
        .map((student) => student);
    console.log(result);
}

//8. 여학생들 중 나이가 가장 어린 학생 찾기
{
    const result = students
        .filter((student) => student.gender === 'female')
        .sort((a, b) => a.age - b.age)
        .slice(0, 1);
    console.log(result);
}

/*
[문제]
매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
함수를 만들어주세요.

ex) 32125 -> 52123
    15231 -> 13251 
*/

function reverse_to_number(number) {
    //let`s do it
    return +number.toString().split('').reverse().join('');
}

let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231

/*
  [가장 긴 단어를 출력하기]
  매개변수로 전달된 문장에서 가장 긴 단어를 출력해주세요.
*/

function findLongStr(str) {
    const arr = str
        .split(' ')
        .find(
            (string) =>
                string.length ===
                Math.max(...str.split(' ').map((string) => string.length))
        );
    return arr;
}

let result = findLongStr('we are the champion');
console.log(result); // champion

let result2 = findLongStr('i`m fine thank you, and you?');
console.log(result2); // thank
