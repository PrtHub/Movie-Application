/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import ContentWrapper from "../../Hoc/SectionWrapper";
import { AiFillStar } from "react-icons/ai";

const Reviews = ({ reviews, loading }) => {
  const formatDate = (str) => {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const date = new Date(str);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <ContentWrapper>
      {!loading ? (
        <section className="w-full h-full flex flex-col items-start gap-10 relative">
          <h1 className="textheader">Reviews</h1>
          <main className="w-full h-full flex flex-row gap-10 overflow-x-scroll">
            {reviews?.results?.map((review) => (
              <div
                key={review.id}
                className="w-[350px] sm:w-[600px] md:w-[700px] h-full flex flex-col items-start justify-center border-[1px] border-skeleton p-4 gap-4"
              >
                <section className="w-full h-full flex flex-col items-start gap-1">
                  <h1 className="flex text-xl font-semibold gap-2">
                    A review by "{review.author}"{" "}
                    <span className="flex items-center gap-1">
                      <AiFillStar className="text-yellow-400" />
                      {review.author_details.rating}
                    </span>
                  </h1>
                  <p className="text-sm font-light">
                    Written by{" "}
                    <span className="text-sm font-semibold">
                      "{review.author}"
                    </span>{" "}
                    on <span>{formatDate(review.updated_at)}</span>
                  </p>
                </section>
                <section className="w-[300px] sm:w-[550px] md:w-[648px] h-full ">
                  <p className="text-base font-normal ">
                    {review.content.slice(0, 320)}....
                  </p>
                </section>
              </div>
            ))}
          </main>
        </section>
      ) : (
        <>
          <div className="w-full h-full overflow-hidden">Loading....</div>
        </>
      )}
    </ContentWrapper>
  );
};

export default Reviews;
