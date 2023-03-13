import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="bg-[#838dff] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle">
      {" "}
      <div></div>
      <Link to="/question">
        <div className="uppercase font-bold text-3xl text-center mb-3">
          <span className="border-[#2A2B32] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] bg-[#0a274d44]">
            Bắt đầu
          </span>
        </div>
      </Link>
      <div className=" relative self-center px-3 py-3">
        <div className="flex flex-row justify-center align-middle ">
          <a href="https://www.facebook.com/balan2000/">
            <img src="./facebook.png" alt="" className="mx-5" />
          </a>
          <a href="https://github.com/lebalans21-60TH2?tab=repositories/">
            <img src="./github.png" alt="" className="mx-5" />
          </a>
          <a href="https://portfolio-blush-rho-20.vercel.app/">
            <img src="./portfolino.png" alt="" className="mx-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
