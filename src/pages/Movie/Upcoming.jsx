
import { useState, useEffect } from "react";
import { Error, Loader, MovieCard } from "../../components";
import ContentWrapper from "../../Hoc/SectionWrapper";
import {
  useGetGenresDataQuery,
  useGetUpcomingMovieQuery,
} from "../../redux/TMDB";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

const Upcoming = () => {
  const [pageNum, setPageNum] = useState(1);
  const [allMovies, setAllMovies] = useState([]);
  const [genre, setGenre] = useState(null);
  const media_type = "movie"
  const {
    data: movies,
    isFetching,
    error,
  } = useGetUpcomingMovieQuery(pageNum);
  const { data: genresData } = useGetGenresDataQuery(media_type);

  useEffect(() => {
    if (movies?.results) {
      setAllMovies((prevMovies) => [...prevMovies, ...movies.results]);
    }
  }, [movies]);

  const fetchNextPage = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

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

  const isWithinDateRange = (dateStr) => {
    const currentDate = new Date()
    const date = new Date(dateStr)
    return date >= currentDate
  }

  const filteredMovies = allMovies.filter((movie) =>
    isWithinDateRange(movie.release_date)
  );

  if (error) return <Error />;
  
  return (
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
        <InfiniteScroll
          dataLength={filteredMovies.length}
          next={fetchNextPage}
          hasMore={pageNum <= (movies?.total_pages || 0)}
          loader={<Loader />}
        >
          <div className="w-full h-full flex flex-wrap items-start justify-center gap-5">
            {filteredMovies.map((media, index) => (
              <section key={`${media.id}-${index}`}>
                <MovieCard Media={media} isFetching={isFetching} />
              </section>
            ))}
          </div>
        </InfiniteScroll>
      </ContentWrapper>
    </div>
  )
}

export default Upcoming