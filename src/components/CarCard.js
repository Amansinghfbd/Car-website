import React from "react";
import { GoPeople } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { FcAutomatic } from "react-icons/fc";
import { BsSpeedometer } from "react-icons/bs";

import { AiOutlineHeart } from "react-icons/ai";
function CarCard({ car }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-3 flex flex-col justify-between ">
      <div>
        <img src={car.image} alt={car.name} className="rounded-2xl" />
      </div>
      <div>
        <div className="px-6 py-4">
          <div className="flex justify-between ">
            <div className="font-bold text-xl mb-2">{car.name}</div>
            <span className="rounded-2xl border-dashed border-black">
              {car.year}
            </span>
          </div>

          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <GoPeople className="flex  text-blue-600" />
                <p className="flex justify-center align-center bottom-2">
                  {car.seats}
                </p>
              </div>

              <div className="flex gap-3">
                <LuFuel className="flex  text-blue-600" />
                <p className="flex justify-center align-center bottom-2">
                  {car.fuel}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <BsSpeedometer className="flex  text-blue-600" />
                <p>{car.mileage}</p>
              </div>
              <div className="flex gap-3">
                <FcAutomatic className="flex  text-blue-600 " />
                <p>{car.transmission}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-400 mt-4 h-0.5">
            <hr />
          </div>

          <div className="flex justify-between items-center ">
            <div className="flex gap-1 relative">
              <p className=" font-bold text-2xl ">{car.price_per_month}</p>
              <p className="absolute mx-14 my-2">
                {" "}
                <sub>/month</sub>
              </p>
            </div>
            <div className="flex ">
              <div className=" border bg-slate-300 flex justify-center items-center m-3 rounded-xl px-3">
                <AiOutlineHeart className=" text-blue-600  hover:text-red-700" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md my-3 mx-2">
                {car.rent_now_button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
