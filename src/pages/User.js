import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const User=({setIsLoggedIn})=>{
  const Navigate=useNavigate();
  const [UserData, setUserData] = useState( {
       email:"", password:"",type:"User",name:""
    })

function changeHandler(event) {

      setUserData( (prevData) =>(
          {
              ...prevData,
              [event.target.name]:event.target.value
          }
      ) )

  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(UserData);
    setIsLoggedIn(false);
    setflag(true);
}
const [flag,setflag]=useState(false);

return(
  <div className="w-[80%] bg-slate-100 mt-6 p-4 mx-auto">
    
    <p className=" m-5 p-3 text-center text-[3rem] font-serif">
        Event MANAGEMENT System (User)
      </p>
  {flag ? 
    <div>
      <div className="flex justify-evenly">
            <button className="text-white rounded-lg h-[4rem] w-[10rem] bg-slate-900">
                Vendor
            </button>
            <button className="text-white rounded-lg h-[4rem] w-[10rem] bg-slate-900">
                Cart
            </button>
            <button className="text-white rounded-lg h-[4rem] w-[10rem] bg-slate-900">
                Guest List
            </button>
            <button className="text-white rounded-lg h-[4rem] w-[10rem] bg-slate-900">
                Order Status
            </button>
      </div>
    </div>
    :
      <div>
        <div className="flex flex-col item-center justify-center">
      <input 
       required
       type="text"
       value = {UserData.name}
       onChange={changeHandler}
       name="name"
       placeholder="Your Name..."
     className="m-4 p-3  text-black rounded-md bg-slate-300 w-[350px]"></input>
      <input
        required
        type="email"
        value = {UserData.email}
        onChange={changeHandler}
        name="email"
        placeholder="User ID..."
      className="m-4 p-3  text-black rounded-md bg-slate-300 w-[350px]">

      </input>
      <br>
      </br>
      <input 
      required
      type="password"
      value ={UserData.password}
      onChange={changeHandler}
      name="password"
      placeholder="Password" 
      className="m-4 p-3  text-black rounded-md bg-slate-300 w-[350px]" >

      </input>
      <br>
      </br>
      <button className="w-[8rem] h-[3rem] rounded-lg p-3 text-white bg-slate-600 ml-4"
      onClick={submitHandler}> SUBMIT</button>
      </div>

      <div  className="mt-8 p-4 w-full flex justify-end">
        <button className="bg-slate-600 text-white h-[3rem] w-[6rem] rounded-lg"
        onClick={()=>{Navigate(-1)}}>
          Back
        </button>
      </div>
      </div>
  }

 </div>
)
}
export default User;