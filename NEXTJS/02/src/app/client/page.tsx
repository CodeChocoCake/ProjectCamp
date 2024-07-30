'use client';

import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';

export default function ClientPage() {
    const [data, setData] = useState(null);
    async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setData(data);
    }
    useEffect(() => {
        console.log('client page');
        getData();
    }, []);
    return (
        <>
            <h1>ClientPage</h1>
            {data && JSON.stringify(data, null, 3)}
        </>
    );
}
