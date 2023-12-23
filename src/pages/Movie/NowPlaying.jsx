import { useState, useEffect } from "react";
import { Error, MovieCard, SEO } from "../../components";
import ContentWrapper from "../../Hoc/SectionWrapper";
import {
  useGetGenresDataQuery,
  useGetNowPlaingMovieQuery,
} from "../../redux/TMDB";
import Select from "react-select";
import MovieSkeleton from "../../components/skeletons/MovieSkeleton";
import ReactPaginate from "react-paginate";

const NowPlaying = () => {
  const [pageNum, setPageNum] = useState(1);
  const [allMovies, setAllMovies] = useState([]);
  const [genre, setGenre] = useState(null);
  const media_type = "movie";
  const {
    data: movies,
    isFetching,
    error,
  } = useGetNowPlaingMovieQuery(pageNum);
  const { data: genresData } = useGetGenresDataQuery(media_type);

  console.log(genresData)

  useEffect(() => {
    if (movies?.results) {
      setAllMovies(movies.results);
    }
  }, [movies]);

  const onChange = (selectedOptions) => {
    setGenre(selectedOptions);
    const selectedGenreIds = selectedOptions.map((option) => option.id);
    if (selectedGenreIds.length === 0) {
      setAllMovies(movies?.results);
    } else {
      const filteredMovies = movies?.results.filter((movie) =>
        movie.genre_ids.some((genreId) => selectedGenreIds.includes(genreId))
      );
      setAllMovies(filteredMovies);
    }
  };

  useEffect(() => {
    if (!genre || genre.length === 0) {
      setPageNum(1);
    }
  }, [genre]);

  const handlePageChange = ({ selected }) => {
    window.scrollTo(0, 0);
    setPageNum(selected + 1);
  };

  if (error) return <Error />;

  return (
    <>
      <SEO title="Now Playing Movies - The Movie Database (TMDB)" />
      <div className="w-full h-full py-10">
        <ContentWrapper>
          <section className="w-full h-full flex items-center justify-end mb-10 px-10">
            <Select
              isMulti
              name="genres"
              value={genre}
              onChange={onChange}
              closeMenuOnSelect={false}
              options={genresData?.genres}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              placeholder="Select genres"
              classNamePrefix="react-select"
              className="w-full sm:w-[300px] text-black"
            />
          </section>
          {!isFetching ? (
            <div className="w-full h-full flex flex-wrap items-start justify-center gap-5">
              {allMovies?.map((media, index) => (
                <section key={`${media.id}-${index}`}>
                  <MovieCard Media={media} />
                </section>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex flex-wrap justify-center overflow-x-hidden px-5 gap-5">
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
          <section className="w-full flex justify-center mt-5">
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              pageCount={movies?.total_pages}
              onPageChange={handlePageChange}
              forcePage={pageNum - 1}
              containerClassName="flex item-center justify-center gap-5 py-10 mt-10 "
              activeClassName="bg-pink px-2 rounded-full"
            />
          </section>
        </ContentWrapper>
      </div>
    </>
  );
};

export default NowPlaying;
