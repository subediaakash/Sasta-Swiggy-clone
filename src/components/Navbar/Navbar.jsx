import React from "react";
import { logo } from "../../assets/importer";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiMiniChevronDown } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="container flex lg:justify-center  ">
      <div className="flex justify-between  lg:gap-44 py-2  ">
        <div className="lg:flex lg:items-center lg:justify-center">
          <img src={logo} className=" w-24   h-14 lg:w-32" />
          <div className=" hidden lg:flex lg:items-center  hover:text-orange-400">
            <p className="text-sm">Others</p>
            <HiMiniChevronDown />
          </div>
        </div>
        <div className="links flex gap-10 font-normal text-sm lg:text-base">
          <ul className="flex gap-5 lg:gap-10">
            <li className="flex items-center gap-2 hover:text-orange-400">
              <CiSearch />
              <NavLink to="/search">Search </NavLink>
            </li>
            <li className="flex items-center gap-2 hover:text-orange-400">
              <BiSolidOffer />
              <NavLink to="/offers">Offers</NavLink>
            </li>
            <li className="hidden lg:flex lg:items-center lg:gap-2 hover:text-orange-400">
              <FaHandsHelping />
              <NavLink to="/help">Help</NavLink>
            </li>
            <li className="flex items-center gap-2 hover:text-orange-400">
              <LuUserSquare2 />
              <NavLink to="/signin">Sign in </NavLink>
            </li>
          </ul>
          <div className=" hidden lg:flex lg:items-center ">
            <ul className="">
              <li className="flex items-center hover:text-orange-400">
                <HiOutlineShoppingCart />
                <NavLink to="/cart">Cart</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
