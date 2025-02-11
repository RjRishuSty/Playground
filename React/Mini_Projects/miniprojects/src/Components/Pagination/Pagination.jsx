import React, { useEffect, useState } from "react";
const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const parPageView = 5;
  const lastIndex = currentPage * parPageView;
  const firstIndex = lastIndex - parPageView;
  const filterData = data.slice(firstIndex,lastIndex);
  const page = Math.ceil(data.length / parPageView);

  const handleNext = ()=>{
    if(currentPage <page){
        setCurrentPage(currentPage+1);
    }
  }

  const handlePrev = ()=>{
    if(currentPage > 1){
        setCurrentPage(currentPage-1);
    }
  }

  return (
    <>
      <h1>Pagination</h1>
      <table>
        <thead>
          <tr>
            <th>SI</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Pagination;
