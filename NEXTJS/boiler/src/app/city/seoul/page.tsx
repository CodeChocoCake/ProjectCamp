import Image from 'next/image';
import travel from '/public/images/travel.png';
import seoul from '/public/images/seoul.jpg';
import Link from 'next/link';

export default function SeoulPage() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center gap-4  max-w-[500px]">
                    <Image src={travel} alt={'로고'} width={80} />
                    <ul className="flex items-center antialiased justify-around w-full">
                        <li>
                            <Link className={'font-bold'} href="/city/seoul">
                                Seoul
                            </Link>
                        </li>
                        <li>
                            <Link href="/city/london">London</Link>
                        </li>
                        <li>
                            <Link href="/city/paris">Paris</Link>
                        </li>
                        <li>
                            <Link href="/city/newyork">NewYork</Link>
                        </li>
                    </ul>
                    <div>
                        <Image src={seoul} alt={'서울'} />

                        {/* <Image src={london} alt={'런던'} />
                            <Image src={paris} alt={'파리'} />
                        
                            <Image src={newyork} alt={'뉴욕'} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
