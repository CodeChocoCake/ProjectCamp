// 1. 동기
// 1.1 코드가 순차적으로 실행되는 것
// 1.1.1 코드의 순서가 보장되는 것

// 2. 비동기
// 2.1 코드가 순차적으로 실행되지 않는 것
// 2.1.1 코드의 순서가 보장되지 않는 것

// 자바스크립트는 싱글 스레드 언어
// 싱글 스레드 언어는 한번에 하나의 작업만 처리할 수 있다
// 자바스크립트는 동기적 실행 언어
// 자바스크트처럼 싱글 스레드 언어는 비동기적으로 실행되는 코드가 필요

// 17. 콜백함수
// 콜백함수는 다른 함수의 매개변수로 전달되어 그 함수가 실행되는 동안 특정 시점에 호출하는 함수를 말합니다.

// function task1(callback) {
//     // 시간이 엄청 오래 걸리는 작업.
//     setTimeout(() => {
//         console.log('task1 시작');
//         callback();
//     }, 300);
// }

// function task2() {
//     console.log('task2 시작');
// }

// task1(task2);

//
//
//

// function task1(callback) {
//     console.log('task1 시작');
//     callback();
// }

// function task2(callback) {
//     console.log('task2 시작');
//     callback();
// }
// function task3(callback) {
//     console.log('task3 시작');
//     callback();
// }
// function task4(callback) {
//     console.log('task4 시작');
//     callback();
// }

// // 콜백 지옥
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log('모든 작업 끝');
//             });
//         });
//     });
// });

// promise를 활용한 비동기 처리 방식
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task1 시작');
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        console.log('task2 시작');
        resolve();
    });
}
function task3() {
    return new Promise((resolve) => {
        console.log('task3 시작');
        resolve();
    });
}
function task4() {
    return new Promise((resolve) => {
        console.log('task4 시작');
        resolve();
    });
}

task1() //
    .then(() => task2()) //
    .then(() => task3()) //
    .then(() => task4()) //
    .then(() => console.log('모든 작업 끝'));

//
//
//

// 동기 콜백 함수
// 콜백 함수가 동기적으로 실행되는 형태
function greeting(callback) {
    console.log('Hello');
    callback();
}

function goodbye() {
    console.log('Goodbye');
}

greeting(goodbye);
