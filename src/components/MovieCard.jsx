/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import CircleRating from "./CircleRating";
import LazyImg from "./LazyImg";
import poster from '../assets/poster.jpg'

const MovieCard = ({ Media, isFetching, error }) => {

  const navigate = useNavigate();
    const formatDate = (dateStr) => {
        const options = { month: 'short', day: '2-digit', year: 'numeric'}
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-US', options)
    }

    

    const handleClick = (e) => {
      e.preventDefault();
      scroll.scrollToTop({
        duration: 500,
         smooth: true
       });
      if (Media.media_type) {
        navigate(`/${Media.media_type}/${Media.id}`);
      } else {
        navigate(`/${Media?.first_air_date ? 'tv' : 'movie'}/${Media.id}`);
      }
    }

    if(error) return "Something went wrong"

    const skeleton = () => {
      return (
        <main className="w-36 h-56  animate-pulse flex flex-col items-center justify-center gap-2">
        <div className="w-full h-full bg-skeleton rounded "/>
        <section className="w-full flex flex-col gap-2 ">
         <div className="w-full h-4 bg-skeleton rounded"/>
         <div className="w-[80%] h-4 bg-skeleton rounded"/>
        </section>
      </main>
      );
    };
  
  return (
    <>
      {!isFetching ? (
        <main className="w-36 h-full flex flex-col items-start justify-start gap-5">
          <section className="w-full h-56 relative cursor-pointer" onClick={handleClick}>
            <LazyImg
              src={`https://image.tmdb.org/t/p/original${Media.poster_path}` || poster}
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
        <div className="flex overflow-y-hidden px-5 gap-5">
        {skeleton()}
        {skeleton()}
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
  );
};

export default MovieCard;
