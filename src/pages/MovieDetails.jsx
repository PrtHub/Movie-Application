import ContentWrapper from "../Hoc/SectionWrapper";
import { Error } from "../components";
import {
  Cast,
  DetailsHeader,
  Recommend,
  Reviews,
  Similar,
  VideoClips,
} from "../container";

import {
  useGetMovieCraditsQuery,
  useGetMovieDetailsQuery,
  useGetMovieRecommendQuery,
  useGetMovieReviewsQuery,
  useGetMovieSimilarQuery,
  useGetMovieVideoQuery,
  useGetWatchMovieQuery,
} from "../redux/TMDB";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movie_id } = useParams();
  const {
    data: details,
    isFetching,
    error,
  } = useGetMovieDetailsQuery(movie_id);
  const { data: platforms } = useGetWatchMovieQuery(movie_id);
  const { data: credits, isFetching: castLoading } =
    useGetMovieCraditsQuery(movie_id);
  const { data: videos, isFetching: videosLoading } =
    useGetMovieVideoQuery(movie_id);
  const { data: reviews, isFetching: reviewsLoading } =
    useGetMovieReviewsQuery(movie_id);
  const { data: similars, isFetching: similarsLoading } =
    useGetMovieSimilarQuery(movie_id);
  const { data: recommends, isFetching: recommendsLoading } =
    useGetMovieRecommendQuery(movie_id);

  const skeleton = () => {
    return (
      <ContentWrapper>
        <section className="w-full h-[1200px] lg:h-[600px] relative">
          <section className="w-full h-full flex flex-col lg:flex-row justify-center items-start gap-10 p-10 absolute top-0 right-0 left-0 z-50 opacity-100 animate-pulse">
            <section className="w-[400px] h-[480px] bg-skeleton animate-pulse">
              <div className="w-full h-full object-cover object-center rounded " />
            </section>
            <section className="w-full h-full flex flex-col items-start justify-start gap-5 animate-pulse">
              <section className="w-[80%] h-full flex flex-col animate-pulse gap-2">
                <div className="w-[80%] h-4 bg-skeleton" />
                <div className="w-[70%] h-4 bg-skeleton"></div>
              </section>
              <section className="w-full h-full flex flex-col items-start gap-2 animate-pulse">
                <div className="w-[40%] h-4 bg-skeleton" />
                <div className="w-[50%] h-4 bg-skeleton" />
                <div className="w-full h-5 bg-skeleton" />
              </section>
              <section className="w-[70%] h- flex flex-col gap-4  animate-pulse">
                <div className="w-[50%] h-4 bg-skeleton" />
                <div className="w-[60%] h-4 bg-skeleton" />
                <div className="w-[65%] h-4 bg-skeleton" />
              </section>
            </section>
          </section>
        </section>
      </ContentWrapper>
    );
  };

  if (error) return <Error />;

  return (
    <>
      {!isFetching ? (
        <>
          {details && (
            <div className="w-full h-full mt-10 mb-20">
              <DetailsHeader
                details={details}
                platforms={platforms?.results?.IN}
                crew={credits?.crew}
                video={videos?.results?.[0]}
              />
              {credits?.cast && credits?.cast.length > 0 ? (
                <section className="py-10 flex flex-row gap-5 overflow-x-scroll">
                  <Cast casts={credits?.cast} loading={castLoading} />
                </section>
              ) : (
                <>
                  <ContentWrapper>No Cast Available </ContentWrapper>
                </>
              )}

              <section className="py-10 flex flex-row gap-5 overflow-x-scroll">
                <VideoClips videos={videos} loading={videosLoading} />
              </section>

              {reviews && reviews.results.length > 0 && (
                <section className="py-10 flex flex-row gap-5 overflow-x-scroll">
                  <Reviews reviews={reviews} loading={reviewsLoading} />
                </section>
              )}
              {similars && similars?.results?.length > 0 ? (
                <section className="py-10  flex flex-row gap-5 overflow-x-scroll">
                  <Similar similars={similars} loading={similarsLoading} />
                </section>
              ) : (
                <ContentWrapper>Not Available</ContentWrapper>
              )}
              {recommends && recommends?.results?.length > 0 ? (
                <section className="py-10 flex flex-row gap-5 overflow-x-scroll">
                  <Recommend
                    recommends={recommends}
                    loading={recommendsLoading}
                  />
                </section>
              ) : (
                <ContentWrapper>No Recomandation Available</ContentWrapper>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="">{skeleton()}</div>
      )}
    </>
  );
};

export default MovieDetails;
