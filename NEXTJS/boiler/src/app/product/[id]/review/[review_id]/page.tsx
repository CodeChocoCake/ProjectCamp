export default function ProductReviewPage({
    params,
    searchParams,
}: {
    // params: { id: string; review_id: string };
    // 포괄적
    // 장점은 모든 키를 다 허용 (ex. uuid, id reviewId)
    // 단점은 코드 스니펫 자동완성이 안되지만 편함
    // 왜나면 어차피 파라미터로 들어오는 모든 것들이 = string
    params: { [key: string]: string };
    searchParams: { lang: string; order: string };
}) {
    console.log(params);
    console.log(searchParams.lang);
    return <div>ProductReviewPage</div>;
}
