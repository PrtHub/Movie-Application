/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import CircleRating from "./CircleRating";
import LazyImg from "./LazyImg";
import poster from "../assets/poster.jpg";


const MovieCard = ({ Media }) => {
  const navigate = useNavigate();
  const formatDate = (dateStr) => {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };

  const handleClick = (e) => {
    e.preventDefault();
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
    if (Media.media_type) {
      navigate(`/${Media.media_type}/${Media.id}`);
    } else {
      navigate(`/${Media?.first_air_date ? "tv" : "movie"}/${Media.id}`);
    }
  };

  const imgUrl = Media?.poster_path ? `https://image.tmdb.org/t/p/original${Media.poster_path}` : poster

  return (
    <>
      <main className="w-36 h-full flex flex-col items-start justify-start gap-5">
        <section
          className="w-full h-56 relative cursor-pointer"
          onClick={handleClick}
        >
          <LazyImg
            src={imgUrl}
            alt="Poster"
            className="w-full h-full object-cover object-center rounded"
          />
          <CircleRating rating={Media.vote_average.toFixed(1)} />
        </section>
        <section className="flex flex-col items-start justify-start gap-1">
          <h1 className="font-semibold ">{Media.title || Media.name}</h1>
          <span className="text-gray-400">
            {formatDate(Media.release_date || Media.first_air_date)}
          </span>
        </section>
      </main>
    </>
  );
};

export default MovieCard;
