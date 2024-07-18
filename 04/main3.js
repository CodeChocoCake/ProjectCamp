// setter
// getter
// static
class Car {
    // # -> private하게 됨.
    // 외부에서 값을 바꿀 수 없다.
    // 최초의 값을 보장
    #name;

    static CREATED = '2022';

    constructor(name, speed) {
        this.#name = name;
        this.speed = speed;
    }

    set speed(speed) {
        if (speed < 0) {
            throw new Error('속도는 음수가 될 수 없습니다.');
        }
        this._speed = speed;
    }

    get speed() {
        return this._speed;
    }

    getCarName() {
        return `제 이름은 ${this.#name}입니다.`;
    }

    getSpeed() {
        return `현재 속도는 ${this.speed}입니다.`;
    }

    // 정적 메서드
    static getSpec() {
        return '차는 타이어 4개와 문 4개가 있습니다.';
    }
}

const car1 = new Car('벤츠', 100);
// car1.#name = '아우디';

console.log(car1);
console.log(car1.getCarName()); // 제 이름은 벤츠입니다.
console.log(car1.getSpeed()); // 현재 속도는 100입니다.

// 직접 클래스를 지칭해야 됨.
console.log(Car.getSpec());
console.log(Car.CREATED);

// 일반적인 주니어 레벨에서 클래스를 사용할만한 곳은
// 내가 개발하는 웹 어플리케이션의 공통
// 내가 만든 웹앱이 자바스크립트의 날짜 객체로만 만들 수 없으면
// 나만의 규칙?이 있을 때?
// 내가 유틸리티로 만들 수 있다

// ex)
class Mathutils {
    static PI = 3.1415;

    constructor() {}

    static add(a, b) {
        return a * b + 10;
    }

    static minus(a, b) {
        return a * b - 10;
    }
}

console.log(Mathutils.add(1, 2));
