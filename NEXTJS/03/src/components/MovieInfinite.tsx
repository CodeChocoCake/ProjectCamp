'use client';

import { TMovie } from '@/types/movie';
import { useEffect, useRef, useState } from 'react';
import { ImSpinner5 } from 'react-icons/im';
import { useInView } from 'react-intersection-observer';
import MovieCard from './MovieCard';

export default function MovieInfinite() {
  const pageRef = useRef(2);
  const { ref, inView } = useInView({});
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    if (inView) {
      // alert('보인다');
      fetch(
        `${
          process.env.NEXT_PUBLIC_HOST_URL
        }/api/movies?path=now_playing&page=${pageRef.current++}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies((prev) => [...prev, ...data.results]);
        });
    }
  }, [inView]);
  return (
    <>
      <article className="bg-black px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </article>

      <div ref={ref} className={'bg-black pb-10'}>
        <ImSpinner5 className={'text-white text-3xl mx-auto animate-spin'} />
      </div>
    </>
  );
}
