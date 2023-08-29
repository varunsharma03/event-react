import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"
import { Link } from 'react-router-dom'

const Login = ({setIsLoggedIn}) => {
  return (
    // <Template
    //   title="Welcome Back"
    //   desc1="Build skills for today, tomorrow, and beyond."
    //   desc2="Education to future-proof your career."
    //   image={loginImg}
    //   formtype="login"
    //   setIsLoggedIn={setIsLoggedIn}
    // />
   
   <div className='flex   justify-evenly'>
    
    <div>
       
       <Link to="/Vendor">
        <button className='  shadow-xl text-[2rem] font-serif mt-7 '>
          Vendor
        </button>
       </Link>
      </div>

      <div>
     <Link to="/User">
      <button className='text-[2rem] font-serif mt-7 '>
        USER
      </button>
     </Link>

     </div>

      <div>
      <Link to="/Admin">
         <button className='text-[2rem] font-serif mt-7 '>
           ADMIN
         </button>
     </Link>
      </div>

  </div>
  )
}

export default Login
