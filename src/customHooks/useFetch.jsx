import { useState, useEffect } from "react";
import fetchApi from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData([]);
    setError(null);

    fetchApi(url)
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
