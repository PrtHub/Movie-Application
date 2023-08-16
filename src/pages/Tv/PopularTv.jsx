import { useState, useEffect } from "react";
import { Error, Loader, MovieCard, SEO } from "../../components";
import ContentWrapper from "../../Hoc/SectionWrapper";
import { useGetGenresDataQuery, useGetTvPopularQuery } from "../../redux/TMDB";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

const PopularTV = () => {
  const [pageNum, setPageNum] = useState(1);
  const [allShows, setAllShows] = useState([]);
  const [genre, setGenre] = useState(null);
  const media_type = "tv";
  const { data: shows, isFetching, error } = useGetTvPopularQuery(pageNum);
  const { data: genresData } = useGetGenresDataQuery(media_type);

  useEffect(() => {
    if (shows?.results) {
      setAllShows((prevShows) => [...prevShows, ...shows.results]);
    }
  }, [shows]);

  const fetchNextPage = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  const onChange = (selectedOptions) => {
    setGenre(selectedOptions);

    const selectedGenreIds = selectedOptions.map((option) => option.id);

    if (selectedGenreIds.length === 0) {
      //
      setAllShows(shows?.results);
    } else {
      const filteredShows = shows?.results.filter((show) =>
        show.genre_ids.some((genreId) => selectedGenreIds.includes(genreId))
      );
      setAllShows(filteredShows);
    }
  };

  useEffect(() => {
    if (!genre || genre.length === 0) {
      setPageNum(1);
    }
  }, [genre]);

  const skeleton = () => {
    return (
      <main className="w-40 h-60  animate-pulse flex flex-col items-center justify-center gap-2">
        <div className="w-full h-full bg-skeleton rounded " />
        <section className="w-full flex flex-col gap-2 ">
          <div className="w-full h-4 bg-skeleton rounded" />
          <div className="w-[80%] h-4 bg-skeleton rounded" />
        </section>
      </main>
    );
  };

  if (error) return <Error />;

  return (
    <>
    <SEO title="Popular Tv Shows - The Movie Database (TMDB)"/>
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
          dataLength={allShows.length}
          next={fetchNextPage}
          hasMore={pageNum <= (shows?.total_pages || 0)}
          loader={<Loader />}
        >
          {!isFetching ? (
            <div className="w-full h-full flex flex-wrap items-start justify-center gap-5">
              {allShows.map((media, index) => (
                <section key={`${media.id}-${index}`}>
                  <MovieCard Media={media} />
                </section>
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex flex-wrap justify-center overflow-x-hidden px-5 gap-5">
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
        </InfiniteScroll>
      </ContentWrapper>
    </div>
    </>
  );
};

export default PopularTV;
