// 클로저
// 클로저는 실행 컨텍스트가 정상적으로 제거(종료)되지 못하는 현상.
// function add(a, b) {
//     return a + b;
// }

// const sum = add(10, 20);
// console.log(sum);

function outerFunc() {
    let count = 0;
    return function innerFunc() {
        count++;
        console.log(count);
    };
}

const counter = outerFunc();
counter();
counter();
counter();
counter();

//
//
//
//
//

// 객체
const obj = {}; // 빈 객체
obj.color = 'yellow'; // color 프로퍼티 생성
delete obj.color; // color 프로퍼티 삭제
console.log(obj); // {}
console.log(obj.name); // undefined

//
//
//

// 1. 객체의 속성이 같고, 값이 다른 경우
// 생성자함수
function User(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    // this.introduce = function () {
    //     console.log(`이름:${this.name}, 나이:${this.age}, 성별:${this.gender}`);
    // };
}

User.prototype.introduce = function () {
    console.log(`이름:${this.name}, 나이:${this.age}, 성별:${this.gender}`);
};

const user1 = new User('John', 30, 'male');
user1.introduce();

console.dir(user1.__proto__ === User.prototype);

const user2 = new User('mini', 24, 'female');
user2.introduce();

console.dir(user1);
