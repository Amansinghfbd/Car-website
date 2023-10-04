
import React from "react";
import { Link } from "react-router-dom";

function Pagination({ currentPage, carsPerPage, totalCars }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="text-center my-4 ">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`inline-block mx-2 ${
              number === currentPage ? "font-bold " : ""
            }`}
          >
            <Link to={`/page/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
