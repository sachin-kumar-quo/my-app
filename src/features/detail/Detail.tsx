import React, { useEffect } from "react";
import { detailState, getNews } from "./detailSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import Comments from "../../components/comments/Comments";
import BackArrow from "../../assets/images/arrowb.png";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

const Detail = () => {
  const detail = useAppSelector(detailState);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getNews(params.id));
  }, []);
  return (
    <div className="detail-container">
      <button className="unit back" type="button" onClick={() => navigate(-1)}>
        <img src={BackArrow} alt="back-arrow" width={30} />
      </button>
      {detail.status !== "loading" ? (
        <>
          <h4>{detail.newsDetail && detail?.newsDetail?.title}</h4>
          <h4>{detail.newsDetail && detail?.newsDetail?.points} Points</h4>
          <div className="comment-list">
            {detail?.newsDetail.children &&
              detail.newsDetail?.children.length &&
              detail.newsDetail?.children.map((comment: any) => (
                <Comments key={comment.id} comment={comment} />
              ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Detail;
