import { useState, useEffect } from "react";
import config from "../config/config";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseApiUrl = config.baseApiUrl;
  const tmdbToken = config.tmdbToken;
  const defaultOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tmdbToken}`,
    },
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(baseApiUrl + endPoint, defaultOptions)
      .then((res) => res.json())
      .then((jsonData) => {
        setIsLoading(false);
        setData(jsonData);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
