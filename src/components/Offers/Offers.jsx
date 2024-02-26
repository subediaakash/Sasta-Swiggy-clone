import React from "react";
import Restaurants from "../../Utils/Restaurants";
import { MdOutlineStars } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Offers = () => {
  return (
    <div className="flex flex-col gap-5 p-2">
      <div className="flex lg:pl-56 lg:mt-3">
        <h1>
          <NavLink to="/">Home</NavLink>
        </h1>
        <h1>/Offers</h1>
      </div>
      <div className="header lg:pl-56 ">
        <h1 className="text-xl font-bold">
          Restraurant with great offer around me
        </h1>
      </div>
      <div className="lg:pl-56">
        <ul className="flex gap-4">
          <li className="border-2 border-gray-400 px-2 rounded-xl cursor-pointer text-base">
            Filter
          </li>
          <li className="border-2 border-gray-400 flex px-2 rounded-xl align-middle text-base cursor-pointer items-center">
            Sort By <CiFilter />
          </li>
          <li className="border-2 border-gray-400 px-2 rounded-xl cursor-pointer text-base">
            {" "}
            Fastest Delievery
          </li>
          <li className="border-2 border-gray-400 px-2 rounded-xl cursor-pointer text-base">
            New on Swiggy
          </li>
          <li className="border-2 border-gray-400 px-2 rounded-xl cursor-pointer text-base">
            Offer
          </li>
          <li className="border-2 border-gray-400 px-2 rounded-xl cursor-pointer text-base">
            Ratings
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="top-restaurants lg:grid lg:grid-cols-4  align-middle lg:w-3/4">
          {Restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="restaurant-card  w-80 pl-12 py-4"
            >
              <img
                src={restaurant.img}
                alt={restaurant.name}
                className="w-56 h-48 rounded-2xl "
              />
              <div className="restaurant-details">
                <h2 className="flex items-center gap-2">
                  <MdOutlineStars color="white" className="bg-green-600" />
                  {restaurant.ratings}
                </h2>
                <h2>{restaurant.name}</h2>
                <h2>{restaurant.address}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
