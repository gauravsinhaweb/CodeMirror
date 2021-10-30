import React from "react";
import capture from "../assets/capture.png";
import { BsImages } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";

function TakePhoto() {
  return (
    <>
      <div className="h-screen bg-black flex flex-col justify-between">
        <div className="flex flex-row justify-around mt-6 text-xl">
          {" "}
          <span className="text-2xl mr-8">
            {" "}
            <BiHistory />
          </span>
          <span className="mr-32">Take Photo</span>
        </div>
        <div className="bg-secondary h-40 ">
          <div className="flex flex-row justify-evenly mt-8">
            <div className="text-2xl text-white opacity-70">
              <BsImages />
            </div>
            <div className=" ">
              <img src={capture} alt="cap" />{" "}
            </div>
            <div className="text-2xl text-white opacity-70">
              <FaUser />
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default TakePhoto;
