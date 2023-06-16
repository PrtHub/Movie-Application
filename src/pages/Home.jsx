/* eslint-disable react-refresh/only-export-components */
// import SectionWrapper from "../Hoc/SectionWrapper";
import { Hero, TrendingMovie, TrendingPeople, TrendingTv } from "../container";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
        <TrendingMovie />
        <TrendingPeople />
        <TrendingTv />
      </section>
    </>
  );
};

export default Home;
