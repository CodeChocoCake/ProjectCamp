import Header from '../components/Header';
import Banner from '@/components/Banner';
import { TMovie } from '@/types/movie';
import MovieArea from '@/components/MovieArea';
import { Suspense } from 'react';
import MovieLoading from '../components/movieLoading';
import MovieInfinite from '@/components/MovieInfinite';

export default async function Home() {
  // 로딩 방법 1
  // promise all
  // 단점 : 타입 오류
  // const all = await new Promise.all([getMovies('now_playing'),getMovies('popular'),getMovies('upcoming')]);

  // 로딩 방법 2
  // suspense로 감싸고 싶으면 getMovies를 MovieArea로 옮겨야됨

  // const nowPlaying: TMovie[] = (await getMovies('now_playing')).results;
  // const popular: TMovie[] = (await getMovies('popular')).results;
  // const upcoming: TMovie[] = (await getMovies('upcoming')).results;

  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 메인 */}
      <Banner />
      <Suspense fallback={<MovieLoading title={'Now Playing'} />}>
        {/* 무비 에어리어 1 */}
        <MovieArea
          // movies={nowPlaying}
          path={'now_playing'}
          title="Now playing"
        />
      </Suspense>
      {/* <Suspense fallback={<MovieLoading title={'Popular'} />}>
        <MovieArea
          //  movies={popular}
          path={'popular'}
          title="Popular"
        />
      </Suspense>
      <Suspense fallback={<MovieLoading title={'Upcoming'} />}>
        <MovieArea
          //  movies={upcoming}
          path={'upcoming'}
          title="Upcoming"
        />
      </Suspense> */}
      <MovieInfinite />
    </>
  );
}
