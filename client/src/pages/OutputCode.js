import React, { useEffect, useRef } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Input.css";
function OutputCode(props) {
  const output = useRef();
  useEffect(() => {
    if (props.outputCode) {
      output.current.value = props.outputCode;
    }
  });

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const copyHandler = (e) => {
    output.current.select();
    document.execCommand("copy");
    e.target.focus();
  };

  return (
    <div className="h-screen bg-primary flex flex-col hc">
      {" "}
      <div className="inputc">
        <div className="options">
          <Link to="/input">
            {" "}
            <AiFillCaretLeft />
          </Link>
          <h4 style={{ fontWeight: "600", fontSize: "21px" }}>Output code </h4>
        </div>

        <textarea ref={output} id="input" className="texta">
          {" "}
        </textarea>
      </div>
      <div className="btncontainer">
        <button className="btnc" onClick={downloadTxtFile}>
          {/* {`${load ? "Loading." : "< / > Convert"} `} */}
          {/* {"< / > Convert"} */}
          Save
        </button>
        <button className="btnc" onClick={copyHandler}>
          Copy
        </button>
      </div>
    </div>
  );
}

export default OutputCode;
