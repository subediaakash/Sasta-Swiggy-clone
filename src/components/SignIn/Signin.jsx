import React from "react";
import { chikenroll } from "../../assets/importer";
const Signin = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle h-[50vh]">
      <div
        className="container flex items-center gap-28 justify-center
      "
      >
        <h1>Login</h1>
        <div className="imagecontainer">
          <img src={chikenroll} className="w-20 h-14 rounded-full" />
        </div>
      </div>
      <div className="EmailLogin flex flex-col">
        <input type="text" name="email" placeholder="Email " id="" />
        <input type="text" name="password" placeholder="Password " id="" />
        <button>Login</button>
      </div>
      <div className="numberLogin flex flex-col">
        <input
          type="tel"
          name="Mobile Number"
          id=""
          placeholder="Mobile Number"
        />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Signin;
