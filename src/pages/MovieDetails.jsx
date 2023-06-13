import { DetailsHeader, LazyImg } from "../components";
import { useGetMovieCraditsQuery, useGetMovieDetailsQuery, useGetWatchMovieQuery } from "../redux/TMDB";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
  const {movie_id } = useParams();
  const { data: details, isFetching, error } = useGetMovieDetailsQuery(movie_id)
  const { data: platforms} = useGetWatchMovieQuery(movie_id)
  const { data: credits} = useGetMovieCraditsQuery(movie_id)

  const backdrop_path = details?.backdrop_path
  
  
  return (
    <>
    {details && (
     <div className="w-full h-full mt-10 mb-20">
      <section className="w-full h-[600px] relative">
      <div className="w-full h-full bg-[#00008080] bg-opacity-80 absolute z-0" />
        <div className="w-full h-full">
       <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} 
       alt="backdrop_img" 
       className="w-full h-full object-cover object-center  "/>
        </div>
       <div className="lower-layer -mb-2"></div>
       <DetailsHeader details={details} platforms={platforms?.results?.IN} crew={credits?.crew}/>
      </section>
     </div> 
    )}   
    </>
  );
};

export default MovieDetails;
