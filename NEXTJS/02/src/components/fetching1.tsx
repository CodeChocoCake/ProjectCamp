async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

export default async function Fetching1() {
    const data = await getData(); // 2s
    return (
        <>
            <h1>Fetching1</h1>
            {/* {JSON.stringify(data, null, 2)}{' '} */}
        </>
    );
}
