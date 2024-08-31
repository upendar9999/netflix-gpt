import Header from "./Header";
import { useState } from "react";


const Login = ()=>{

    const [isSignInForm,setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
                alt="logo"/>
            </div>
            <form className="w-3/12 absolute my-36 p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
              <h1 className="font-bold text-xl py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (<input type="text" placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"/>)} 
              <input type="text" placeholder="Email address"
              className="p-4 my-4 w-full bg-gray-700"/>
    
              <input type="password" placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700"/>
              <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
              <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netlix?Sign Up Now" : "Already a User?Sign in Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;