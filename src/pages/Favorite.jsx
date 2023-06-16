import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../Hoc/SectionWrapper";
import { LazyImg } from "../components";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { removeItem, resetList } from "../redux/favSlice";
import { toast } from "react-toastify";

const Favorite = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.fav.contents);
  const [isClicked, setIsClicked] = useState(true);

  const reset = contents.map((content) => content.id);

  const handleReset = () => {
    dispatch(resetList(reset.id));
    if (contents.length === 0) {
      return toast.warning("Please select a new content");
    }
  };

  return (
    <>
      <div className="w-full h-full py-10">
        <ContentWrapper>
          <div className="w-full flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Favorite items
            </h1>
            <button
              onClick={handleReset}
              className="bg-pink text-white font-medium text-lg px-6 py-2 rounded"
            >
              Reset
            </button>
          </div>
          <div className="flex flex-wrap gap-5 mt-10">
            {contents.length === 0 ? (
              <p className="text-Primary text-base sm:text-lg">
                No favorite item found
              </p>
            ) : (
              contents.map((item) => (
                <div
                  key={item.id}
                  className="w-40 h-full flex flex-col items-start justify-start gap-1"
                >
                  <section className="w-full h-56 cursor-pointer overflow-hidden rounded relative">
                    <LazyImg
                      src={item.img}
                      alt="Poster"
                      className="w-full h-full object-cover object-center rounded"
                    />
                    <span className="w-full h-full absolute top-1 right-0">
                      <MdFavorite
                        className={`bg-[#081c22] text-3xl sm:text-4xl p-1 sm:p-2 rounded-full cursor-pointer ${
                          isClicked ? "text-red-500" : ""
                        }`}
                        onClick={() => {
                          dispatch(removeItem(item.id));
                          setIsClicked(true);
                        }}
                      />
                    </span>
                  </section>
                  <section className="flex flex-col items-start justify-start">
                    <h1 className="font-semibold ">
                      {item.title || item.name}
                    </h1>
                  </section>
                </div>
              ))
            )}
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Favorite;
