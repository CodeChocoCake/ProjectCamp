import Image from 'next/image';
import { star } from '../../../public/assets/assets';

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

async function Popular() {
    const popularData = await getPopularMovies();
    const popularMovies = popularData.results;
    const { movie } = popularMovies;

    console.log('movie', movie);
    return (
        <>
            <div>
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
        </>
    );
}
export default Popular;
