'use client';
import ServerCom2 from './ServerCom2';

export default function ClientCom2() {
    console.log('client: ClientCom2');
    return (
        <>
            <h1>ClientCom2</h1>
            <ServerCom2 />
        </>
    );
}
