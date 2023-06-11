import { useState } from "react";
import ContentWrapper from "../../Hoc/SectionWrapper"
import { MovieCard, TabSwitch } from "../../components";
import { useGetTrendingTvQuery } from "../../redux/TMDB";


const TrendingTv = () => {
    const [time, setTime] = useState("day");
    const { data: TvShows,  isFetching, error } = useGetTrendingTvQuery(time)

    const handleTabChange = (tab) => {
      setTime(tab)
      }
  return (
    <>
     <ContentWrapper>
        <div className="w-full h-full py-10 flex flex-col gap-10">
          <section className="w-full flex items-center gap-10">
            <h1 className="text-2xl sm:text-3xl font-semibold">Trending Tv Shows</h1>
            <TabSwitch onTabChange={handleTabChange}/>
          </section>
          <main className="flex flex-row gap-5 overflow-x-scroll">
            {TvShows?.results?.map((Media) => (
              <div key={Media.id}>
                <MovieCard Media={Media} isFetching={isFetching} error={error}/>
              </div>
            ))}
          </main>
        </div>
      </ContentWrapper>
    </>
  )
}

export default TrendingTv
