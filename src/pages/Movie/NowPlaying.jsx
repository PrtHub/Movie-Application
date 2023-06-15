import { useState, useEffect } from "react";
import { Error, Loader, MovieCard } from "../../components";
import ContentWrapper from "../../Hoc/SectionWrapper";
import {
  useGetGenresDataQuery,
  useGetNowPlaingMovieQuery,
} from "../../redux/TMDB";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from 'react-select';



const NowPlaying = () => {
  const [pageNum, setPageNum] = useState(1);
  const [allMovies, setAllMovies] = useState([]);
  const [genre, setGenre] = useState(null)
  const [media_type, setMedia_type] = useState("movie");
  const {
    data: movies,
    isFetching,
    error,
  } = useGetNowPlaingMovieQuery(pageNum);
  const { data: genresData } = useGetGenresDataQuery(media_type);

  console.log(genresData);

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
  
    // Filter movies based on selected genres
    const selectedGenreIds = selectedOptions.map((option) => option.id);
    
    // Check if any genre is selected
    if (selectedGenreIds.length === 0) {
      // Show all movies when no genre is selected
      setAllMovies(movies?.results);
    } else {
      // Filter movies when genres are selected
      const filteredMovies = movies?.results.filter((movie) =>
        movie.genre_ids.some((genreId) => selectedGenreIds.includes(genreId))
      );
      setAllMovies(filteredMovies);
    }
  };

  // Reset pageNum to 1 when genre is cleared
  useEffect(() => {
    if (!genre || genre.length === 0) {
      setPageNum(1);
    }
  }, [genre]);
  

  if (error) return <Error />;

  return (
    <div className="w-full h-full py-20">
      <ContentWrapper>
        <section className="w-full h-full flex items-center justify-end mb-10 px-20">
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
            className="w-[300px] text-black"
          />
        </section>
        <InfiniteScroll
          dataLength={allMovies.length}
          next={fetchNextPage}
          hasMore={pageNum <= (movies?.total_pages || 0)}
          loader={<Loader />}
        >
          <div className="w-full h-full flex flex-wrap items-start justify-center gap-5">
            {allMovies.map((media, index) => (
              <section key={`${media.id}-${index}`}>
                <MovieCard Media={media} isFetching={isFetching} />
              </section>
            ))}
          </div>
        </InfiniteScroll>
      </ContentWrapper>
    </div>
  );
};

export default NowPlaying;
