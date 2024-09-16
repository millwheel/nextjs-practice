import MovieVideos from "../../../component/movie-videos";
import { Suspense } from "react";
import MovieInfo from "../../../component/move-info";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1> Loading movie info </h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1> Loading movie video </h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
