import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.results);
      console.log(result);
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
