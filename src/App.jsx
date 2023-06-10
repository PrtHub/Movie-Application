import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { MediaDetails, Home, People, Search, PeopleDetails } from "./pages";
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
            <Route path="/mediaDetails/:id" element={<MediaDetails />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/person/popular" element={<People />} />
            <Route path="/peopleDetails/:id" element={<PeopleDetails />} />
          </Routes>
        <Footer />
      </section>
    </>
  );
};

export default App;
