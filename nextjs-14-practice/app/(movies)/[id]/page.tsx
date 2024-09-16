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
      <Suspense>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
