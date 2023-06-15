import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Error, Loader, PeopleCard } from "../components";
import ContentWrapper from "../Hoc/SectionWrapper";
import { useGetPopularPeopleQuery } from "../redux/TMDB";

const People = () => {
  const [pageNum, setPageNum] = useState(1);
  const [allShows, setAllShows] = useState([]);
  const { data: people, isFetching, error } = useGetPopularPeopleQuery(pageNum);

  useEffect(() => {
    if (people?.results) {
      setAllShows((prevShows) => [...prevShows, ...people.results]);
    }
  }, [people]);

  const fetchNextPage = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  if (error) return <Error />;

  return (
    <div className="w-full h-full py-10">
      <ContentWrapper>
        <InfiniteScroll
          dataLength={allShows.length}
          next={fetchNextPage}
          hasMore={pageNum <= (people?.total_pages || 0)}
          loader={<Loader />}
        >
          <div className="w-full h-full flex flex-wrap items-start justify-center gap-5">
            {allShows.map((person, index) => (
              <section key={`${person.id}-${index}`}>
                <PeopleCard person={person} isFetching={isFetching} />
              </section>
            ))}
          </div>
        </InfiniteScroll>
      </ContentWrapper>
    </div>
  );
};

export default People;
