/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import LazyImg from "./LazyImg";
import cast from "../assets/avatar.png";

const PeopleCard = ({ person }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
    navigate(`/person/${person.id}`);
  };

  const imgUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/original${person.profile_path}`
    : cast;

  return (
    <>
      <main className="w-36 h-fit flex flex-col items-start justify-start gap-5">
        <section
          className="w-full h-56 relative cursor-pointer"
          onClick={handleClick}
        >
          <LazyImg
            src={imgUrl}
            alt="Poster"
            className="w-full h-full object-center object-cover rounded"
          />
          {/* <CircleRating rating={Media.vote_average.toFixed(1)}/> */}
        </section>
        <section className="flex flex-col items-start justify-start gap-1">
          <h1 className="font-semibold ">{person.name}</h1>
          <span className="text-gray-400">{person.known_for_department}</span>
        </section>
      </main>
    </>
  );
};

export default PeopleCard;
