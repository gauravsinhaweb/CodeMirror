import img2 from "../assets/img-2.png";
import "./Compiler.css";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Compiler = (state) => {
  const [lang, setlang] = useState("c");
  const [load, setload] = useState(false);
  const coderef = useRef();
  const outputref = useRef();

  useEffect(() => {
    coderef.current.value = state.state.code;
    // eslint-disable-next-line
  }, [])
  const clickhandler = () => {
    console.log(lang);
    const res = coderef.current.value;
    setload(true);
    axios
      .post("http://localhost:3001/api/output", {
        code: res,
        language: lang,
      })
      .then((response) => {
        setload(false);
        outputref.current.value = response.data.output;
      });
  };

  const changehandler = (e) => {
    setlang(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="text-secondary text-3xl font-bold	py-8">
          Generated code
        </div>
        <div>
          <img src={img2} alt="img-1" />
        </div>
        <div className="container">
          <div className="code">
            <select
              onChange={changehandler}
              style={{ width: "120px", margin: "0px 5px" }}
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="python3">Python</option>
              <option value="java">Java</option>
            </select>
            <textarea
              style={{
                background: "white",
                height: "95%",
                margin: "10px 5px",
                padding: "5px",
                borderRadius: "10px"
              }}
              ref={coderef}
            ></textarea>
          </div>
          {load && (
            <div className="load">
              <Loader />
            </div>
          )}
          {!load && <textarea className="output" ref={outputref}></textarea>}
        </div>
        <button onClick={clickhandler} className="cmplbtn">
          Compile
        </button>
      </div>
    </>
  );
};

export default Compiler;
