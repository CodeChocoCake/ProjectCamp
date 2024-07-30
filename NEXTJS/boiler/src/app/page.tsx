import Image from 'next/image';
import travel from '/public/images/travel.png';
import seoul from '/public/images/seoul.jpg';
import london from '/public/images/london.jpg';
import paris from '/public/images/paris.jpg';
import newyork from '/public/images/newyork.jpg';
import Link from 'next/link';

export default function Home({
    params,
    searchParams,
}: {
    params: {};
    searchParams: { city: string };
}) {
    // console.log(searchParams.city);
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center gap-4  max-w-[500px]">
                    <Image src={travel} alt={'로고'} width={80} />
                    <ul className="flex items-center antialiased justify-around w-full">
                        <li>
                            <Link
                                className={
                                    searchParams.city === 'seoul' ||
                                    searchParams.city === undefined
                                        ? 'font-bold'
                                        : ''
                                }
                                href="/?city=seoul"
                            >
                                Seoul
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    searchParams.city === 'london'
                                        ? 'font-bold'
                                        : ''
                                }
                                href="/?city=london"
                            >
                                London
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    searchParams.city === 'paris'
                                        ? 'font-bold'
                                        : ''
                                }
                                href="/?city=paris"
                            >
                                Paris
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    searchParams.city === 'newyork'
                                        ? 'font-bold'
                                        : ''
                                }
                                href="/?city=newyork"
                            >
                                NewYork
                            </Link>
                        </li>
                    </ul>
                    <div>
                        {searchParams.city === 'seoul' ||
                        searchParams.city === undefined ? (
                            <Image src={seoul} alt={'서울'} />
                        ) : null}
                        {searchParams.city === 'london' && (
                            <Image src={london} alt={'런던'} />
                        )}
                        {searchParams.city === 'paris' && (
                            <Image src={paris} alt={'파리'} />
                        )}
                        {searchParams.city === 'newyork' && (
                            <Image src={newyork} alt={'뉴욕'} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
