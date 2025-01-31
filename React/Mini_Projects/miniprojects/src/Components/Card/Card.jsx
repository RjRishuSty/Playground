import React from "react";
import Styles from "./Card.module.css";
import Stopwatch from "../Stopwatch/Stopwatch";
import Pagination from "../Pagination/Pagination";

const Card = ({ componentType }) => {
  let array = ["stopwatch", "pagination", "Text"];
  if (!array.includes(componentType)) return;

  switch (componentType) {
    case "stopwatch":
      return (
        <div className={Styles.card}>
          <Stopwatch />
        </div>
      );
    case "pagination":
      return (
        <div className={Styles.card}>
          <Pagination />
        </div>
      );
    default:
      return <div className={Styles.card}>No Card</div>;
  }
};

export default Card;
