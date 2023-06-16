/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import LazyImg from "./LazyImg";
import dummy from "../assets/poster.jpg";

const SearchCard = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
    if (result) {
      navigate(`/${result.media_type}/${result.id}`);
    } else {
      alert("No route available");
    }
  };

  const imgUrl =
    result.poster_path || result.profile_path || result.backdrop_path
      ? `https://image.tmdb.org/t/p/original${
          result.poster_path || result.profile_path || result.backdrop_path
        }`
      : dummy;

  return (
    <div className="w-36 h-full flex flex-col items-start justify-start gap-1">
      <section
        className="w-full h-56 cursor-pointer overflow-hidden rounded"
        onClick={handleClick}
      >
        <LazyImg
          src={imgUrl}
          alt="Poster"
          className="w-full h-full object-cover object-center rounded"
        />
      </section>
      <section className="flex flex-col items-start justify-start">
        <h1 className="font-semibold ">{result.title || result.name}</h1>
      </section>
    </div>
  );
};

export default SearchCard;
