'use Client';
export default function ClientCom1() {
    // console.log('client: ClientCom1');
    const random = Math.floor(Math.random() * 2) + 1;
    if (random === 1) throw new Error('Random error');
    return (
        <>
            <h1>ClientCom1 : {random}</h1>
        </>
    );
}
