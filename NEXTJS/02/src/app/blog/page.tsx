async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

async function getData2() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

export default async function BlogPage() {
    const data = await getData();
    const data2 = await getData2();
    return (
        <>
            <h1>BlogPage</h1>
            {JSON.stringify(data, null, 2)}
            <hr />
            {JSON.stringify(data2, null, 2)}
        </>
    );
}
