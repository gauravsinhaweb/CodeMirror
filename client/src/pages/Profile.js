import React from "react";
import firebase from "firebase";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="h-screen w-full">
      <div className="flex w-full">
        <Link to="/" className="pt-8">
          {" "}
          <AiFillCaretLeft />
        </Link>
        <h1 className="text-center pt-4 text-3xl pl-32">Profile</h1>
      </div>
      <div className="grid place-items-center w-full">
        <img
          className="rounded-full h-44 w-44 my-8"
          src={firebase.auth().currentUser.photoURL}
          alt="pp"
        />
        <h1 className="text-2xl">{firebase.auth().currentUser.displayName}</h1>
        <h1 className="text-2xl pt-56">{firebase.auth().currentUser.email}</h1>
      </div>
    </div>
  );
}

export default Profile;
