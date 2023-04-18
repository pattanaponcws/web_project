import React, { useState } from "react";
import axios from 'axios';

const Signup = () => {
  const [state, setState] = useState({
    email:"",
    username: "",
    password: "",
    con_password: "",
  });


  const confirmSignUp = () => {
    if(username==""||email==""||password==""||con_password==""){
      window.alert("Try agin")
      return
    }
    if(password!=con_password){
      window.alert("Try agin")
      return
    }

    console.log(state);
    axios({
      method: "POST",
      url: "https://localhost:7057/api/Signup",
      headers: { "Content-Type": "application/json" },
      data: state,
    })
    .then(function(response){
      window.alert("Success")
      window.location.replace("http://127.0.0.1:5173/Login");
    })
    .catch(function(response){
      window.alert("Username or Password Incorrect")
  });


  };

  const {email, username, password, con_password } = state;
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  return (
    <div className=" pt-20 w-screen h-screen bg-login bg-cover flex justify-center items-center">
      <div className=" bg-amber-300  bg-opacity-60 w-[30rem] p-6 sm:p-16  rounded-2xl">
        <div className=" flex justify-between pb-3 sm:pb-7">
          <div>
            <div className=" flex text-xl font-bold gap-2 pb-1">
              <h2>🥔</h2>
              <h2>Potato</h2>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold">Sign up</h1>
          </div>
        </div>
        <form className=" space-y-3 pb-4">
          <div>
            <div className=" text-sm text-gray-700 font-semibold pb-2">
              Email
            </div>
            <input
              type="email"
              className="w-full rounded-lg p-2"
              value={email}
              onChange={inputValue("email")}
            ></input>
          </div>
          <div>
            <div className=" text-sm text-gray-700 font-semibold pb-2">
              Username
            </div>
            <input
              className="w-full rounded-lg p-2"
              type="text"
              value={username}
              onChange={inputValue("username")}
            ></input>
          </div>

          <div>
            <div className="flex justify-between pb-2">
              <div className=" text-sm text-gray-700 font-semibold">
                Password
              </div>
            </div>
            <input
              className="w-full rounded-lg p-2"
              type="password"
              onChange={inputValue("password")}
              value={password}
            ></input>
          </div>
          <div>
            <div className="flex justify-between pb-2">
              <div className=" text-sm text-gray-700 font-semibold">
                Confirm Password
              </div>
            </div>
            <input
              className="w-full rounded-lg p-2"
              type="password"
              onChange={inputValue("con_password")}
              value={con_password}
            ></input>
          </div>
        </form>
        <button
          className="flex justify-center items-center bg-black rounded-lg 
            text-white py-3 px-12"
          onClick={confirmSignUp}
        >
          Create account
        </button>
      </div>
    </div>
  );
};

export default Signup;
