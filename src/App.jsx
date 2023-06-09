import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { MediaDetails, Home, People, Search, PeopleDetails } from "./pages";
import { NowPlaying, Popular, TopRated, Upcoming } from "./pages/Movie";
import { AiringToday, OnAir, PopularTv, TopTv } from "./pages/Tv";

import "./App.css";

const App = () => {
  return (
    <>
      <section className="w-full mx-auto overflow-hidden">
        <main className="relative w-full">
          <section className="absolute top-0 z-50">
            <Navbar />
          </section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nowplaying" element={<NowPlaying />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/airing" element={<AiringToday />} />
            <Route path="/on-air" element={<OnAir />} />
            <Route path="/popular" element={<PopularTv />} />
            <Route path="/top-tv" element={<TopTv />} />
            <Route path="/mediaDetails/:id" element={<MediaDetails />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/people" element={<People />} />
            <Route path="/peopleDetails/:id" element={<PeopleDetails />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </>
  );
};

export default App;
