/* eslint-disable react/prop-types */
function MovieCard(props) {
  const baseUrl = "https://image.tmdb.org/t/p/w300";
  const imageUrl = `${baseUrl}${props.posterPath}`;
  return (
    <>
      <div>
        <img
          className="aspect-card w-full rounded-t-md"
          src={imageUrl}
          alt="movie-poster"
        />
        <div className="flex flex-col">
          <h1 className="text-white font-bold ">{props.title}</h1>
          <h1 className="text-white">{props.releaseDate}</h1>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
