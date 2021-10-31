import React from "react";

function Login() {
  return (
    <div className="h-screen bg-white flex flex-col hc text-black cc ">
      <div className="upper">
        <p>Welcome</p>
      </div>
      <div className="middle">
        <p>Login</p>
        <div>
          <div className="middlec">
            <button>Google</button>
            <p>OR</p>
            <button>Github</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Made with Hackelite</p>
      </div>
    </div>
  );
}

export default Login;
