// 6. 논리 연산자
// 연습문제
const a = true;
const b = false;
const resultAnd = a && b;
const resultOr = a || b;
console.log(resultAnd);
console.log(resultOr);
console.log(!a);

// 2 여러 조건 결합
const x = 10;
const y = 20;
const z = 30;
const result1 = x > 10 && y < 5;
console.log(result1);
const result2 = x > 10 || z > 3;
console.log(result2);
const result3 = x !== 0;
console.log(result3);

// 3 사용자 로그인 및 권한 확인
const isLoggedIn = true;
const isAdmin = false;
const checkLogin = isLoggedIn ? 'Welcome' : 'Please log in';
console.log(checkLogin);
const checkAdmin = isAdmin ? 'Admin access granted' : 'Admin access denied';
console.log(checkAdmin);
const checkLoginAdmin =
    isLoggedIn && isAdmin ? 'Full access granted' : 'Restricted access';
console.log(checkLoginAdmin);

// 4 값의 존재 확인
// 삼항 연산자일 때 0인 것들 0, undefined, null, "", NAN
const value1 = '';
const value2 = null;

console.log(!!value1 || !!value2); // 1개라도 값이 존재하면 true, 아니면 false
console.log(!value1 && !value2); // 두 변수 모두 값이 없으면 true, 아니면 false

// 5 범위 확인
const num = 10;
const numResult1 = num >= 0 && num <= 100;
console.log(numResult1);
const numResult2 = num < 0 || num > 100;
console.log(numResult2);

// 부록
// 1 배열
// 2 잘못된 게 없다
// 3 =
// 4 == 같다
// 5 '축하합니다. 만렙입니다'
// 6 true, false, 200, 200
// 7 1
// 8 30
// 9
