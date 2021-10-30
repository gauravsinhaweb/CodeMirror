import React, { Component, useState } from "react";
// import "./cameraStyles.css";
import Webcam from "react-webcam";
// const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: "100%",
  height: 500,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState("");
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <div className="webcam-container">
      {image == "" ? (
        <Webcam
          audio={false}
          height={400}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
      ) : (
        <img src={image} />
      )}

      <button
        onClick={(e) => {
          e.preventDefault();
          capture();
        }}
      >
        Capture
      </button>
    </div>
  );
};

export default WebcamCapture;
