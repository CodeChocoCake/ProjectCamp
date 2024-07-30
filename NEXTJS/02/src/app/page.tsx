import Fetching1 from '@/components/fetching1';
import Fetching2 from '@/components/fetching2';
import { Suspense } from 'react';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Suspense
                fallback={<h1 className={'text-rose-500'}>Loading1...</h1>}
            >
                <Fetching1 />
            </Suspense>
            <Suspense
                fallback={<h1 className={'text-orange-500'}>Loading2...</h1>}
            >
                <Fetching2 />
            </Suspense>
        </>
    );
}
