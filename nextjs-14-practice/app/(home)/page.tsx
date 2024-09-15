const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(URL);
  return await response.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
