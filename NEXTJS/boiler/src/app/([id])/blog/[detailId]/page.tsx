'use client';
import { useParams, useSearchParams, usePathname } from 'next/navigation';

export default function BlogDetailPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    console.log(params);
    console.log(searchParams.get('lang'));
    console.log(pathName);
    return (
        <>
            <h1>BlogDetailPage</h1>
        </>
    );
}
