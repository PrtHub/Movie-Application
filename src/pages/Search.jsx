import { useParams } from "react-router-dom";
import ContentWrapper from "../Hoc/SectionWrapper";
import { useGetSearchMultiQuery } from "../redux/TMDB";
import { SearchCard } from "../components";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

const Search = () => {
  const { query } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [allContent, setAllMovies] = useState([])
  const { data: content, isFetching, error } = useGetSearchMultiQuery({query, pageNum});
  console.log(content)

  useEffect(() => {
    if(content?.results) {
      setAllMovies((prevContent) =>[ ...prevContent, ...content.results])
    }
  }, [content])


  if(isFetching) return "Loading....."
  if(error) return "Something went wrong"

  const fetchNextPageData = () => {
    setPageNum((prevPage) => prevPage + 1)
  };

  
  return (
    <>
    <div className="w-full h-full px-10 py-20">
      <ContentWrapper>
        <InfiniteScroll
         className="w-full h-full flex flex-wrap items-start justify-start gap-5"
         dataLength={allContent.length}
         next={fetchNextPageData}
         hasMore={pageNum <= (content?.total_pages || 0)}
         >
        {allContent.map((result) => (
          <section key={result.id}>
            <SearchCard />
          </section>
        ))}
        </InfiniteScroll>
      </ContentWrapper>
    </div>
    </>
  );
};

export default Search;
