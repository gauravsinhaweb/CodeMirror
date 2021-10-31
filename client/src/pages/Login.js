import React from "react";
import "./Login.css";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import useAuth from "../hook/useAuth";

function Login() {
  const history = useHistory();
  const [loginwWithGoogle] = useAuth();

  const LoginHandler = async () => {
    await loginwWithGoogle();

    history.push("/");
  };

  return (
    <>
      <div>
        <div className="h-screen w-full outer">
          <p className="outerf">Welcome</p>
          <p className="">Login</p>
          <div className="m-4 border-2 border-grey-600 py-12 rounded-sm outerbtns">
            <button onClick={LoginHandler}>
              <span>
                <FcGoogle />
              </span>
              Login with google
            </button>
            <button>
              <span>
                <AiFillGithub />
              </span>
              Login with github
            </button>
          </div>
          <p className="place-items-center mb-0 pt-64 madewith footter">
            Made with ❤️ by Hack Elite
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
