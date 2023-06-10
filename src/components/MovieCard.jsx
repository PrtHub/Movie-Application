/* eslint-disable react/prop-types */

import CircleRating from "./CircleRating";
import LazyImg from "./LazyImg";

const MovieCard = ({ Trending, isFetching, error }) => {

    const formatDate = (dateStr) => {
        const options = { month: 'short', day: '2-digit', year: 'numeric'}
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-US', options)
    }

    if(error) return "Something went wrong"

  return (
    <>
      {!isFetching ? (
        <main className="w-40 h-fit flex flex-col items-start justify-start gap-5">
          <section className="w-full h-full relative">
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
        <>Loading</>
      )}
    </>
  );
};

export default MovieCard;
