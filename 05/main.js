const hTag = document.querySelector('h1');
console.log(hTag);

// 7. input value 가져오는 법
setTimeout(() => {
    const inputEl = document.querySelector('input');
    console.log(inputEl.value);
}, 1000);

// 20. 이벤트
// 사용자가 웹페ㅔ이지의 특정 요소와 상호작용할 때 발생하는 것.
// 1. 이벤트 타겟 -> 이벤트가 발생한 요소
// 2. 이벤트 타입 -> click, keydown, keyup, mouseover
// 3. 이벤트 핸들러 -> 이벤트가 밥ㄹ생했을 때 실행할 코드
// 4. 이벤트 등록 -> 이벤트 타겟에, 이벤트 타입과 이벤트 핸들러 동작을 등록하는 것을 의미

const inputEl = document.querySelector('input');
// this 쓸 떄는 화살표 함수 안돼
inputEl.addEventListener('keydown', function (ev) {
    console.log(this);
    // 이벤트타입 -> 키보드 이벤트 객체를 넘겨 받음
    console.log(ev);
    console.log('keydown');
    if (ev.key === 'Enter') {
        alert('검색!');
    }
});

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function (ev) {
    console.log(this);
    // 이벤트타입 -> 포인터 이벤트 객체를 넘겨 받음
    console.log(ev);
    console.log('click');
});
