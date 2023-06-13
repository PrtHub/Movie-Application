/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ContentWrapper from "../Hoc/SectionWrapper";
import LazyImg from "./LazyImg";
import { BsPlayCircle } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

const DetailsHeader = ({ details, platforms, crew, loading }) => {
  // date
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

  // time
  const formatTime = (totalTime) => {
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  // genres
  const genres = details?.genres?.map((genre) => genre.name);

  //money in million
  // const budgetInMillion = (details.budget / 1000000).toFixed(2);
  // const revenueInMillion = (details.revenue / 1000000).toFixed(2);

  //watch providers
  const flatrate = platforms?.flatrate?.map(
    (platform) => platform.provider_name
  );
  const buy = platforms?.buy?.map((platform) => platform.provider_name);

  //crew members
  const director = crew?.filter(
    (work) => work.known_for_department === "Directing"
  );
  const directorName = [...new Set(director?.map((d) => d.name))];
  const uniqueDirectorNames = [...new Set(directorName)];

  const writer = crew?.filter(
    (work) =>
      work.job === "Screenplay" || work.job === "Story" || work.job === "Writer"
  );
  const writerName = [...new Set(writer?.map((w) => w.name))];
  const uniqueWritersNames = [...new Set(writerName)];

  if (loading) return "loading";

  return (
    <>
      <section className="w-full h-[1200px] lg:h-[600px] relative">
        <div className="w-full h-full bg-[#00008080] bg-opacity-80 absolute z-0" />
        <div className="w-full h-full">
          <img
            src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
            alt="backdrop_img"
            className="w-full h-full object-cover object-center  "
          />
        </div>
        <div className="lower-layer -mb-2"></div>
        <ContentWrapper>
          <main className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-center items-start gap-10 p-10 absolute top-0 z-40 opacity-100">
            <section className="w-[400px] h-[550px] lg:h-[480px]">
              <LazyImg
                src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
                className="w-full h-full object-cover object-center rounded"
              />
            </section>
            <section className="w-full h-full flex flex-col items-start justify-start gap-5 mr-5 lg:mr-0">
              <section className="flex flex-col">
                <h1 className="text-4xl font-bold capitalize">
                  {details?.title || details?.name}{" "}
                  <span className="font-medium">
                    (
                    {formatYear(
                      details?.release_date || details?.first_air_date
                    )}
                    )
                  </span>
                </h1>
                <ul className="flex items-center gap-2">
                  <li className="font-medium text-base">
                    {formatDate(
                      details?.release_date || details?.first_air_date
                    )}
                  </li>
                  <li className="font-medium text-base list-disc ml-4">
                    {genres.join(", ")}
                  </li>
                  <li className="font-medium text-base list-disc ml-4">
                    {details?.runtime ? (
                      <>{formatTime(details?.runtime)}</>
                    ) : (
                      <>{details.number_of_seasons} Seasons ({details?.number_of_episodes} Episodes)</>
                    )}
                  </li>
                </ul>
              </section>
              <section className=" flex items-center gap-5 ">
                <section className="flex items-center gap-1">
                  <div className="w-12 h-12 rounded-[50%] p-[3px] bg-[#081c22] font-semibold">
                    <CircularProgressbar
                      value={details.vote_average.toFixed(1)}
                      maxValue={10}
                      text={details.vote_average.toFixed(1)}
                      styles={buildStyles({
                        pathColor:
                          details.vote_average < 5
                            ? "red"
                            : details.vote_average < 7
                            ? "orange"
                            : "green",
                        textColor: "white",
                        textSize: "38px",
                      })}
                    />
                  </div>
                  <span className="font-semibold text-lg">User Rating</span>
                </section>

                <span className="flex items-center gap-1 font-medium text-lg">
                  <MdFavorite className="bg-[#081c22] text-4xl p-2 rounded-full cursor-pointer " />
                  Favorite
                </span>
                <span className="flex items-center gap-1 font-semibold text-lg cursor-pointer">
                  <BsPlayCircle className="text-4xl" />
                  Play Trailer
                </span>
              </section>
              <article className="flex flex-col items-start gap-4">
                <p className="text-base italic font-medium">
                  {details.tagline}
                </p>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-semibold">Overview</h1>
                  <p className="text-base font-medium">{details.overview}</p>
                </div>
              </article>
              {/* <section className="flex items-center  gap-5">
                <p className="text-xl font-medium">
                  Budget:{" "}
                  <span className="text-base ml-1">
                    {budgetInMillion} million USD
                  </span>
                </p>
                <p className="text-xl font-medium">
                  Revenue:{" "}
                  <span className="text-base ml-1">
                    {revenueInMillion} million USD
                  </span>
                </p>
              </section> */}
              {flatrate || buy ? (
                <section className="w-full">
                  <p className="text-xl font-medium">
                    Watch on:{" "}
                    <span className="text-base font-normal ml-1">
                      {flatrate && `${flatrate}, `}
                      {buy && buy.join(", ")}
                    </span>
                  </p>
                  <hr />
                </section>
              ) : null}
              {uniqueDirectorNames.length > 0 && (
                <section className="w-full">
                  <p className="text-xl font-medium">
                    Director:{" "}
                    <span className="text-base font-normal ml-1">
                      {uniqueDirectorNames.splice(0, 3).join(", ")}
                    </span>
                  </p>
                  <hr />
                </section>
              )}
              {uniqueWritersNames.length > 0 && (
                <section className="w-full">
                  <p className="text-xl font-medium">
                    Story & Screen play:{" "}
                    <span className="text-base font-normal ml-1">
                      {uniqueWritersNames.splice(0, 3).join(", ")}
                    </span>
                  </p>
                  <hr />
                </section>
              )}
            </section>
          </main>
        </ContentWrapper>
      </section>
    </>
  );
};

export default DetailsHeader;
