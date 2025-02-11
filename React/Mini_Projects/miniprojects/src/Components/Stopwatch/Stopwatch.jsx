import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(0);
  const formateTime = (second) => {
    const minute = Math.floor(second / 60);
    const remaMinute = second % 60;
    return `${minute}:${remaMinute < 10 ? "0" : ""}${remaMinute}`;
  };
  const handleStart = () => {
    setFlag(!flag);
  };
  const handleReset = () => {
    setFlag(false);
    setTime(0);
  };
  useEffect(() => {
    let interID;
    if (flag) {
      interID = setInterval(() => {
        setTime((prev)=>prev +1);
      }, 1000);
    } else {
      clearInterval(interID);
    }
    return () => clearInterval(interID);
  }, [flag]);
  return (
    <>
      <h1>Stopwatch</h1>
      <p>{formateTime(time)}</p>
      <button onClick={handleStart}>{flag ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Stopwatch;
