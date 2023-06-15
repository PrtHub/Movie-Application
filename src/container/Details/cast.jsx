/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../Hoc/SectionWrapper";
import avatar from "../../assets/cast.jpg";
import { LazyImg } from "../../components";

const Cast = ({ casts, loading }) => {
  const navigate = useNavigate();
  console.log(casts);

  const skeleton = () => {
    return (
      <>
        <div className="w-full  h-full flex flex-col gap-2">
          <section className="w-32 h-32 rounded-full overflow-hidden bg-skeleton animate-pulse">
            <div className="w-full h-full bg-skeleton" />
          </section>
          <section className="w-full h-full flex flex-col gap-1">
            <div className="w-full h-4 bg-skeleton"></div>
            <div className="w-full h-4 bg-skeleton"></div>
          </section>
        </div>
      </>
    );
  };

  return (
    <>
      <ContentWrapper>
        {!loading ? (
          <section className="w-full h-full flex flex-col items-start gap-10">
            <h1 className="text-2xl sm:text-3xl font-semibold">Top Cast</h1>
            <main className="w-full h-full flex flex-row gap-5 overflow-x-scroll">
              {casts?.map((cast) => {
                let imgUrl = cast.profile_path ? cast.profile_path : avatar;
                return (
                  <div
                    key={cast.id}
                    className="w-full h-full flex flex-col items-center justify-center gap-2"
                  >
                    <section
                      className="w-32 h-32 rounded-full overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                        navigate(`/person/${cast.id}`);
                      }}
                    >
                      <LazyImg
                        src={`https://image.tmdb.org/t/p/original${imgUrl}`}
                        className="w-full h-full rounded-full object-cover object-center"
                      />
                    </section>
                    <section className="w-full h-full flex flex-col justify-center items-center gap-1">
                      <p className="text-center font-semibold ">{cast.name}</p>
                      <p className="text-center font-normal text-sm">
                        {cast.character}
                      </p>
                    </section>
                  </div>
                );
              })}
            </main>
          </section>
        ) : (
          <>
            <div className="w-full h-full overflow-hidden">
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
            </div>
          </>
        )}
      </ContentWrapper>
    </>
  );
};

export default Cast;
