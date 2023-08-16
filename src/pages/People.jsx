import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Error, Loader, PeopleCard, SEO } from "../components";
import ContentWrapper from "../Hoc/SectionWrapper";
import { useGetPopularPeopleQuery } from "../redux/TMDB";

const People = () => {
  const [pageNum, setPageNum] = useState(1);
  const [allPeople, setAllPeople] = useState([]);
  const { data: people, isFetching, error } = useGetPopularPeopleQuery(pageNum);

  useEffect(() => {
    if (people?.results) {
      setAllPeople((prevShows) => [...prevShows, ...people.results]);
    }
  }, [people]);

  const fetchNextPage = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

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
    <SEO title={` Popular People - The Movie Database (TMDB)`}/>
    <div className="w-full h-full py-10">
      <ContentWrapper>
        <InfiniteScroll
          dataLength={allPeople.length}
          next={fetchNextPage}
          hasMore={pageNum <= (people?.total_pages || 0)}
          loader={<Loader />}
        >
          {!isFetching ? (
            <div className="w-full h-full flex flex-wrap items-start justify-center gap-5">
              {allPeople.map((person, index) => (
                <section key={`${person.id}-${index}`}>
                  <PeopleCard person={person} />
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

export default People;
