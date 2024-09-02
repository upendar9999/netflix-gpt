import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";


const Login = ()=>{

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = ()=>{

        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message) return;

         if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                 .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: USER_AVATAR,
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
       
      }).catch((error) => {
        setErrorMessage(error.message);
      });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });
         }
         else{
            // Sign In Logic

            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                    .then((userCredential) => {
          // Signed in 
            const user = userCredential.user;
        
      }).catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
            });
         }
        

    };
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
                alt="logo"/>
            </div>
            <form 
            onSubmit={(e)=>e.preventDefault()}
            className="w-3/12 absolute my-36 p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
              <h1 className="font-bold text-xl py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (<input ref={name}
                 type="text" placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"/>)} 
              <input ref={email} type="text" placeholder="Email address"
              className="p-4 my-4 w-full bg-gray-700"/>
    
              <input ref={password} type="password" placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700"/>
              
              <p className="text-red-500 font-bold text-lg py-2">
                {errorMessage}
              </p>

              <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}</button>

              <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netlix?Sign Up Now" : "Already a User?Sign in Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;