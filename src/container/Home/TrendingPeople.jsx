import { useState } from "react"
import ContentWrapper from "../../Hoc/SectionWrapper"
import { PeopleCard, TabSwitch } from "../../components"
import { useGetTrendingPeopleQuery } from "../../redux/TMDB"



const TrendingPeople = () => {
    const  [time, setTime] = useState('day')
    const {data: people, isFetching, error} = useGetTrendingPeopleQuery(time)

    const handleTabChange = (tab) => {
        setTime(tab)
    }

  return (
    <>
     <ContentWrapper>
        <div className="w-full h-full py-10 flex flex-col gap-10">
          <section className="w-full flex items-center gap-10">
            <h1 className="text-2xl sm:text-3xl font-semibold">Trending People</h1>
            <TabSwitch onTabChange={handleTabChange}/>
          </section>
          <main className="flex flex-row gap-10 overflow-x-scroll">
            {people?.results?.map((person) => (
              <div key={person.id}>
                <PeopleCard person={person} isFetching={isFetching} error={error}/>
              </div>
            ))}
          </main>
        </div>
      </ContentWrapper>
    </>
  )
}

export default TrendingPeople