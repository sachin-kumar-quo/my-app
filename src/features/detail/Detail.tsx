import React from "react";
import { detailState } from "./detailSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const Detail = () => {
  const detail = useAppSelector(detailState);
  const dispatch = useAppDispatch();
  return <div>Detail</div>;
};

export default Detail;
