export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const page = searchParams.get('page') || 1;

  const url = `${process.env.MOVIE_API_URL}/${path}?language=en-US&page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  //
  const { results } = data;
  const newResults = results.map((movie: any) => ({
    ...movie,
    poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  }));
  const newData = { ...data, results: newResults };
  //

  return Response.json(newData);
}
