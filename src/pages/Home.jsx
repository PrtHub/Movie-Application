/* eslint-disable react-refresh/only-export-components */
// import SectionWrapper from "../Hoc/SectionWrapper";
import { Hero, TrendingMovie, TrendingTv } from "../container";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
        <TrendingMovie />
        <TrendingTv/>
      </section>
    </>
  );
};


export default Home;
