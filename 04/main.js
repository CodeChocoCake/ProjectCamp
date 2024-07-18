// 생성자 함수 - 객체 생성 함수
// 2. 함수 선언식으로 선언합니다. - 관례
// 2. 함수 식별자의 첫 글자는 대문자입니다.
// 2.1 카멜케이스 userName - 관례
// 2.2 스네이크케이스 user_name - 사용하지 않음
// 2.3 파스칼케이스 UserName - 클래스 이름
// 3. 프로토타입 체인
// 3.1 인스턴스 내부의 __proto__ 속성으로 자신을 생성한 생성자 함수의 프로토 타입 객체를 참조하는 현상
function Student() {
    // this = {};
    this.name = 'sucoding';
    this.age = 20;
    this.gender = 'male';
    // 공통된 introduce 메서드 주석 처리
    // (this.introduce = function () {
    //     return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    // });
    // return this;
}

// --> prototype 공통 함수로 등록
Student.prototype.introduce = function () {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
};

// student1은 Student의 인스턴스다
const student1 = new Student();
console.log(student1);

// __proto__ : 생성자 함수의 프로토타입 객체를 가르킵(참조합)니다.
console.log(student1.__proto__);

// prototype -> constructor 속성을 가짐
// constructor -> 자신과 1:1 관계를 맺고 있는 함수를 참조할 수 있다(상호 참조)
console.dir(Student.prototype);

console.dir(student1.introduce()); // 사용 가능 -> __proto__ 는 생략해서 씀 -> student1이 this가 됨
console.dir(student1.__proto__.introduce()); // undefined 출력 -> 안되는 이유 -> __proto__가 this가 되기 때문..
// console.dir(student1.introduce2()); // ReferenceError가 아닌 이유 -> TypeError -> 객체는 없는 부분을 참조하면 undefined가 나오기 때문.
console.dir(student1.hasOwnProperty('name')); // true
console.dir(student1.__proto__ === Student.prototype); // true

// const student1 = {
//     name: 'su',
//     age: 20,
//     gender: 'male',
//     height: 185,
//     introduce: function () {
//         return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
//     },
// };
