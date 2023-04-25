import React from "react";
import "./Card.scss";
import { daysAgoFromDate } from "../../utils/Utils";
import { Link } from "react-router-dom";

const data = {
  created_at: "2015-05-30T07:24:48.000Z",
  title:
    "Flipkart to Snapdeal:Do Not Blame India If You Cannot Hire Good Engineers",
  url: "",
  author: "vivekparihar11",
  points: 2,
  story_text:
    "What a strong answer by Flipkart CEO Sachin Bansal to Snapdeal \u0026quot;Don\u0026#x27;t blame India for your failure to hire great engineers. They join for culture and challenge\u0026quot;\nSuch a bullshit statement ever made from Snapdeal. Just for fact Google, Flipkart and Facebook hires programmers from India every year..they don\u0026#x27;t complain !!",
  comment_text: null,
  num_comments: 4,
  story_id: null,
  story_title: null,
  story_url: null,
  parent_id: null,
  created_at_i: 1432970688,
  relevancy_score: 6046,
  _tags: ["story", "author_vivekparihar11", "story_9629385"],
  objectID: "9629385",
  _highlightResult: {
    title: {
      value:
        "Flipkart to Snapdeal:Do Not Blame India If You Cannot Hire Good Engineers",
      matchLevel: "none",
      matchedWords: [],
    },
    url: {
      value: "",
      matchLevel: "none",
      matchedWords: [],
    },
    author: {
      value: "vivekparihar11",
      matchLevel: "none",
      matchedWords: [],
    },
    story_text: {
      value:
        "What a strong answer by Flipkart CEO \u003cem\u003eSachin\u003c/em\u003e Bansal to Snapdeal \u0026quot;Don't blame India for your failure to hire great engineers. They join for culture and challenge\u0026quot;\nSuch a bullshit statement ever made from Snapdeal. Just for fact Google, Flipkart and Facebook hires programmers from India every year..they don't complain !!",
      matchLevel: "full",
      fullyHighlighted: false,
      matchedWords: ["sachin"],
    },
  },
};

const Card = ({ news = data }) => {
  return (
    <Link to={`/detail/${news.objectID}`} className="card-container">
      <h4>{news.title ? news.title : "No Title"}</h4>
      <a className="link" href={news.url}>
        {news.url}
      </a>
      <p className="card-detail">
        {news.author} | Points {news.points} |{" "}
        {daysAgoFromDate(new Date(news.created_at_i))}|{news.num_comments}{" "}
        Comments
      </p>
    </Link>
  );
};

export default Card;
