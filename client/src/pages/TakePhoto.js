import React, { useState } from "react";
import capture from "../assets/capture.png";
import { BsImages } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

function TakePhoto(props) {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const history = useHistory();

  if (image.raw.length !== 0) {
    console.log(image.raw);
    props.setload(true);
    const formData = new FormData();
    formData.append("Image", image.raw);
    axios.post("http://localhost:3001/api/", formData).then((res) => {
      props.setcode(res.data.code);
      props.setload(false);
      history.push("/input");
    });
    // if (res.data) {

    //   history.push("/compiler");
    // } else {
    //   console.log(res.error);
    //   // need an error here
    // }
  } else {
    history.push("/");
  }

  // const clickHandler = async () => {};

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  return (
    <>
      {props.load && <Loader />}
      {!props.load && (
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
                <Link to="/profile">
                  <FaUser />
                </Link>
              </div>
            </div>
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
}

export default TakePhoto;
