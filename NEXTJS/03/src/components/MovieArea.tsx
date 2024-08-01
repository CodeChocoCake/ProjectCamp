import { TMovie } from '@/types/movie';
import MovieCard from './MovieCard';

export default async function MovieArea({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  // 따로 함수로 뺄 필요 없이 한번에
  const movies: TMovie[] = (
    await (
      await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/movies?path=${path}`)
    ).json()
  ).results;

  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
