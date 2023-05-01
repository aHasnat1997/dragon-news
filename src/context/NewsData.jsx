import React, { createContext, useEffect, useState } from 'react';


export const AllNewsData = createContext([]);

const NewsData = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => setNewsData(data));
  }, [])

  return (
    <AllNewsData.Provider value={newsData}>
      {children}
    </AllNewsData.Provider>
  );
};

export default NewsData;
