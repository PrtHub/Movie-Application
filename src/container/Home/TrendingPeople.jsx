import { useState } from "react";
import ContentWrapper from "../../Hoc/SectionWrapper";
import { Error, PeopleCard, TabSwitch } from "../../components";
import { useGetTrendingPeopleQuery } from "../../redux/TMDB";
import TrendingSkeleton from "../../components/skeletons/TrendingSkeleton";

const TrendingPeople = () => {
  const [time, setTime] = useState("day");
  const { data: people, isFetching, error } = useGetTrendingPeopleQuery(time);

  const handleTabChange = (tab) => {
    setTime(tab);
  };


  if (error) return <Error />;

  return (
    <>
      <ContentWrapper>
        <div className="w-full h-full py-10 flex flex-col gap-10">
          <section className="w-full flex items-center gap-10">
            <h1 className="textheader">
              Trending People
            </h1>
            <TabSwitch onTabChange={handleTabChange} />
          </section>
          {!isFetching ? (
            <main className="flex flex-row gap-5 overflow-x-scroll">
              {people?.results?.map((person) => (
                <div key={person.id}>
                  <PeopleCard person={person} />
                </div>
              ))}
            </main>
          ) : (
            <div className="w-full h-60 gap-2 flex flex-wrap overflow-x-scroll  overflow-y-hidden">
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

export default TrendingPeople;
