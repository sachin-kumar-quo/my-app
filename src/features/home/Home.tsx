import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSearchResults, homeState } from "./HomeSlice";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import Card from "../../components/card/Card";
import "./Home.scss";
import FrontArrow from "../../assets/images/arrowf.png";
import BackArrow from "../../assets/images/arrowb.png";

const Home = () => {
  const home = useAppSelector(homeState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSearchResults(""));
  }, []);

  const searchResults = (text: string, page: number = 0) => {
    if (page >= 0) {
      dispatch(getSearchResults({ text, page }));
    }
  };
  return (
    <div className="home-container">
      <SearchHeader searchResults={searchResults} />
      <div className="cards-container">
        {home &&
          home.news.map((newsData: any) => (
            <Card key={newsData.objectID} news={newsData} />
          ))}
      </div>
      <div className="footer">
        <button
          className="unit arrow"
          type="button"
          onClick={() => searchResults(home.query, home.page - 1)}
        >
          <img src={BackArrow} alt="back-arrow" width={30} />
        </button>
        <form>
          <input
            className="page-input"
            type="number"
            value={home.page}
            onChange={(e) => searchResults(home.query, Number(e.target.value))}
          />
        </form>
        <button
          className="unit arrow"
          type="button"
          onClick={() => searchResults(home.query, home.page + 1)}
        >
          <img src={FrontArrow} alt="front-arrow" width={30} />
        </button>
      </div>
      <p>of {home.totalPages} pages</p>
    </div>
  );
};

export default Home;
