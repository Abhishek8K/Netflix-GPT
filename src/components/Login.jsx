import {useState,useRef} from "react";
import Header from "./Header"
import { IMG_NTFLX } from "../utils/URL"
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const[errorMessage,setErrorMessage]=useState();
 
  const email=useRef(null);
  const password=useRef(null);
  //console.log(email);
  const handleBtnClick=()=>{ 
    
  const message=checkValidateData(email.current.value, password.current.value,)
  
       setErrorMessage(message);

  }
    

  
 
const toggleSignInForum=()=>{
setIsSignInForm(!isSignInForm);

}


  return (
    <div>
        <Header/>
        <div className="absolute">
    <img
     src={IMG_NTFLX} 
     alt="logo"/>    
    </div>

<form onSubmit={(e)=>e.preventDefault()} className="w-4/12 absolute  p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80 ">
<h1 className="font-bold text-3xl py-4">
{isSignInForm? "Sign In":"Sign up" }
  </h1>


{!isSignInForm && <input 
type="text" 
placeholder="Full Name" 
className="p-4 my-4 w-full bg-gray-700 rounded-lg "/>}
<input 
ref={email}
type="text" 
placeholder="Email Adress" 
className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
<input 
ref={password}
type="password" 
placeholder="Password" 
className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
<p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
<button className="p-4 my-6 bg-red-700 w-full rounded-lg"
 onClick={handleBtnClick}>
{isSignInForm? "Sign In":"Sign up" }
</button>
<p className="py-4 cursor-pointer" onClick={toggleSignInForum}>
{isSignInForm? " New to netflix? Sign Up Now":"Already registered? Sign In Now." }
 </p>
</form>
    </div>
  )
}

export default Login