/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { animateScroll as scroll } from "react-scroll";
import { LazyImg } from "../../components";
import poster from "../../assets/poster.jpg";
import { useNavigate } from "react-router-dom";
import MovieSkeleton from "../../components/skeletons/MovieSkeleton";

const KnownFor = ({ movie, isLoading }) => {
  const navigate = useNavigate();
  const formatDate = (dateStr) => {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };

  const handleClick = (e) => {
    e.preventDefault();
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
    if (movie) {
      navigate(`/movie/${movie.id}`);
    } else {
      error("No route available");
    }
  };

  const imgUrl = movie?.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : poster;

  return (
    <>
      {!isLoading ? (
        <div className="w-36 h-full flex flex-col items-start justify-start gap-1">
          <section
            className="w-full h-56 cursor-pointer overflow-hidden rounded"
            onClick={handleClick}
          >
            <LazyImg
              src={imgUrl}
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
        <div className="w-full h-full flex flex-wrap justify-center overflow-hidden px-5 gap-5">
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
          <MovieSkeleton />
        </div>
      )}
    </>
  );
};

export default KnownFor;
