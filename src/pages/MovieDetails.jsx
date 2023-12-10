import ContentWrapper from "../Hoc/SectionWrapper";
import { Error, SEO } from "../components";
import { Details } from "../components/skeletons";
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

  if (error) return <Error />;

  return (
    <>
    <SEO title={`${details?.title || details?.name} - The Movie Database (TMDB)`}/>
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
                <section className="py-10 flex flex-row gap-5">
                  <Cast casts={credits?.cast} loading={castLoading} />
                </section>
              ) : (
                <>
                  <ContentWrapper>No Cast Available </ContentWrapper>
                </>
              )}

              <section className="py-10 flex flex-row gap-5">
                <VideoClips videos={videos} loading={videosLoading} />
              </section>

              {reviews && reviews.results.length > 0 && (
                <section className="py-10 flex flex-row gap-5">
                  <Reviews reviews={reviews} loading={reviewsLoading} />
                </section>
              )}
              {similars && similars?.results?.length > 0 ? (
                <section className="py-10  flex flex-row gap-5">
                  <Similar similars={similars} loading={similarsLoading} />
                </section>
              ) : (
                <ContentWrapper>Not Available</ContentWrapper>
              )}
              {recommends && recommends?.results?.length > 0 ? (
                <section className="py-10 flex flex-row gap-5">
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
        <div><Details/></div>
      )}
    </>
  );
};

export default MovieDetails;
