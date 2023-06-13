import { DetailsHeader, LazyImg } from "../components";
import { useGetMovieDetailsQuery } from "../redux/TMDB";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
  const {movie_id } = useParams();
  const { data: details, isFetching, error } = useGetMovieDetailsQuery(movie_id)
  console.log(details?.poster_path)

  const backdrop_path = details?.backdrop_path
  
  
  return (
    <>
    {details && (
     <div className="w-full h-full mt-10 mb-20">
      <section className="w-full h-[600px] relative">
      <div className="w-full h-full bg-black bg-opacity-70 absolute z-0" />
        <div className="w-full h-full">
       <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} 
       alt="backdrop_img" 
       className="w-full h-full object-cover object-center "/>
        </div>
       <div className="lower-layer -mb-2"></div>
       <DetailsHeader details={details}/>
      </section>
     </div> 
    )}   
    </>
  );
};

export default MovieDetails;
