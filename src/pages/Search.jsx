import { useParams } from "react-router-dom";
import ContentWrapper from "../Hoc/SectionWrapper";
import { useGetSearchMultiQuery } from "../redux/TMDB";
import { Error, Loader, SEO, SearchCard } from "../components";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Select from "react-select";
import SearchSkeleton from "../components/skeletons/SearchSkeleton";

const categories = [
  { name: "People", media_type: "person" },
  { name: "Movies", media_type: "movie" },
  { name: "Tv Shows", media_type: "tv" },
];

const Search = () => {
  const { query } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [allContent, setAllContent] = useState([]);
  const [category, setCategory] = useState(null);
  const {
    data: content,
    isFetching,
    error,
  } = useGetSearchMultiQuery({ query, pageNum });
  console.log(content);

  useEffect(() => {
    if (content?.results) {
      setAllContent((prevContent) => [...prevContent, ...content.results]);
    }
  }, [content]);

  useEffect(() => {
    if (!category || category.length === 0) {
      setPageNum(1);
    }
  }, [category]);

  const fetchNextPageData = () => {
    setPageNum((prevPage) => prevPage + 1);
  };

  const onChange = (selectOptions) => {
    setCategory(selectOptions);

    const selectCategoriesId = selectOptions.map((option) => option.media_type);
    if (selectCategoriesId.length === 0) {
      setAllContent(content?.results);
    } else {
      const filteredContent = content?.results.filter((item) =>
        selectCategoriesId.includes(item.media_type)
      );
      setAllContent(filteredContent);
    }
  };

  if (error) return <Error />;

  return (
    <>
    <SEO title={`${query} - The Movie Database (TMDB)`}/>
      <div className="w-full h-full py-10">
        <ContentWrapper>
          <section className="w-full h-full flex items-center justify-end mb-10 px-10">
            <Select
              isMulti
              name="catagory"
              value={category}
              onChange={onChange}
              closeMenuOnSelect={false}
              options={categories}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.media_type}
              placeholder="Select category"
              classNamePrefix="react-select"
              className="w-full sm:w-[300px] text-black"
            />
          </section>
          <InfiniteScroll
            dataLength={allContent.length}
            next={fetchNextPageData}
            hasMore={pageNum <= (content?.total_pages || 0)}
            loader={<Loader />}
          >
            {!isFetching ? (
              <div className="w-full h-full flex flex-wrap items-start justify-center gap-5">
                {allContent.map((result, index) => (
                  <section key={`${result.id}-${index}`}>
                    <SearchCard result={result} />
                  </section>
                ))}
              </div>
            ) : (
              <div className="w-full h-full flex flex-wrap justify-center overflow-x-hidden px-5 gap-5">
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
               <SearchSkeleton/>
              </div>
            )}
          </InfiniteScroll>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Search;
