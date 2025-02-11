import React from "react";
import Styles from "./Card.module.css";
import Stopwatch from "../Stopwatch/Stopwatch";
import Pagination from "../Pagination/Pagination";
import Counter from "../CounterApp/Counter";
import Login from "../Login/Login";

const Card = ({ componentType }) => {
  let array = ["stopwatch", "pagination", "counter"];
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
    case "counter":
      return (
        <div className={Styles.card}>
          <Counter />
        </div>
      );
    case "login":
      return <div className={Styles.card}>
        <Login/>
      </div>;
    default:
      return <div className={Styles.card}>No Card</div>;
  }
};

export default Card;
