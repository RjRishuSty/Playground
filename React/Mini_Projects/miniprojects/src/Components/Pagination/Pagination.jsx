import React, { useEffect, useState } from "react";
import Styles from "./Pagination.module.css";
import axios from "axios";
const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const parPage = 5;
  const firstRow = currentPage * parPage;
  const lastRow = firstRow - parPage;
  const sliceData = data.slice(lastRow, firstRow);
  const page = Math.ceil(data.length / parPage);

  const handlerNext = () => {
    if (currentPage < page) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlerPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          {sliceData.map((item) => {
            return (
              <tr className={Styles.tbodyTr}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn-control">
        <button className={Styles.btn} onClick={handlerPrev}>
          prev
        </button>
        <button className={Styles.btn} onClick={handlerNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
