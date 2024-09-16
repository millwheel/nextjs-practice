import { URL } from "../app/(home)/URL";

async function getMovie(id: string) {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovie(id);
  return <h6>{JSON.stringify(movies)}</h6>;
}
