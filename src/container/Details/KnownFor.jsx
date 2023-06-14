/* eslint-disable react/prop-types */
import { LazyImg } from "../../components";
import poster from "../../assets/poster.jpg";
import { useNavigate } from "react-router-dom";

const KnownFor = ({ movie, isLoading }) => {
  const navigate = useNavigate();
  const formatDate = (dateStr) => {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    if (movie) {
      navigate(`/movie/${movie.id}`);
    } else {
      error("No route available");
    }
  };

  const skeleton = () => {
    return (
      <main className="w-36 h-56 animate-pulse flex flex-col items-center justify-center gap-2">
      <div className="w-full h-full bg-skeleton rounded "/>
      <section className="w-full flex flex-col gap-2 animate-pulse">
       <div className="w-full h-4 bg-skeleton rounded"/>
       <div className="w-[80%] h-4 bg-skeleton rounded"/>
      </section>
    </main>
    );
  };

  return (
    <>
      {!isLoading ? (
        <div className="w-36 h-full flex flex-col items-start justify-start gap-1">
          <section
            className="w-full h-56 cursor-pointer overflow-hidden rounded"
            onClick={handleClick}
          >
            <LazyImg
              src={
                `https://image.tmdb.org/t/p/original${movie.poster_path}` ||
                poster
              }
              alt="Poster"
              className="w-full h-full object-contain object-center rounded"
            />
          </section>
          <section className="flex flex-col items-start justify-start gap-1">
            <h1 className="font-semibold ">{movie.title}</h1>
            <span className="text-gray-400">
              {formatDate(movie.release_date)}
            </span>
          </section>
        </div>
      ) : (
        <div className="flex overflow-y-hidden px-5 gap-5">
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        </div>
      )}
    </>
  );
};

export default KnownFor;
