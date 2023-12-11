import { Error, SEO } from "../components";
import TvDetailsSkeleton from "../components/skeletons/TvDetailsSkeleton";
import {
  Cast,
  DetailsHeader,
  Recommend,
  Reviews,
  Similar,
  VideoClips,
} from "../container";
import {
  useGetTvCraditsQuery,
  useGetTvDetailsQuery,
  useGetTvRecommendQuery,
  useGetTvReviewsQuery,
  useGetTvSimilarQuery,
  useGetTvVideoQuery,
  useGetWatchTvQuery,
} from "../redux/TMDB";
import { useParams } from "react-router-dom";

const TvDetails = () => {
  const { tv_id } = useParams();
  const { data: details, isFetching, error } = useGetTvDetailsQuery(tv_id);
  const { data: platforms } = useGetWatchTvQuery(tv_id);
  const { data: credits, isFetching: castLoading } =
    useGetTvCraditsQuery(tv_id);
  const { data: videos, isFetching: videosLoading } = useGetTvVideoQuery(tv_id);
  const { data: reviews, isFetching: reviewsLoading } =
    useGetTvReviewsQuery(tv_id);
  const { data: similars, isFetching: similarsLoading } =
    useGetTvSimilarQuery(tv_id);
  const { data: recommends, isFetching: recommendsLoading } =
    useGetTvRecommendQuery(tv_id);

  if (error) return <Error />;
  if (isFetching) return <TvDetailsSkeleton />;

  return (
    <>
      <SEO
        title={`${details?.name || details?.title} - The Movie Database (TMDB)`}
      />
      {details && (
        <div className="w-full h-full mt-10 mb-20">
          <DetailsHeader
            details={details}
            platforms={platforms?.results?.IN}
            crew={credits?.crew}
            video={videos?.results?.[0]}
          />
          {credits?.cast && credits?.cast.length > 0 && (
            <section className="py-10 flex flex-row gap-5">
              <Cast casts={credits?.cast} loading={castLoading} />
            </section>
          )}
          {videos && videos.length > 0 && (
            <section className="py-10 flex flex-row gap-5">
              <VideoClips videos={videos} loading={videosLoading} />
            </section>
          )}
          {reviews && reviews.results.length > 0 && (
            <section className="py-10 flex flex-row gap-5">
              <Reviews reviews={reviews} loading={reviewsLoading} />
            </section>
          )}
          {similars && similars?.results?.length > 0 && (
            <section className="py-10  flex flex-row gap-5">
              <Similar similars={similars} loading={similarsLoading} />
            </section>
          )}
          {recommends && recommends?.results?.length > 0 && (
            <section className="py-10 flex flex-row gap-5">
              <Recommend recommends={recommends} loading={recommendsLoading} />
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default TvDetails;
