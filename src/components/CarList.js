
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarCard from "./CarCard";
import Pagination from "./Pagination";
import carsData from "../carsData.json";
import { BiSearchAlt } from "react-icons/bi";

function CarList() {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(page, 10) || 1);
  const [searchQuery, setSearchQuery] = useState("");
  const carsPerPage = 6;

  useEffect(() => {
    setCurrentPage(parseInt(page, 10) || 1);
  }, [page]);


  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <>
      <div className="p-4">

        <div className="w-full  bg-slate-200 rounded-2xl p-2 drop-shadow-lg relative">
          <input
            type="text"
            placeholder="Search by car name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-2xl w-[50%]  bg-slate-50  drop-shadow-lg outline-none "
          />
          <BiSearchAlt className="absolute top-3 left-[47%] text-3xl text-slate-300 " />
          
        </div>
      </div>
      <div className=" bg-slate-200 w-full pl-10 pt-5">
        <div className="grid grid-cols-3 gap-4 shadow-black-2xl ">
          {currentCars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          carsPerPage={carsPerPage}
          totalCars={filteredCars.length}
        />
      </div>
    </>
  );
}

export default CarList;
