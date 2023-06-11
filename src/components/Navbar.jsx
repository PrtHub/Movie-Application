import { MdFavoriteBorder, MdOutlineSearch } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
 
  const searchQueryHandler = (e) => {
    e.preventDefault();
    if(e.key === "Enter" && query.length > 0) { 
      navigate(`/search/${query}`);
    }
  }

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleMobileCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <nav className="w-full h-full bg-black flex justify-between items-center gap-10 py-5">
        <main className="w-full max-w-7xl mx-auto flex items-center justify-between gap-10 px-10 sm:px-20">
          <section className="w-full flex items-center justify-start gap-10 sm:gap-14">
            <section className="font-bold text-2xl flex items-center gap-2">
              <BiMoviePlay className="bg-pink p-[6px] rounded-full text-4xl" />
              <Link to="/">TMDB</Link>
            </section>
            <ul className="hidden sm:flex items-center justify-center gap-5 sm:gap-10 font-semibold text-lg">
              <li
                className="relative cursor-pointer"
                onMouseOver={() => handleCategory("movies")}
              >
                <span>Movies</span>
                {selectedCategory === "movies" && (
                  <ul
                    className="bg-white w-40 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded"
                    onMouseLeave={() => setSelectedCategory(null)}
                  >
                    <Link to="/movie/nowplaying">Now Playing</Link>
                    <Link to="/movie/popular">Popular</Link>
                    <Link to="/movie/top-rated">Top Rated</Link>
                    <Link to="/movie/upcoming">Upcoming</Link>
                  </ul>
                )}
              </li>
              <li
                className="relative cursor-pointer"
                onMouseOver={() => handleCategory("tv")}
              >
                <span>Tv</span>
                {selectedCategory === "tv" && (
                  <ul
                    className="bg-white w-40 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded"
                    onMouseLeave={() => setSelectedCategory(null)}
                  >
                    <Link to="/tv/airing">Airing Today</Link>
                    <Link to="/tv/popular-tv">Popular</Link>
                    <Link to="/tv/on-air">On Tv</Link>
                    <Link to="/tv/top-tv">Top Rated</Link>
                  </ul>
                )}
              </li>
              <li
                className="relative cursor-pointer"
                onMouseOver={() => handleCategory("people")}
              >
                <span>People</span>
                {selectedCategory === "people" && (
                  <ul
                    className="bg-white w-52 h-fit text-black font-normal flex flex-col items-start justify-start gap-2 absolute top-9 z-50 py-4 px-6 rounded"
                    onMouseLeave={() => setSelectedCategory(null)}
                  >
                    <Link to="/person/popular">Popular People</Link>
                  </ul>
                )}
              </li>
            </ul>

            {/* mobile view */}
            <section className="w-full relative flex sm:hidden justify-end items-end">
              {toggle ? (
                <AiOutlineClose
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              ) : (
                <AiOutlineMenu
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => setToggle(true)}
                />
              )}
              {toggle && (
                <>
                  <ul className="w-64 h-fit absolute bg-pink top-14 -right-10 z-50 py-2 px-4 flex items-start flex-col gap-4 slide-bottom">
                    <li
                      className="w-full h-full"
                      onClick={() => handleMobileCategory("movies")}
                    >
                      <span className="font-semibold text-lg cursor-pointer ">
                        Movies
                      </span>
                      {selectedCategory === "movies" && (
                        <ul
                          className="bg-pink w-full h-fit text-white font-normal flex flex-col items-start justify-start gap-2 z-50"
                          onClick={() => setToggle(false)}
                        >
                          <Link to="/movie/nowplaying">Now Playing</Link>
                          <Link to="/movie/popular">Popular</Link>
                          <Link to="/movie/top-rated">Top Rated</Link>
                          <Link to="/movie/upcoming">Upcoming</Link>
                        </ul>
                      )}
                    </li>
                    <li
                      className="w-full h-full"
                      onClick={() => handleMobileCategory("tv")}
                    >
                      <span className="font-semibold text-lg cursor-pointer">
                        Tv Shows
                      </span>
                      {selectedCategory === "tv" && (
                        <ul
                          className="bg-pink w-full h-fit text-white font-normal flex flex-col items-start justify-start gap-2 z-50"
                          onClick={() => setToggle(false)}
                        >
                          <Link to="/tv/airing">Airing Today </Link>
                          <Link to="/tv/popular-tv">Popular</Link>
                          <Link to="/tv/on-air">On Tv</Link>
                          <Link to="/tv/top-tv">Top Rated</Link>
                        </ul>
                      )}
                    </li>
                    <Link
                      to="/person/popular"
                      className="font-semibold text-lg cursor-pointer"
                      onClick={() => setToggle(false)}
                    >
                      People
                    </Link>
                    <li className="font-semibold text-lg cursor-pointer">
                      Favorite
                    </li>
                  </ul>
                </>
              )}
            </section>
          </section>

          <section className="hidden sm:flex items-center justify-center gap-5">
            <MdFavoriteBorder className="w-6 h-6 font-semibold cursor-pointer" />
            <div className="relative hidden md:block">
              {search ? (
                <section className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search for a movie or tv show...."
                    className="px-2 py-1 rounded-3xl outline-none border-none text-gray-400 text-sm sm:text-base"
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                  />
                  <AiOutlineClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setSearch(false)}
                  />
                </section>
              ) : (
                <MdOutlineSearch
                  className="w-6 h-6 font-semibold cursor-pointer"
                  onClick={() => setSearch(true)}
                />
              )}
            </div>
          </section>
        </main>
      </nav>
    </>
  );
};

export default Navbar;
