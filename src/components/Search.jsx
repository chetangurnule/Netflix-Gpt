import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchApi from "../utils/api";
import { Spinner, Container, MovieCard } from "../components";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const [pageNum, setPageNum] = useState(1);
  const { searchText } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `/search/multi?query=${searchText}&page=${pageNum}`;

  const fetchInitialData = () => {
    setIsLoading(true);
    fetchApi(url).then((res) => {
      setData(res);
      setIsLoading(false);
      setPageNum((prev) => prev + 1);
    });
  };

  const fetchNextPageData = () => {
    fetchApi(url).then((res) => {
      if (data?.results) {
        setData({ ...res, results: [...data.results, ...res.results] });
      }
    });
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [searchText]);
  return (
    <div className=" bg-slate-900">
      {isLoading && <Spinner initialState={true} />}
      {!isLoading && (
        <Container>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle text-white text-bold text-3xl pt-20 mb-10 text-center">
                {`search ${
                  data?.total_results > 1 ? "results for" : "result for"
                } ${searchText}`}
              </div>
              <InfiniteScroll
                className="w-full flex flex-wrap gap-10 justify-evenly"
                dataLength={data?.results || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard
                      key={index}
                      id={item.id}
                      image={item.poster_path}
                      fromSearch={true}
                      title={item.title}
                    />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="w-full h-screen text-white flex justify-center items-center text-3xl font-bold">
              Sorry, Results not found!
            </span>
          )}
        </Container>
      )}
    </div>
  );
};

export default Search;
