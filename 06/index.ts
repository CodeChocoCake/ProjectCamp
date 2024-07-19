// 1. 타입 추론(Type Inference)
// 1.1 타입스크립트가 해당 변수의 타입을 추론하는 방법
// 1.2 변수를 선언할 때 타입을 명시하지 않아도 타입스크립트가 할당한 값을 통해 타입을 추론

let arr = ['1', 2, 3];
let obj = {
    name: 'sucoding',
    age: 30,
};
// void -> 함수가 아무것도 반환 x
let func: () => number = () => {
    return 10;
};

// 함수의 매개변수는 타입 추론 안됨.
// return 값에 해당하는 타입은 된다
const add = (a: number, b: number): string => {
    // return a * b;
    return `${a * b}입니다`;
};

//
const add2: (a: number, b: number) => string = (a, b) => {
    return `${a * b}입니다`;
};

add(10, 20);

//
//
//

// 2. 타입 명시(Type Annotation)
// 2.1 변수 선언 시 타입을 명시하는 방법
// 2.2 변수명 뒤에 콜론(:)을 붙이고 타입을 명시

// const num = 10;로 작성하면 10으로 추론.
// const 지만 number로 추론
const num: number = 10;
const arr2: number[] = [1, 2, 3];

// 타입 명시 > 튜플(tuple)
const arr3: [number, string, number] = [1, '2', 3];
const arr4: (number | string)[] = [1, '2', 3];

const obj2: {} = {};
const obj3: { name: string; age: number } = { name: 'Kim', age: 20 };

// 3. 리터럴 타입
// 3.1 string 타입이나 number 타입을 명확하게(타이트하게) 지정하는 타입

{
    let num: 10 | 20 = 10;
    let str: 'a' | 'A' = 'a';
    num = 20;
    str = 'A';

    let obj: { name: 'Kim' } = {
        name: 'Kim',
    };
    //  as const;

    const printName = (name: 'Kim') => {
        console.log(name);
    };

    printName('Kim');
    // error 나는 이유는 kim 타입이 아니고 string 타입이라서 에러
    //  as const하면 에러 안남 or name: "Kim"라고 명시
    printName(obj.name);
}

//

// Number는 생성자 함수의 Number 의미함
// const num: Number = 10;

// num = new Number(10);
// str = new String("string");

//

// 4. 타입 오퍼레이터
// 4.1 타입 오퍼레이터는 타입을 조작하는 연산자
// 4.1.2 유니온 타입
// 4.1.2.1 OR(|) 연산자를 사용하여 여러 타입 중 하나 선택
{
    const arr: (number | string)[] = [1, '2', 3];
}
// 4.1.3 인터렉션 타입
// 4.1.3.1 AND(&) 연산자를 사용하여 여러 타입을 조합
{
    const arr: { name: string } & { age: number } = {
        name: 'Kim',
        age: 20,
    };
}

// 5. 인터페이스
// 5.1 인터페이스는 객체의 타입을 정의하는 방법
// 5.2 Interface
// 5.2.1 readonly
// 5.2.2 옵셔널 프로퍼티ㅣ(Optional Property) -> ?
// 5.2.3 상속(Extends)
// 5.2.4 인덱스 시그니처

// I 대문자를 앞에 붙여서 인터페이스인 걸 구분
{
    // interface 사용
    interface IUser {
        name: string;
        // 외부에서 값 변경 x
        readonly age: number;
        height?: number;
    }

    // 똑같은 이름의 인터페이스와 병합됨
    interface IUser {
        gender: string;
    }

    // User의 하위 개념
    // User 상속
    interface IJob extends IUser {
        title: string; // 직업 이름
    }

    // 인덱스 시그니처
    // 단점 : 속성이 명확하지 않다 -> 코드 자동완성이 안됨
    interface ISignature {
        [key: string]: string | number;
    }

    // interface 안쓰면
    // const obj: { name: string; age: number; gender: string; height: number } = {
    //     name: 'Kim',
    //     age: 20,
    //     gender: 'male',
    //     height: 180,
    // };

    const user1: IJob = {
        name: 'Kim',
        age: 20,
        gender: 'male',
        height: 180,
        title: 'developer',
    };

    const user2: IUser = {
        name: 'choi',
        age: 25,
        gender: 'male',
    };

    const user3: ISignature = {
        name: 'joe',
        age: 10,
        gender: 'female',
    };
}

//
//
//

{
    // 6. 타입 별칭
    // 6.1 타입 별칭(Type Alias)은 새로운 타입을 정의하는 벙밥

    // const phoneColor:
    //     | 'red'
    //     | 'orange'
    //     | 'yellow'
    //     | 'green'
    //     | 'blue'
    //     | 'indigo'
    //     | 'violet' = 'indigo';

    type TRainbowColor =
        | 'red'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'blue'
        | 'indigo'
        | 'violet';

    // 타입 별칭을 사용하면 가독성이 좋아짐
    const phoneColor: TRainbowColor = 'indigo';

    type TUser = {
        name: string;
    };

    type TJob = {
        title: string;
    };

    // extends x -> 인터섹션으로 결합
    type TUserAndJob = TUser & TJob;

    // 인터페이스와 마찬가지 타입 지정 가능
    // 차이점 : extends를 사용할 수 없다 , 자동 병합이 안된다
    //

    const user1: TUserAndJob = {
        name: 'Kim',
        title: 'developer',
    };

    const user2: TJob = {
        title: 'developer',
    };

    function printUserName({ name, title }: TUser & TJob) {
        console.log(name);
    }
    printUserName(user1);
}

{
    // 제네릭
    // <T>
    // 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
    // 확장성이 좋아짐

    // 제네릭 x
    // function firstElements(elements: number[] | string[]): number | string {
    //     return elements[0];
    // }

    // console.log(firstElements([1, 2, 3]));
    // console.log(firstElements(['a', 'b', 'c']));

    //제네릭을 활용
    function firstElements<T>(elements: T[]): T {
        return elements[0];
    }

    console.log(firstElements<number>([1, 2, 3]));
    console.log(firstElements<string>(['a', 'b', 'c']));

    type TCar<T> = {
        name: string;
        options: T;
    };

    const car1: TCar<string[]> = {
        name: 'sonata',
        options: ['auto', 'sunroof'],
    };

    const getLength = <T extends { length: number }>(item: T): void =>
        console.log(item);

    getLength([1, 2, 3]);
    getLength(['a', 'b', 'c']);
    getLength('a');
    // error

    // console.log(getLength(10));
    getLength(String(10));
}

//
//
//

// 기본자료형
// 숫자, 문자, 논리형, undefined, null, symbol

// 숫자
// const num: number = 10;
// const str: string = 'Hello';
// const bool: boolean = true;
// const und: undefined = undefined;
// const nul: null = null;
// const sym: symbol = Symbol();

// 참조 자료형
// const obj: object = {};
// const arr: [] = [];
// const fun: Function = () => {};
