import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import { useHistory } from "react-router";
import "./Input.css";
import { Link } from "react-router-dom";
import { AiFillCaretLeft } from "react-icons/ai";
import axios from "axios";
const Input = (props) => {
  const history = useHistory();
  const [lang, setLang] = useState("c");
  
  const clickHandler = () => {
    props.setload(true);
    axios
      .post("http://localhost:3001/api/output", {
        code: props.code,
        language: lang,
      })
      .then((response) => {
        // console.log(response.data.output);
        props.setiscodefill(true);
        props.setoutput(response.data.output);
        props.setload(false);
        history.push("/output");
      });
  };
  const changeHandler = (e) => {
    setLang(e.target.value);
  };

  return (
    <>
      {props.load && <Loader />}
      {!props.load && (
        <div className="h-screen bg-primary flex flex-col hc">
          {" "}
          <div className="inputc">
            <div className="options">
              <Link to="/">
                {" "}
                <AiFillCaretLeft />
              </Link>
              <h4 style={{ fontWeight: "600", fontSize: "21px" }}>
                Input code{" "}
              </h4>
              <select
                onChange={changeHandler}
                className="w-20 mt-2 text-black rounded-full outline-none"
              >
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="python3">Python</option>
                <option value="java">Java</option>
              </select>
            </div>

            <textarea
              onChange={(e) => {
                props.setcode(e.target.value);
              }}
              value={props.code}
              className="texta rounded-xl p-4"
              //   ref={codeRef}
            >
              {" "}
            </textarea>
          </div>
          <div onClick={clickHandler} className={`py-4`}>
            <button className="btnc">
              Convert
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
