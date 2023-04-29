import React from "react";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";

import { client } from "../client";

// Firebase Authentication
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response?.user));
        const { displayName, photoURL, uid } = response?.user;

        const doc = {
          _id: uid,
          _type: "user",
          userName: displayName,
          image: photoURL,
        };

        client.createIfNotExists(doc).then(() => {
          navigate("/", { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative h-full w-full">
        <video
          src={shareVideo}
          typeof="video/mp4"
          controls={false}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 left-0 bottom-0 right-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} alt="logo" width="130px" />
        </div>
        <div className="shadow-2xl">
          <button
            type="button"
            onClick={handleAuth}
            className="bg-mainColor flex justify-center items-center p-3 rounded-lg outline-none cursor-pointer"
          >
            <FcGoogle className="mr-2" /> Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
