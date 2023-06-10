import { useState } from "react";
import { useGetMovieQuery } from "../../redux/TMDB";
import { useNavigate } from "react-router-dom";
import { LazyImg } from "../../components";

const Hero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const { data: movies, isFetching, error } = useGetMovieQuery();

  const randomIndex = Math.floor(Math.random() * movies?.results?.length);
  const randomMovie = movies?.results[randomIndex];

  if (error) return "Something went wrong";

  const searchQueryHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const SearchHandle = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const skeleton = () => {
    return (
      <main className="w-full h-[450px] md:h-[500px] bg-[#262728] animate-pulse flex-shrink-0 overflow-hidden">
        <section className="h-full w-full bg-[#ffffff]">
          <section className="h-full w-full absolute left-0 animate-slide" />
        </section>
      </main>
    );
  };

  return (
    <>
      <header className="w-full h-[450px] md:h-[500px] relative">
        {!isFetching ? (
          randomMovie && (
            <section className="w-full h-full absolute">
              <div className="w-full h-full bg-pink opacity-40 absolute z-10" />
              <LazyImg
                src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
                alt="movie-poster"
                className="w-full h-full  object-cover object-center"
              />
            </section>
          )
        ) : (
          <div>{skeleton()}</div>
        )}
        <main className="h-full w-full relative mx-auto flex flex-col items-center sm:items-start justify-center px-10 gap-10 z-50">
          <section className="flex flex-col items-center sm:items-start justify-center text-center sm:text-left">
            <h1 className="text-5xl md:text-7xl font-bold ">Welcome</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </section>
          <section className="w-[90%] flex items-center relative">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              className="w-full h-12 sm:h-14 bg-white outline-none border-none rounded-3xl px-5 text-gray-400 text-base sm:text-lg"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button
              className="w-28 sm:w-36 h-12 sm:h-14 bg-pink absolute right-0 rounded-3xl font-medium text-base sm:text-lg "
              onClick={SearchHandle}
            >
              Search
            </button>
          </section>
        </main>
      </header>
    </>
  );
};

export default Hero;
