import React from "react";
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
      <button onClick={LoginHandler}>Sign in with Google</button>
    </>
  );
}

export default Login;
