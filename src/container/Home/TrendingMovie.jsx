import { useState } from "react";
import { useGetTrendingMovieQuery } from "../../redux/TMDB";
import ContentWrapper from "../../Hoc/SectionWrapper";
import { MovieCard, TabSwitch } from "../../components";

const TrendingMovie = () => {
  const [time, setTime] = useState("day");
  const { data: Trendings, isFetching, error } = useGetTrendingMovieQuery(time);
  console.log(Trendings);

  const handleTabChange = (tab) => {
    setTime(tab)
  }

  return (
    <>
      <ContentWrapper>
        <div className="w-full h-full py-10 flex flex-col gap-10">
          <section className="w-full flex items-center gap-10">
            <h1 className="text-2xl sm:text-3xl font-semibold">Trending Movies</h1>
            <TabSwitch onTabChange={handleTabChange}/>
          </section>
          <main className="flex flex-row gap-5 overflow-x-scroll">
            {Trendings?.results?.map((Media) => (
              <div key={Media.id}>
                <MovieCard Media={Media} isFetching={isFetching} error={error}/>
              </div>
            ))}
          </main>
        </div>
      </ContentWrapper>
    </>
  );
};

export default TrendingMovie;
