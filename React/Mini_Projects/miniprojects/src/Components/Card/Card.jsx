import React from "react";
import Styles from "./Card.module.css";
import Stopwatch from "../Stopwatch/Stopwatch";

const Card = ({ componentType }) => {
  let array = ["stopwatch", "xcard", "ageca", "card"];
  if (!array.includes(componentType)) return;

  switch (componentType) {
    case "stopwatch":
      return (
        <div className={Styles.card}>
          <Stopwatch />
        </div>
      );
    default:
      return <div className={Styles.card}>Unknown Component</div>;
  }
};

export default Card;
