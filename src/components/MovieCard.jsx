/* eslint-disable react/prop-types */
function MovieCard(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w300";
  const imageUrl = `${baseUrl}${props.posterPath}`;
  return (
    <>
      <div className=" border border-gray-700">
        <div className=" border-4 border-white">
          <img
            className="aspect-card w-full rounded-t-md"
            src={imageUrl}
            alt="movie-poster"
          />
        </div>

        <div className="flex flex-col gap-1 py-2 pl-2 ">
          <h1 className="text-white font-bold ">{props.title}</h1>
          <h1 className="text-white font-light text-xs">{props.releaseDate}</h1>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
