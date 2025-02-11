import React, { useEffect, useState } from "react";
import Styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [timeData, setTimeData] = useState(0);
  const [flag, setFlag] = useState(false);

  const formateTime = (second) => {
    const minute = Math.floor(second / 60);
    const remSecond = second % 60;
    return `${minute}:${remSecond < 10 ? "0" : ""}${remSecond}`;
  };
  const handlerStart = () => { setFlag(!flag) };
  const handlerReset = () => {
    setFlag(false);
    setTimeData(0);
  };
  useEffect(() => {
    let interId;
    flag ? (interId = setInterval(() => {
          setTimeData((prev) => prev + 1);
        }, 1000))
      : clearInterval(interId);
    return () => clearInterval(interId);
  }, [flag]);
  return (
    <>
      <p className={Styles.text}>{formateTime(timeData)}</p>
      <div className={Styles.buttonGroup}>
        <button onClick={handlerStart} className={Styles.btn}>
          {flag ? "Stop" : "Start"}
        </button>
        <button onClick={handlerReset} className={Styles.btn}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
