import { useGetMediaDetailsQuery } from "../redux/TMDB";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
  const {movie_id } = useParams();
  const { data: Details, isFetching, error } = useGetMediaDetailsQuery(movie_id)
  console.log(Details)
  return (
    <div>
      {/* Render the component */}
    </div>
  );
};

export default MovieDetails;
