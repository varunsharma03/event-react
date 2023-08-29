import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Vendor=()=>{
  const Navigate=useNavigate();
  const [VendorData, setVendorData] = useState( {
    email:"", password:"",type:"Vendor"
})

function changeHandler(event) {

  setVendorData( (prevData) =>(
      {
          ...prevData,
          [event.target.name]:event.target.value
      }
  ) )

}


function submitHandler(event) {
event.preventDefault();
console.log(VendorData);
// Navigate('VendorContent');
setflag(true);
}

const [flag,setflag]=useState(false);

return(
  <div className="bg-slate-200 w-[80%] p-5 mx-auto mt-8 h-[100%]">

      <div className="flex justify-between  mx-auto ">
        <button className="text-white font-mono font-bold h-[3rem] w-[6rem] rounded-lg bg-slate-700 m-3 p-2">CHART</button>
       
            <button className="bg-slate-600 text-white font-bold h-[3rem] w-[6rem] rounded-lg"
            onClick={()=>{Navigate(-1)}}>
              Back
            </button>

      </div>


       <p className=" m-5 p-3 text-center text-[3rem] font-serif">
        Event MANAGEMENT System (Vendor)
      </p>


     {flag ?
     
      <div>
          <p className="text-center text-[3rem] m-2 p-2">WELCOME VENDOR</p>
          <div className="flex justify-evenly">
            <button className="text-white rounded-lg h-[4rem] w-[10rem] bg-slate-900">
                Your Item
            </button>

            <button className="text-white rounded-lg h-[4rem] w-[10rem] bg-slate-900">
                Add New Item
            </button>

            <button className="text-white rounded-lg h-[4rem] w-[10rem] bg-slate-900">
               Transection
            </button>

            <button className="text-white rounded-lg h-[4rem] w-[10rem] bg-slate-900">
              LogOut
            </button>

          </div>

      </div>
     
       :
       
        <div className="flex flex-col item-center justify-center">
        <input 
        required
        type="email"
        value = {VendorData.email}
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
        value ={VendorData.password}
        onChange={changeHandler}
        name="password"
        placeholder="Password" 
        className="m-4 p-3  text-black rounded-md bg-slate-300 w-[350px]" >
  
        </input>
        <br>
        </br>
        
        <button className="w-[8rem] h-[3rem] rounded-lg p-3 bg-slate-600 ml-4"
        onClick={submitHandler}> 
        SUBMIT
        </button>
        </div>
      
      }

     

  </div>
)
}
export default Vendor;