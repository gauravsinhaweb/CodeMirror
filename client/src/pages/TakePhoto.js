import React, { useState } from "react";
import capture from "../assets/capture.png";
import { BsImages } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import axios from "axios";

function TakePhoto(state) {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const history = useHistory();
  if (image.raw.length !== 0) {
    const formData = new FormData();
    formData.append("Image", image.raw);
    const res = axios.post("http://localhost:3001/api/", formData);
    if (res.data) {
      console.log(res.data);
      state.state.code = res.data.code;
      history.push("/compiler");
    } else {
      console.log(res.error);
      // need an error here
    }
    history.push("/input");
  } else {
    history.push("/");
  }

  // const clickHandler = async () => {};

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
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
              <label htmlFor="upload-button">
                <BsImages />
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
              />
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
