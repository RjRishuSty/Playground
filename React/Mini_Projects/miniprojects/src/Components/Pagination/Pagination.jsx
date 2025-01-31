import React, { useEffect, useState } from "react";
import Styles from "./Pagination.module.css";
import axios from "axios";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  let parPageView = 5;
  let lastIndex = currentPage * parPageView;
  let firstIndex = lastIndex - parPageView;
  let showData = data.slice(firstIndex, lastIndex);
  let totalPage = Math.ceil(data.length / parPageView);

  const handelNext = ()=>{
    if(currentPage < totalPage){
        setCurrentPage(currentPage+1);
    }
  }
  const handelPrev = ()=>{
    if(currentPage > 1){
        setCurrentPage(currentPage -1);
    }
  }
  return (
    <>
      <table className={Styles.table}>
        <thead className={Styles.thead}>
          <tr>
            <th>SI</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((item) => {
            return (
              <tr key={item.id}  className={Styles.tbodyTr}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={Styles.buttonControl}>
        <button className={Styles.btn} onClick={handelPrev} disabled={currentPage === 1}>Prev</button>
        <button className={Styles.btn} onClick={handelNext}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
