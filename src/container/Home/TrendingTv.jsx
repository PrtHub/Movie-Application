import { useState } from "react";
import ContentWrapper from "../../Hoc/SectionWrapper";
import { Error, MovieCard, TabSwitch } from "../../components";
import { useGetTrendingTvQuery } from "../../redux/TMDB";
import TrendingSkeleton from "../../components/skeletons/TrendingSkeleton";

const TrendingTv = () => {
  const [time, setTime] = useState("day");
  const { data: TvShows, isFetching, error } = useGetTrendingTvQuery(time);

  const handleTabChange = (tab) => {
    setTime(tab);
  };

  if (error) return <Error />;

  return (
    <>
      <ContentWrapper>
        <div className="w-full h-full py-10 flex flex-col gap-10">
          <section className="w-full flex items-center gap-10">
            <h1 className="textheader">Trending Tv Shows</h1>
            <TabSwitch onTabChange={handleTabChange} />
          </section>
          {!isFetching ? (
            <main className="flex flex-row gap-5 overflow-x-scroll">
              {TvShows?.results?.map((Media) => (
                <div key={Media.id}>
                  <MovieCard Media={Media} />
                </div>
              ))}
            </main>
          ) : (
            <div className="w-full h-60 gap-2 flex flex-wrap overflow-x-scroll  overflow-y-hidden">
              <TrendingSkeleton />
            </div>
          )}
        </div>
      </ContentWrapper>
    </>
  );
};

export default TrendingTv;
