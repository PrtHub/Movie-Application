/* eslint-disable react/prop-types */
import ContentWrapper from "../../Hoc/SectionWrapper";
import { MovieCard } from "../../components";

const Similar = ({ similars, loading }) => {
  return (
    <ContentWrapper>
      <div className="w-full h-full flex flex-col gap-10">
        <section className="w-full flex items-center gap-10">
          <h1 className="textheader">Similar</h1>
        </section>
        <main className="flex flex-row gap-5 overflow-x-scroll">
          {similars?.results?.map((Media) => (
            <div key={Media.id}>
              <MovieCard Media={Media} isFetching={loading} />
            </div>
          ))}
        </main>
      </div>
    </ContentWrapper>
  );
};

export default Similar;
