import React from "react";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
const Admin=()=>{
const Navigate=useNavigate();
  
const [AdminData, setAdminData] = useState( {
  email:"", password:"",type:"Admin"
})

function changeHandler(event) {

  setAdminData( (prevData) =>(
      {
          ...prevData,
          [event.target.name]:event.target.value
      }
  ) )

}

function submitHandler(event) {
event.preventDefault();
console.log(AdminData);
Navigate('/');
}

return(
  <div className="w-[80%] bg-slate-100 mt-6 p-4 mx-auto">
  
      <p className=" m-5 p-3 text-center text-[3rem] font-serif">
        Event MANAGEMENT System (Admin)
      </p>


      <div className="flex flex-col item-center justify-center">
      <input
       required
       type="email"
       value = {AdminData.email}
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
      value ={AdminData.password}
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
)
}
export default Admin;