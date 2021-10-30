import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import "./Input.css";
import { Link } from "react-router-dom";
import { AiFillCaretLeft } from "react-icons/ai";
import axios from "axios";
const Input = (props) => {
  const history = useHistory();
  const [lang, setLang] = useState("c");
  const codeRef = useRef();

  useEffect(() => {
    if (props.code) {
      codeRef.current.value = props.code;
    }
  }, [props.code]);

  const clickHandler = () => {
    const res = codeRef.current.value;
    props.setCode(res);
    // setLoad(true);
    axios
      .post("http://localhost:3001/api/output", {
        code: res,
        language: lang,
      })
      .then((response) => {
        console.log(response.data.output);
        props.setIsCodeFill(true);
        props.setOutput(response.data.output);
        history.push("/output");
        // setLoad(false);
        // outputRef.current.value = response.data.output;
      });
  };

  const changeHandler = (e) => {
    setLang(e.target.value);
  };
  console.log();
  return (
    <div className="h-screen bg-primary flex flex-col hc">
      {" "}
      <div className="inputc">
        <div className="options">
          <Link to="/">
            {" "}
            <AiFillCaretLeft />
          </Link>
          <h4 style={{ fontWeight: "600", fontSize: "21px" }}>Input code </h4>
          <select
            onChange={changeHandler}
            className="w-20 mt-2 text-black rounded-full font-bold outline-none"
          >
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="python3">Python</option>
            <option value="java">Java</option>
          </select>
        </div>

        <textarea className="texta text-xl p-6" ref={codeRef}>
          {" "}
        </textarea>
      </div>
      <div onClick={clickHandler} className={`py-4`}>
        <button className="btnc">
          {/* {`${load ? "Loading." : "< / > Convert"} `} */}
          {/* {"< / > Convert"} */}
          Convert
        </button>
      </div>
    </div>
  );
};

export default Input;
