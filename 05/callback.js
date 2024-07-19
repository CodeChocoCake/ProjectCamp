// 어제 내용 복습
// 자바스크립트는 싱글 스레드 기반 언어이다.
// 한 번에 하의 작업만 처리할 수 있다는 것.
// 그래서 자바스크립트는 기본적으로 동기 방식으로 동작합니다.
// 언어적인 차원에서, 언어 자체가 동기적으로만 동작한다면 문제가 되겠죠?
// 시간이 오래 걸리는 코드도 그 시간만큼 기다렸다가 실행한다는 것이니까.
// 그래서 자바스크립트는 비동기 방식을 지원합니다.
// 이러한 비동기 방식을 처리할 수 있는 세 가지 방법인 콜백, promise, async를 배우려고 하는거에요
function task1(callback) {
    setTimeout(() => {
        console.log('task1 시작');
        callback();
    }, 1000);
}
function task2(callback) {
    console.log('task2 시작');
    callback();
}
function task3(callback) {
    console.log('task3 시작');
    callback();
}
function task4(callback) {
    console.log('task4 시작');
    callback();
}
function task5(callback) {
    console.log('task5 시작');
    callback();
}
function task6(callback) {
    console.log('task6 시작');
    callback();
}
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        console.log('끝');
                    });
                });
            });
        });
    });
});
