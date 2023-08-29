import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
   

  return (
    <div className='flex items-center justify-evenly h-[5rem] text-center font-serif text-[2em] bg-slate-500 '>

        <Link to="/"> 
            <p>EVENT MANAGEMENT</p>
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
           
            {/* { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                    }}>
                        Log Out
                    </button>
                </Link>
            } */}
           
        </div>
      
    </div>
  )
}

export default Navbar
