import { useState } from "react"
import ContentWrapper from "../../Hoc/SectionWrapper"
import { Error, PeopleCard, TabSwitch } from "../../components"
import { useGetTrendingPeopleQuery } from "../../redux/TMDB"



const TrendingPeople = () => {
    const  [time, setTime] = useState('day')
    const {data: people, isFetching, error} = useGetTrendingPeopleQuery(time)

    const handleTabChange = (tab) => {
        setTime(tab)
    }

    const skeleton = () => {
      return (
        <main className="w-40 h-60 animate-pulse flex flex-col items-center justify-center gap-2">
        <div className="w-full h-full bg-[#262728] rounded"/>
        <section className="w-full flex flex-col gap-2">
         <div className="w-full h-4 bg-skeleton rounded"/>
         <div className="w-[80%] h-4 bg-skeleton rounded"/>
        </section>
      </main>
      );
    };

    if (error) return <Error />;

  return (
    <>
     <ContentWrapper>
        <div className="w-full h-full py-10 flex flex-col gap-10">
          <section className="w-full flex items-center gap-10">
            <h1 className="text-2xl sm:text-3xl font-semibold">Trending People</h1>
            <TabSwitch onTabChange={handleTabChange}/>
          </section>
         {!isFetching ? ( <main className="flex flex-row gap-5 overflow-x-scroll">
            {people?.results?.map((person) => (
              <div key={person.id}>
                <PeopleCard person={person}/>
              </div>
            ))}
          </main>) : (
             <div className="flex overflow-y-hidden px-5 gap-5">
             {skeleton()}
             {skeleton()}
             {skeleton()}
             {skeleton()}
             {skeleton()}
             {skeleton()}
             {skeleton()}
             </div>
          )}
        </div>
      </ContentWrapper>
    </>
  )
}

export default TrendingPeople