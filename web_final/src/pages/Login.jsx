import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [state,setState] = useState({
        username: "",
        password: "",
    })

    const { username, password } = state;
    const inputValue = (name) => (event) => {
        setState({...state, [name]: event.target.value})
    }

    const confirmLogin = () => {
        console.log(state)
        axios({
            method: "post",
            url: "https://localhost:7057/Auth/Authenticate",
            headers: {"Content-Type": "application/json"},
            data: state
        })
        .then(function(response){
            localStorage.setItem('token', response.data);
            window.alert('Login Success');
            window.location.replace("http://127.0.0.1:5173/");
        }).catch(function(response){
            window.alert("Username or Password Incorrect")
        });
  
    }

    
    
  return (
    <div className="p-14 lg:p-20 w-screen h-screen bg-login bg-cover flex  items-center">
        {/* {JSON.stringify(state)} */}
        <div className=' bg-amber-300  bg-opacity-60 w-[30rem] p-9 sm:p-16 rounded-2xl ' >
            <div className=' flex justify-between pb-10'>
                <div>
                    <div className=' flex text-xl font-bold gap-2 pb-1'>
                        <h2>🥔</h2>
                        <h2>Potato</h2>
                    </div>
                    <h1 className='text-3xl sm:text-5xl font-bold'>Sign in</h1>
                </div>
                <div className='text-end text-sm font-medium text-cyan-700 hover:underline'>
                    <a href='/Signup'> <p>No account?</p>
                    <p>Sign up</p></a>
                   
                </div>
            </div>
            <form className=' space-y-3 pb-4'>
                <div>
                <div className=' text-sm text-gray-700 font-semibold pb-2'>Username or E-mail</div>
                <input className='w-full rounded-lg p-2' type="text"
                value={username} onChange={inputValue("username")}></input>
                </div>
                
                <div>
                <div className='flex justify-between pb-2'>
                    <div className=' text-sm text-gray-700 font-semibold'>Password</div>
                    <div className=' text-sm text-gray-700 font-semibold'>Forgot Password?</div>
                </div>
                <input className='w-full rounded-lg p-2' type="password" onChange={inputValue("password")}
                value={password}></input>
                </div>
                
            </form>
            <button className='flex justify-center items-center bg-black rounded-lg 
            text-white py-3 px-12' onClick={confirmLogin}>Sign in</button>
        </div>
    </div>
  )
}

export default Login
