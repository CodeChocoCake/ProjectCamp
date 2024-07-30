import { notFound } from 'next/navigation';

export default function productDetail({
    params,
}: {
    params: {
        id: string;
    };
}) {
    if (params.id === '2') notFound();
    else throw Error('Product Error');
    console.log(params.id);
    return (
        <>
            <h1>productDetail</h1>
        </>
    );
}
