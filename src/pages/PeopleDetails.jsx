import { useParams } from "react-router-dom";
import {
  useGetKnownForDetailsQuery,
  useGetPeopleDetailsQuery,
} from "../redux/TMDB";
import ContentWrapper from "../Hoc/SectionWrapper";
import { LazyImg, SEO } from "../components";
import { useState } from "react";
import { KnownFor } from "../container";
import PeopleDetailsSkeleton from "../components/skeletons/PeopleDetailsSkeleton";

const PeopleDetails = () => {
  const { person_id } = useParams();
  const { data: people, isFetching } = useGetPeopleDetailsQuery(person_id);
  const { data: movies, isLoading } = useGetKnownForDetailsQuery(person_id);

  const [show, setShow] = useState(false);
  const biography = show
    ? people?.biography
    : `${people?.biography.slice(0, 1300)}...`;

  if (isFetching) return <PeopleDetailsSkeleton />;

  return (
    <>
      <SEO title={`${people?.name} - The Movie Database (TMDB)`} />
      <ContentWrapper>
        <div className="w-full h-full max-w-7xl mx-auto mt-10 mb-20">
          <main className="w-full h-full flex flex-col lg:flex-row justify-center items-start gap-10 py-10 z-40  mt-10 mb-20">
            <section className="w-[320px] sm:w-[400px] h-[450px] sm:h-[550px] lg:h-[480px]">
              <LazyImg
                src={`https://image.tmdb.org/t/p/original${
                  people && people?.profile_path
                }`}
                className="w-full h-full object-cover object-center rounded"
              />
            </section>
            <section className="w-[80%] h-full flex flex-col items-start justify-start gap-5 mr-5 lg:mr-0">
              <section className="w-full h-full flex flex-col gap-1">
                <h1 className="text-5xl font-bold capitalize">
                  {people && people?.name}
                </h1>
                <p className="font-medium text-lg ">
                  {people && people?.known_for_department}
                </p>
              </section>
              <article className="w-full flex flex-col items-start gap-2 pr-10">
                <h1 className="textheader">Biography</h1>
                <p className="w-full max-w-7xl text-base font-normal ">
                  {people && biography}
                </p>
                {!show ? (
                  <span
                    className="cursor-pointer text-lg font-semibold"
                    onClick={() => setShow(true)}
                  >
                    Show more
                  </span>
                ) : (
                  <span
                    className="cursor-pointer text-lg font-semibold"
                    onClick={() => setShow(false)}
                  >
                    Show less
                  </span>
                )}
              </article>
            </section>
          </main>
          {movies?.cast && (
            <div className="w-full h-full flex flex-col gap-10">
              <section className="w-full flex items-center gap-10">
                <h1 className="textheader">Known For</h1>
              </section>
              <section className="flex flex-row gap-5 overflow-x-scroll">
                {movies?.cast?.map((movie) => (
                  <section key={movie.id}>
                    <KnownFor movie={movie} isLoading={isLoading} />
                  </section>
                ))}
              </section>
            </div>
          )}
        </div>
      </ContentWrapper>
    </>
  );
};

export default PeopleDetails;
