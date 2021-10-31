import firebase from "firebase";
import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function Profile(props) {
  const { boards, user, LogOut } = props;
  const history = useHistory();
  // console.log(boards.length);
  return (
    <div className="h-screen w-full">
      <div className="flex flex-row justify-around pt-6 text-xl">
        {" "}
        <span onClick={() => history.push("/")} className="text-2xl mr-8">
          {" "}
          <AiFillCaretLeft />
        </span>
        <span className="mr-32">Profile</span>
      </div>
      <div className="grid place-items-center w-full">
        <img
          className="rounded-full h-44 w-44 my-8"
          src={firebase.auth().currentUser.photoURL}
          alt="pp"
        />
        <h1 className="text-2xl">{firebase.auth().currentUser.displayName}</h1>
        <h1 className="text-2xl pt-56">
          {firebase.auth().currentUser.email}
        </h1>{" "}
        <div className="mt-4 p-4 opacity-80 ">
          {" "}
          <span className="p-4  text-lg font-medium">History:</span>
          <span className="text-4xl font-thin text-blue">
            {boards.length}
          </span>{" "}
          <span className="text-lg font-medium text-blue">files</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
