/* eslint-disable react/prop-types */
import ContentWrapper from "../../Hoc/SectionWrapper";
import { MovieCard } from "../../components";

const Recommend = ({ recommends, loading }) => {
  return (
    <ContentWrapper>
      <div className="w-full h-full flex flex-col gap-10">
        <section className="w-full flex items-center gap-10">
          <h1 className="textheader">
            Recommendations
          </h1>
        </section>
        <main className="flex flex-row gap-5 overflow-x-scroll">
          {recommends?.results?.map((Media) => (
            <div key={Media.id}>
              <MovieCard Media={Media} isFetching={loading} />
            </div>
          ))}
        </main>
      </div>
    </ContentWrapper>
  );
};

export default Recommend;
