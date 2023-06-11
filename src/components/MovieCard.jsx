/* eslint-disable react/prop-types */

import { useNavigate, useParams } from "react-router-dom";
import CircleRating from "./CircleRating";
import LazyImg from "./LazyImg";

const MovieCard = ({ Media, isFetching, error }) => {
  const { id } = useParams()
  const navigate = useNavigate();
    const formatDate = (dateStr) => {
        const options = { month: 'short', day: '2-digit', year: 'numeric'}
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-US', options)
    }

    const handleClick = (e) => {
      e.preventDefault();
      navigate(`/mediaDetails/${Media.id}`)
    }

    if(error) return "Something went wrong"

    const skeleton = () => {
      return (
        <main className="w-40 h-52 bg-[#262728] animate-pulse flex flex-col items-center justify-center gap-2">
        <div className="w-full h-full bg-[#262728]"/>
        <section className="w-full flex flex-col gap-2 ">
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
              src={`https://image.tmdb.org/t/p/original${Media.poster_path}`}
              alt="Poster"
              className="w-full h-full object-contain object-center rounded"
            />
             <CircleRating rating={Media.vote_average.toFixed(1)}/>
          </section>
           <section className="flex flex-col items-start justify-start gap-1">
            <h1 className="font-semibold ">{Media.title || Media.name}</h1>
            <span className="text-gray-400">{formatDate(Media.release_date || Media.first_air_date)}</span>
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
