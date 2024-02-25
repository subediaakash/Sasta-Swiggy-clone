import React from "react";
import Restaurants from "../../Utils/Restaurants";
import { MdOutlineStars } from "react-icons/md";

const TopRestaurants = () => {
  return (
    <div className="overallcontainer ">
      <div className="discription">
        <h1 className="text-xl font-bold  relative left-20 p-1">
          Top Restraunts in Bengaluru
        </h1>
      </div>
      <div className="top-restaurants flex justify-center  items-center  align-middle flex-wrap-reverse ">
        {Restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card  w-80 pl-12 py-4">
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
  );
};

export default TopRestaurants;
