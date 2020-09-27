import { useState, useEffect } from "react";
require('dotenv').config();


const CONTEXT_KEY = "9966ade2135ecf3d5";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
