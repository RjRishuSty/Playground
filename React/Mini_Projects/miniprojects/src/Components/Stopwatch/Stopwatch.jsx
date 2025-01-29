import React, { useEffect, useState } from 'react'
import Styles from './Stopwatch.module.css';

const Stopwatch = () => {
    const [flag,setFlag] = useState(false);
    const [time,setTime] = useState(0);

    const handleStart = ()=>{
        setFlag(!flag);
    }
    const handleReset= ()=>{
        setFlag(false);
        setTime(0);
    }
    const formateTime = (second)=>{
        let minute = Math.floor(second /60);
        let remaingMinute = Math.floor(second %60);
        return `${minute}:${remaingMinute<10?"0":""} ${remaingMinute}`;
    }

    useEffect(()=>{
        let id;
        if(flag){
            id = setInterval(()=>{
                setTime((prev)=> prev+1);
            },1000)
        }else{
            clearInterval(id);
        }
        return  ()=> clearInterval(id)
    },[flag])
  return (
    <>
        <p className={Styles.text}>{formateTime(time)}</p>
        <button className={Styles.btn} onClick={handleStart}>{flag?"Stop":"Start"}</button>
        <button className={Styles.btn} onClick={handleReset}>Reset</button>
    </>
  )
}

export default Stopwatch