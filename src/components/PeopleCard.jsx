/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { animateScroll as scroll } from 'react-scroll';
import LazyImg from "./LazyImg"
import cast from '../assets/cast.jpg'


const PeopleCard = ({person, isFetching, error}) => {
     const navigate = useNavigate();
    const handleClick  = (e) => {
      e.preventDefault();
      scroll.scrollToTop({
        duration: 500,
         smooth: true
       });
      navigate(`/person/${person.id}`)
    }

    if(error) return "Something went wrong"

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

  return (
    <>
     {!isFetching ? (
        <main className="w-40 h-fit flex flex-col items-start justify-start gap-5">
          <section className="w-full h-60 relative cursor-pointer" onClick={handleClick}>
            <LazyImg
              src={`https://image.tmdb.org/t/p/original${person.profile_path}` || cast}
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
    </>
  )
}

export default PeopleCard