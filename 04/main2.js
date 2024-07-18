// 12. Class
// 자바스크립트는 클래스가 없었다
// 기존의 문법을 활용해서 편의성이나 기능을 더한 문법 -> 슈가 신택스(syntactic sugar)라고 해요.
// ES6에서 클래스가 추가되었지만, 그것은 문법적인 설탕이에요.
// 자바스크립트는 프로토타입 기반의 언어예요.
// 실제 내부 동작은 생성자 함수와 프로토타입 기반으로 실행됨.

// 과거 방법
function Shape(color) {
    this.color = color;
    this.getColor = function () {
        return `이 도형 색상은 ${this.color}입니다.`;
    };
}

const shape1 = new Shape('red');
console.log(shape1);
console.log(shape1.color);
console.log(shape1.getColor());

function Rectangle(color, width, height) {
    // Shape 생성자 함수에 color 값을 넘기고
    // getColor 메서드가 없어도 마치 상속한 거처럼 할 수 있다.
    Shape.call(this, color);

    this.color = color;
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    };
}

const rec1 = new Rectangle('blue', 20, 20);
console.log(rec1.getArea());
console.log(rec1.getColor());

//
//
//
//
//

// 클래스 방법
class Shape1 {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return `이 도형 색상은 ${this.color}입니다.`;
    }
}

const shape2 = new Shape1('red');
console.log(shape2);
console.log(shape2.getColor());

class Rectangle1 extends Shape1 {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}
const rec2 = new Rectangle1('blue2', 20, 22);
console.log(rec2.getArea());
console.log(rec2.getColor());
console.log(rec2);
