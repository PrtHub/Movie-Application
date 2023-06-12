import { useParams } from "react-router-dom";
import ContentWrapper from "../Hoc/SectionWrapper";
import { useGetSearchMultiQuery } from "../redux/TMDB";
import { SearchCard } from "../components";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";


const Search = () => {
  const { query } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const { data: Results, isFetching, error, fetchNextPage } = useGetSearchMultiQuery(query, 1);
  console.log(Results)


  if(isFetching) return "Loading....."
  if(error) return "Something went wrong"

  const fetchNextPageData = () => {
    fetchNextPage({ query: query, pageNum: pageNum + 1 });
    setPageNum(pageNum + 1);
  };

  
  return (
    <>
    <div className="w-full h-full px-10 py-20">
      <ContentWrapper>
        <InfiniteScroll
         className="w-full h-full flex flex-wrap items-start justify-start gap-5"
         dataLength={Results?.pages?.[pageNum]?.results?.length || 0}
         next={fetchNextPageData}
         hasMore={!!Results?.pages?.[pageNum + 1]}
         >
        {Results?.pages?.[pageNum]?.results?.map((result) => (
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
