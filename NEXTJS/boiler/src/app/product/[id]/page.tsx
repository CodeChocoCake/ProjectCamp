export default function ProductDetailPage({
    params,
    searchParams,
}: {
    params: { id: string };
    searchParams: { lang: string; order: string };
}) {
    console.log(params);
    console.log(searchParams.lang);
    console.log(searchParams.order);
    return <div>ProductDetailPage : {params.id}</div>;
}
