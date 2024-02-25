import React from "react";
import { SiSwiggy } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mainContainer flex justify-evenly items-center p-5  bg-black text-slate-200">
      <div className="aboutCompany flex flex-col gap-3">
        <h1 className="flex items-center gap-4 font-bold">
          <SiSwiggy /> Swiggy
        </h1>
        <h1>@Sasta Swiggy Technologies</h1>
        <h1>Pvt. Limited </h1>
      </div>
      <div className="Company flex flex-col gap-3">
        <h1 className="font-bold text-white">Company</h1>
        <ul>
          <li>About</li>
          <li> Careers</li>
          <li>Team </li>
          <li> Swiggy One</li>
          <li>Swiggey Genie</li>
        </ul>
      </div>
      <div className="Contact Us flex flex-col gap-3">
        <h1 className="font-bold text-white">Contact Us</h1>
        <ul>
          <li>Help and Support</li>
          <li> Partner with us</li>
          <li> Ride with us</li>
        </ul>
      </div>
      <div className="WeDeliver flex flex-col gap-3">
        <h1 className="font-bold text-white">We deliever to</h1>
        <ul>
          <li>Bangalore</li>
          <li>Gurgaon</li>
          <li>Mumbai</li>
          <li>Delhi</li>
          <li>Pune</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
