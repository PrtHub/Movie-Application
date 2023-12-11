import { useState } from "react";
import { useGetTrendingMovieQuery } from "../../redux/TMDB";
import ContentWrapper from "../../Hoc/SectionWrapper";
import { Error, MovieCard, TabSwitch } from "../../components";
import TrendingSkeleton from "../../components/skeletons/TrendingSkeleton";

const TrendingMovie = () => {
  const [time, setTime] = useState("day");
  const { data: Trendings, isFetching, error } = useGetTrendingMovieQuery(time);
  console.log(Trendings);

  const handleTabChange = (tab) => {
    setTime(tab);
  };

  if (error) return <Error />;

  return (
    <>
      <ContentWrapper>
        <div className="w-full h-full py-10 flex flex-col gap-10">
          <section className="w-full flex items-center gap-10">
            <h1 className="textheader">Trending Movies</h1>
            <TabSwitch onTabChange={handleTabChange} />
          </section>
          {!isFetching ? (
            <main className="flex flex-row gap-5 overflow-x-scroll">
              {Trendings?.results?.map((Media) => (
                <div key={Media.id}>
                  <MovieCard Media={Media} />
                </div>
              ))}
            </main>
          ) : (
            <div className="w-full h-60 gap-2 flex flex-wrap overflow-y-hidden overflow-x-scroll">
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
              <TrendingSkeleton/>
            </div>
          )}
        </div>
      </ContentWrapper>
    </>
  );
};

export default TrendingMovie;
