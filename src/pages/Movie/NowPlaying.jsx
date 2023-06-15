import { useState, useEffect } from "react";
import { Error, Loader, MovieCard } from "../../components";
import ContentWrapper from "../../Hoc/SectionWrapper";
import { useGetNowPlaingMovieQuery } from "../../redux/TMDB";
import InfiniteScroll from "react-infinite-scroll-component";

const NowPlaying = () => {
  const [pageNum, setPageNum] = useState(1);
  const { data: movies, isFetching, error } = useGetNowPlaingMovieQuery(pageNum);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    if (movies?.results) {
      setAllMovies((prevMovies) => [...prevMovies, ...movies.results]);
    }
  }, [movies]);

  const fetchNextPage = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  if(error) return <Error/>

  return (
    <div className="w-full h-full py-20">
      <ContentWrapper>
        <InfiniteScroll
          dataLength={allMovies.length}
          next={fetchNextPage}
          hasMore={pageNum <= (movies?.total_pages || 0)}
          loader={<Loader/>}
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




