import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import "./Input.css";
import { Link } from "react-router-dom";
import { AiFillCaretLeft } from "react-icons/ai";
import { db } from "../components/firebase";
import firebase from "firebase";

import axios from "axios";
const Input = (props, userID) => {
  const history = useHistory();
  const [lang, setLang] = useState("c");
  const [inputValue, setInputValue] = useState("");

  const codeRef = useRef();

  useEffect(() => {
    if (props.code) {
      codeRef.current.value = props.code;
    }
  }, [props.code]);

  const clickHandler = (e) => {
    e.preventDefault();

    const res = codeRef.current.value;
    props.setcode(res);
    // setLoad(true);
    axios
      .post("http://localhost:3001/api/output", {
        code: res,
        language: lang,
      })
      .then((response) => {
        // console.log(response.data.output);
        props.setiscodefill(true);
        props.setoutput(response.data.output);
        history.push("/output");
        // setLoad(false);
        // outputRef.current.value = response.data.output;
      });

    db.collection(`users/${userID}/CodeOutput`).add({
      name: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputValue("");
  };

  const changeHandler = (e) => {
    setLang(e.target.value);
  };

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
            className="w-20 mt-2 text-black rounded-full outline-none"
          >
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="python3">Python</option>
            <option value="java">Java</option>
          </select>
        </div>

        <textarea
          className="texta rounded-xl p-4"
          ref={codeRef}
          onChange={(e) => setInputValue(e.target.value)}
        >
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
