/* eslint-disable react-refresh/only-export-components */
import SectionWrapper from "../Hoc/SectionWrapper";
import { Hero, Trending } from "../container";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
        <Trending />
      </section>
    </>
  );
};


export default SectionWrapper(Home);
