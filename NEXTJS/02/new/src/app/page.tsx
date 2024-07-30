import { format } from 'date-fns';
import { revalidate } from './a/page';

async function getMovieData() {
    const response = await fetch(
        'https://66a7f3e753c13f22a3d188f0.mockapi.io/users',
        // 옵트 아웃
        // {
        //     cache: 'no-cache',
        // }
        // 시간 기반 재검증 // 10초마다 api가 재검증
        { next: { revalidate: 10 } }
    );
    return response.json();
}

export default async function Home() {
    const data = await getMovieData();
    // const data2 = await getMovieData();
    return (
        <>
            <h1>Home</h1>
            <h2>{data.length}</h2>
            <h2>{format(new Date(), 'HH:mm:ss')}</h2>
        </>
    );
}
