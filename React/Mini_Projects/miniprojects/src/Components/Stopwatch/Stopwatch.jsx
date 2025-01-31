import React, { useEffect, useState } from "react";
import Styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(0);
  const formateTime = (second) => {
    let minute = Math.floor(second / 60);
    let remiMinute = Math.floor(second % 60);
    return `${minute}:${remiMinute < 10 ? "0" : ""}${remiMinute}`;
  };
  const handleStart = () => {
    setFlag(!flag);
  };
  const handleReset = () => {
    setFlag(false);
    setTime(0);
  };
  useEffect(() => {
    let id;
    if (flag) {
      id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [flag]);
  return (
    <>
      <p className={Styles.text}>{formateTime(time)}</p>
      <div className={Styles.buttonGroup}>
        <button className={Styles.btn} onClick={handleStart}>
          {flag ? "Stop" : "Start"}
        </button>
        <button className={Styles.btn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
