import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSearchResults, homeState } from "./HomeSlice";
import SearchHeader from "../../components/searchHeader/SearchHeader";

const Home = () => {
  const home = useAppSelector(homeState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSearchResults(""));
  }, []);

  const searchResults = (text: string) => {
    dispatch(getSearchResults(text));
  };
  return (
    <div>
      <SearchHeader searchResults={searchResults} />
    </div>
  );
};

export default Home;
