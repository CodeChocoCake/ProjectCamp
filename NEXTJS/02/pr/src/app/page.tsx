import Image from 'next/image';
import { banner_bg01 } from '../../public/assets/assets';
// import { thumbnail01 } from '../../public/assets/assets';
import { star } from '../../public/assets/assets';
import Popular from './components/Popular';

type TMovie = {
  title: string;
  id: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

async function getMovies() {
  // 이미 내장되어 있음
  // const fetch = require('node-fetch');

  const url =
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBiNmZkNTM0NDUyZDFkOTgxMDZkMWRkMDIwOGQzMiIsIm5iZiI6MTcyMjMyMzk5NC44NDQ5MTMsInN1YiI6IjY2YTg5Mjg5NDNlY2YzZWQ2MzMwYzNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XqQN-BQsNP4Gr_3LSXRkrWEj880rHKy0ofkpRRPGqhk',
    },
  };

  // fetch(url, options)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((err) => console.error('error:' + err));

  // await 방식으로 변경
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

async function getPopularMovies() {
  const url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBiNmZkNTM0NDUyZDFkOTgxMDZkMWRkMDIwOGQzMiIsIm5iZiI6MTcyMjMyMzk5NC44NDQ5MTMsInN1YiI6IjY2YTg5Mjg5NDNlY2YzZWQ2MzMwYzNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XqQN-BQsNP4Gr_3LSXRkrWEj880rHKy0ofkpRRPGqhk',
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}

async function getUpcomingMovies() {
  // const fetch = require('node-fetch');

  const url =
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBiNmZkNTM0NDUyZDFkOTgxMDZkMWRkMDIwOGQzMiIsIm5iZiI6MTcyMjMyMzk5NC44NDQ5MTMsInN1YiI6IjY2YTg5Mjg5NDNlY2YzZWQ2MzMwYzNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XqQN-BQsNP4Gr_3LSXRkrWEj880rHKy0ofkpRRPGqhk',
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}
// https://image.tmdb.org/t/p/w500
// /adAJDB2Au3x5ve2YyWaEYy4EUw.jpg
export default async function Home() {
  const data = await getMovies();
  const movies = data.results;

  const popularData = await getPopularMovies();
  const popularMovies = popularData.results;

  const upcomingData = await getUpcomingMovies();
  const upcomingMovies = upcomingData.results;

  return (
    <>
      {/* 헤더 */}
      <header className="absolute top-2 text-white w-full py-4 px-2">
        <div className="container mx-auto">
          <h1 className="text-3xl text-yellow-300 font-bold">SUFLIX</h1>
        </div>
      </header>
      {/* 메인 */}
      <article>
        <section
          className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-4"
          style={{ backgroundImage: `url(${banner_bg01.src})` }}
        >
          <div className="container mx-auto poppins text-white flex flex-col justify-center font-bold h-full">
            <h3 className="text-[18px] xs:text-[20px] sm:text-[30px] text-yellow-300">
              SUFLIX
            </h3>
            <h2 className="text-[25px] xs:text-[40px] sm:text-[60px] mb-4">
              Unlimited <span className="text-yellow-500">Movie</span>,
              <br />
              TVs SHows, & <span className="text-rose-500">Infinite</span>
            </h2>
            <p className="text-xl sm:text-2xl">
              An activity where all the movies in the world come together
            </p>
          </div>
        </section>
      </article>
      {/* 무비 에어리어 1 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Now Playing</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {movies &&
              movies.map((movie: TMovie) => (
                <div key={movie.id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-md"
                  />
                  <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
                    <h4 className="">{movie.title}</h4>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-200">
                    <div className="flex items-center gap-2 font-bold">
                      <Image
                        src={star.src}
                        alt="star"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                      <span className="text-yellow-500">
                        {movie.vote_average}
                      </span>
                    </div>
                    <span className="text-yellow-500 font-bold">
                      {movie.release_date}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </article>
      {/* 무비 에어리어 2 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Popular</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {popularMovies.map((movie: TMovie) => (
              <>
                <div key={movie.id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-md"
                  />
                  <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
                    <h4 className="">{movie.title}</h4>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-200">
                    <div className="flex items-center gap-2 font-bold">
                      <Image
                        src={star.src}
                        alt="star"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                      <span className="text-yellow-500">
                        {movie.vote_average}
                      </span>
                    </div>
                    <span className="text-yellow-500 font-bold">
                      {movie.release_date}
                    </span>
                  </div>
                </div>
                {/* <Popular /> */}
              </>
            ))}
          </div>
        </section>
      </article>
      {/* 무비 에어리어 3 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">Upcoming</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0">
            {/* 아이템 1개 */}
            {upcomingMovies.map((movie: TMovie) => (
              <div key={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-md"
                />
                <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
                  <h4 className="">{movie.title}</h4>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-200">
                  <div className="flex items-center gap-2 font-bold">
                    <Image
                      src={star.src}
                      alt="star"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                    <span className="text-yellow-500">
                      {movie.vote_average}
                    </span>
                  </div>
                  <span className="text-yellow-500 font-bold">
                    {movie.release_date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
