import { MdFavoriteBorder, MdOutlineSearch } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [open, setOpen] = useState(false)

  const handleCategory = (category) =>{
    setSelectedCategory(category);
  }
  return (
    <>
      <nav className="w-full h-full bg-pink flex justify-between items-center gap-10 py-5">
        <main className="w-full max-w-7xl mx-auto flex items-center justify-between gap-10 px-10 sm:px-20">
          <section className="flex items-center justify-center gap-10 sm:gap-14">
            <section className="font-bold text-2xl flex items-center gap-2">
              <BiMoviePlay />
             <Link to='/'>TMDB</Link>
            </section>
            <ul className="flex items-center justify-center gap-5 sm:gap-10 font-semibold text-lg">
              <li
                className="relative cursor-pointer"
                onMouseOver={() =>handleCategory('movies')}
              >
                <span>Movies</span>
                {selectedCategory === "movies" && (
                  <ul className="bg-white w-40 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded" onMouseLeave={() => setSelectedCategory(false)}>
                    <Link to='/movie/nowplaying'>Now Playing</Link>
                    <Link to='/movie/popular'>Popular</Link>
                    <Link to='/movie/top-rated'>Top Rated</Link>
                    <Link to='/movie/upcoming'>Upcoming</Link>
                  </ul>
                )}
              </li>
              <li
                className="relative cursor-pointer"
                onMouseOver={() => handleCategory('tv')}
              >
                <span>Tv</span>
                {selectedCategory === "tv" && (
                  <ul className="bg-white w-40 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded" onMouseLeave={() => setSelectedCategory(false)}>
                    <Link to='/tv/airing'>Airing Today</Link>
                    <Link to='/tv/popular-tv'>Popular</Link>
                    <Link to='/tv/on-air'>On Tv</Link>
                    <Link to='/tv/top-tv'>Top Rated</Link>
                  </ul>
                )}
              </li>
              <li
                className="relative cursor-pointer"
                onMouseOver={() => handleCategory('people')}
              >
                <span>People</span>
                {selectedCategory === "people" && (
                  <ul className="bg-white w-52 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded" onMouseLeave={() => setSelectedCategory(false)}>        
                    <Link to='/person/popular'>Popular People</Link>        
                  </ul>
                )}
              </li>
            </ul>
          </section>
          <section className="hidden sm:flex items-center justify-center gap-5">
            <MdFavoriteBorder className="w-6 h-6 font-semibold cursor-pointer" />
            <MdOutlineSearch className="w-6 h-6 font-semibold cursor-pointer" />
          </section>
        </main>
      </nav>
    </>
  );
};

export default Navbar;
