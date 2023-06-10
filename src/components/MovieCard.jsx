/* eslint-disable react/prop-types */

import { useNavigate, useParams } from "react-router-dom";
import CircleRating from "./CircleRating";
import LazyImg from "./LazyImg";

const MovieCard = ({ Trending, isFetching, error }) => {
  const { id } = useParams()
  const navigate = useNavigate();
    const formatDate = (dateStr) => {
        const options = { month: 'short', day: '2-digit', year: 'numeric'}
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-US', options)
    }

    const handleClick = (e) => {
      e.preventDefault();
      navigate(`/mediaDetails/${Trending.id}`)
    }

    if(error) return "Something went wrong"

    const skeleton = () => {
      return (
        <main className="w-40 h-full bg-[#262728] animate-pulse flex flex-col items-center justify-center">
        <div className="w-full h-full bg-[#262728]"/>
        <section className="w-full flex flex-col ">
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
              src={`https://image.tmdb.org/t/p/original${Trending.poster_path}`}
              alt="Poster"
              className="w-full h-full object-contain object-center rounded"
            />
             <CircleRating rating={Trending.vote_average.toFixed(1)}/>
          </section>
           <section className="flex flex-col items-start justify-start gap-1">
            <h1 className="font-semibold ">{Trending.title}</h1>
            <span className="text-gray-400">{formatDate(Trending.release_date)}</span>
           </section>
        </main>
      ) : (
        <>
        {skeleton()}
        </>
      )}
    </>
  );
};

export default MovieCard;
