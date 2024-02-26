import React from "react";
import {
  samosa,
  cake,
  coffee,
  dosa,
  idli,
  kichdi,
  parottha,
  poori,
  sandwich,
  shakes,
} from "../../assets/importer";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Woym = () => {
  return (
    <div className="pb-7 mb-2">
      <div className="container overflow-hidden">
        <div className="p-4 lg:relative lg:left-24">
          <h1 className="text-xl font-extrabold text-black">
            Whats On Your Mind ?{" "}
          </h1>
        </div>
        <div className="fooditems lg:p-4 lg:relative lg:left-16 text-gray-600 ">
          <Carousel responsive={responsive} centerMode={true}>
            <div className="p-1 flex flex-col items-center">
              <img src={samosa} className="h-44 rounded-full" />
              <p>Samosa</p>
            </div>
            <div className="p-1 flex flex-col items-center">
              <img
                src={coffee}
                alt=""
                srcset=""
                className="h-44 rounded-full"
              />
              <p>Coffee</p>
            </div>
            <div className="p-1 flex flex-col items-center">
              <img src={idli} alt="" srcset="" className="h-44 rounded-full" />
              <p>Idli</p>
            </div>
            <div className="p-1 flex flex-col items-center">
              <img
                src={parottha}
                alt=""
                srcset=""
                className="h-44 w-80 rounded-full"
              />
              <p>Parotha</p>
            </div>

            <div className="p-1 flex flex-col items-center">
              <img
                src={sandwich}
                alt=""
                srcset=""
                className="h-44 rounded-full"
              />
              <p>Sandwich</p>
            </div>
            <div className="p-1 flex flex-col items-center">
              <img src={dosa} alt="" srcset="" className="h-44 rounded-full" />
              <p>Dosa</p>
            </div>
            <div className="p-1 flex flex-col items-center">
              <img src={cake} alt="" srcset="" className="h-44 rounded-full" />
              <p>Cake</p>
            </div>
            <div className="p-1 flex flex-col items-center">
              <img src={poori} alt="" srcset="" className="h-44 rounded-full" />
              <p>Poori</p>
            </div>
            <div className="p-1 flex flex-col items-center">
              <img
                src={kichdi}
                alt=""
                srcset=""
                className="h-44 rounded-full"
              />
              <p>Kichdi</p>
            </div>
            <div className="p-1 flex flex-col items-center">
              <img
                src={shakes}
                alt=""
                srcset=""
                className="h-44 rounded-full"
              />
              <p>Shakes</p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="relative w-3/4 h-[1px] left-20 bg-slate-300"></div>
    </div>
  );
};

export default Woym;
