import LazyImg from "./LazyImg"


const PeopleCard = ({person, isFetching, error}) => {

    const handleClick  = () => {

    }

    const skeleton = () => {
        return (
          <main className="w-40 h-52 bg-[#262728] animate-pulse flex flex-col items-center justify-center gap-2">
          <div className="w-full h-full bg-[#262728]"/>
          <section className="w-full flex flex-col gap-2">
           <div className="w-full h-4"/>
           <div className="w-[80%] h-4"/>
          </section>
        </main>
        );
      };

  return (
    <>
     {!isFetching ? (
        <main className="w-40 h-fit flex flex-col items-start justify-start gap-5">
          <section className="w-full h-full relative cursor-pointer" onClick={handleClick}>
            <LazyImg
              src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
              alt="Poster"
              className="w-full h-full object-contain object-center rounded"
            />
             {/* <CircleRating rating={Media.vote_average.toFixed(1)}/> */}
          </section>
           <section className="flex flex-col items-start justify-start gap-1">
            <h1 className="font-semibold ">{person.name}</h1>
            <span className="text-gray-400">{person.known_for_department}</span>
           </section>
        </main>
      ) : (
        <>
        {skeleton()}
        </>
      )}
    </>
  )
}

export default PeopleCard