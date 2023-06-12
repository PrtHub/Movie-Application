import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, People, Search, PeopleDetails, MovieDetails, TvDetails } from "./pages";
import { NowPlaying, Popular, TopRated, Upcoming } from "./pages/Movie";
import { AiringToday, OnAir, PopularTv, TopTv } from "./pages/Tv";

import "./App.css";

const App = () => {

  return (
    <>
      <section className="w-full mx-auto overflow-hidden bg-black">
            <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/nowplaying" element={<NowPlaying />} />
            <Route path="/movie/popular" element={<Popular />} />
            <Route path="/movie/top-rated" element={<TopRated />} />
            <Route path="/movie/upcoming" element={<Upcoming />} />
            <Route path="/tv/airing" element={<AiringToday />} />
            <Route path="/tv/on-air" element={<OnAir />} />
            <Route path="/tv/popular-tv" element={<PopularTv />} />
            <Route path="/tv/top-tv" element={<TopTv />} />
            <Route path="/movie/:movie_id" element={<MovieDetails />} />
            <Route path="/tv/:tv_id" element={<TvDetails />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/person/popular" element={<People />} />
            <Route path="/:people/:id" element={<PeopleDetails />} />
          </Routes>
        <Footer />
      </section>
    </>
  );
};

export default App;
