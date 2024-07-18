// Promise
// 비동기 작업을 처리할 수 있게 도와주는 객체
// pending: 비동기 처리가 아직 수행되지 않은 상태
// fulfilled: 비동기 처리가 수행된 상태
// rejected: 비동기 처리가 실패한 상태
// then, catch, finally
const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 수행하는 코드
    // 작업이 성공하면 resolve(value) 호출
    // 작업이 실패하면 reject(value) 호출
    const isSuccess = true;
    setTimeout(() => {
        isSuccess ? resolve('success') : reject(new Error('fail'));
    }, 1000);
});

// 비동기 처리를 도와주는 객체
promise
    .then(
        // onfulfilled
        (value) => console.log(value)
        // onrejected를 적으면 catch를 적을 필요가 없다
        // 실무에서는 가독성 때문에 catch를 선호
        // (error) => console.log(error)
    )
    .catch((error) => console.log(error))
    .finally(() => console.log('finally'));

console.log(promise);
console.log('Hello');

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

fetchNumber //
    .then(
        (num) =>
            // _ -> 받았는데 의도적으로 안 쓴 것
            new Promise((_, reject) => {
                // resolve(num * 2);
                // reject가 되면 뒤에 있는 then은 실행 안함.
                // reject(new Error('error'));
                reject(num);
            })
    )
    .catch((num) => num) // onrejected 상태일 때도 promise를 반환할 수 있기 때문
    .then((num) => num * 2) //  2 promise resolve(2); 되는 것과 같다 그래서 then을 계속 쓸 수 있음
    .catch((num) => num) // onrejected 상태일 때도 promise를 반환할 수 있기 때문
    .then((num) => num * 2) //  2 promise resolve(2); 되는 것과 같다 그래서 then을 계속 쓸 수 있음
    .then((num) => console.log(num));
