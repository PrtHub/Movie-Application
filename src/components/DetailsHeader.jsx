/* eslint-disable react/prop-types */
import ContentWrapper from "../Hoc/SectionWrapper";
import LazyImg from "./LazyImg";

const DetailsHeader = ({ details }) => {
  const formatDate = (dateStr) => {
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };
  const formatYear = (yearStr) => {
    const date = new Date(yearStr);
    const year = date.getFullYear();
    return year;
  };

  const formatTime = (totalTime) => {
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const genres = details?.genres?.map((genre) => genre.name);

  return (
    <>
      <ContentWrapper>
        <main className="w-full h-full flex justify-center items-start gap-10 p-10 absolute top-0 right-0 left-0 z-50 opacity-100">
          <section className="w-96 h-[480px]">
            <LazyImg
              src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
              className="w-full h-full object-cover object-center rounded"
            />
          </section>
          <section className="w-full h-full flex flex-col items-start justify-start">
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold capitalize">
                {details?.title}({formatYear(details?.release_date)})
              </h1>
              <ul className="flex items-center gap-2">
                <li className="font-medium text-base">
                  {formatDate(details?.release_date)}
                </li>
                <li className="font-medium text-base list-disc ml-4">
                  {genres.join(", ")}
                </li>
                <li className="font-medium text-base list-disc ml-4">
                  {formatTime(details?.runtime)}
                </li>
              </ul>
            </div>
          </section>
        </main>
      </ContentWrapper>
    </>
  );
};

export default DetailsHeader;
