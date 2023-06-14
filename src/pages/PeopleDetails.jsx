import { useParams } from "react-router-dom";
import { useGetPeopleDetailsQuery } from "../redux/TMDB";
import ContentWrapper from "../Hoc/SectionWrapper";
import { LazyImg } from "../components";
import { useState } from "react";

const PeopleDetails = () => {
  const { person_id } = useParams();
  const { data: people, isFetching } = useGetPeopleDetailsQuery(person_id);
  console.log(people);

  const [show, setShow] = useState(false);
  const biography = show
    ? people.biography
    : `${people.biography.slice(0, 1300)}...`;

  return (
    <>
      {!isFetching ? (
        <ContentWrapper>
          <main className=" w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-10 py-10 z-40  mt-10 mb-20">
            <section className="w-[320px] sm:w-[400px] h-[450px] sm:h-[550px] lg:h-[480px]">
              <LazyImg
                src={`https://image.tmdb.org/t/p/original${people?.profile_path}`}
                className="w-full h-full object-cover object-center rounded"
              />
            </section>
            <section className="w-[80%] h-full flex flex-col items-start justify-start gap-5 mr-5 lg:mr-0">
              <section className="w-full h-full flex flex-col gap-1">
                <h1 className="text-5xl font-bold capitalize">
                  {people?.name}
                </h1>
                <p className="font-medium text-lg ">
                  {people?.known_for_department}
                </p>
              </section>
              <article className="w-full flex flex-col items-start gap-2 pr-10">
                <h1 className="text-3xl font-semibold">Biography</h1>
                <p className="w-full max-w-7xl text-base font-normal ">
                  {biography}
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
        </ContentWrapper>
      ) : (
        <>loading...</>
      )}
    </>
  );
};

export default PeopleDetails;
