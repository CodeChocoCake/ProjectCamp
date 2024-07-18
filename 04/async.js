// async await
// Promise 설탕을 첨가한 것
// Syntactic sugar 문법

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getSunIcon = async () => {
    // 비동기 기다릴 방법이 있어야 할 ...
    // return new Promise((resolve)=> {
    //     setTimeout(()=>{
    //         resolve('🌞');
    //     },1000);
    // })

    // 비동기 처리를 기다려주는 await
    await delay(1000);
    return '🌞'; // resolve('🌞');
}; // async는 무조건 resolve()

// 2
//  {
// new Promise((resolve) => {
//     resolve('🌞');
// });
// };

getSunIcon() //
    .then((sun) => console.log(sun));

const getWaveIcon = async () => {
    await delay(2000);
    return '🌊';
};

const getCloudIcon = async () => {
    await delay(1000);
    return '⛅️';
};

const getAllicon = async () => {
    // 결국 promise도 길어져서 복잡해짐.
    // getSunIcon().then((sun) => {
    //     return getWaveIcon().then((wave) => {
    //         return getCloudIcon().then((cloud) => {
    //             console.log(`${sun} ${wave} ${cloud}`);
    //         });
    //     });
    // });

    // async, await를 쓰면 간단해짐
    // 모두 다 기다려서 시간이 길어짐
    // const sun = await getSunIcon();
    // const wave = await getWaveIcon();
    // const cloud = await getCloudIcon();
    // console.log(`${sun} ${wave} ${cloud}`);

    // 병렬로 실행
    // Promise.all([getSunIcon(), getWaveIcon(), getCloudIcon()]).then((icons) => {
    //     console.log(icons);
    // });

    // 2
    // const icons = await Promise.all([
    //     getSunIcon(),
    //     getWaveIcon(),
    //     getCloudIcon(),
    // ]);

    // 3
    const icons = await Promise.allSettled([
        getSunIcon(),
        getWaveIcon(),
        getCloudIcon(),
    ]);

    // console.log(icons.join(','));

    console.log(
        icons
            .filter((icon) => icon.status === 'fulfilled')
            .map((icon) => icon.value)
            .join(',')
    );
};

getAllicon();
