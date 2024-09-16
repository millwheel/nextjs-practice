import { URL } from "../../(home)/URL";

async function getMovie(id: string) {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);
  return <h1>{movie.title}</h1>;
}
