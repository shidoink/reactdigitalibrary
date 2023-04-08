import React from 'react'
import { useState } from 'react'
import { Link} from 'react-router-dom'
import {useAuth0,} from "@auth0/auth0-react"

const Navbar = () => {
    const [isVisible, setIsVisible]= useState(false)
    const Authenticated= useAuth0().isAuthenticated
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    
    const dropDown = () =>{setIsVisible(!isVisible)}

    const clicked = () => {setIsVisible(false)}


  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
        <div className= "flex items-center flex-shrink-0 text-white mr-6">
            <Link to= '/' className= 'font-semibold text-xl tracking-tight'> Digital Library</Link>
        </div>
        <div className="block">
            <button onClick={dropDown}
            className= "flex items-center px-3 py-2 text-gray-200 border rounded border-gray-400 hover:text-white hover:border-white">
            <i className="fa-solid fa-book"></i>
            </button>
        </div>
        {isVisible?
        ( <div className="w-full block flex-grow-items-center"> 
            <div className="text-sm lg:flex-grow">
                <button className= 'p-3 m-5 bg-gray-400 justify-center '>
                    <div>
                        <Link to ='/'
                        onClick={clicked}
                        className= 'flex place-items-center mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 '>
                        Home</Link>
                    </div>
                </button>
                <button className= 'p-3 m-5 bg-gray-400 justify-center '>
                    <div>
                        <Link to ='/About'
                        onClick={clicked}
                        className= 'flex place-items-center mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 '>
                        About</Link>
                    </div>
                </button>
                <button className= 'p-3 m-5 bg-gray-400 justify-center '>
                    <div>
                        <Link to ='/Contact'
                        onClick={clicked}
                        className= 'flex place-items-center mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 '>
                        Contact</Link>
                    </div>
                </button>
                <button className= 'p-3 m-5 bg-gray-400 justify-center '>
                    <div>
                        <Link to ='/Dashboard'
                        onClick={clicked}
                        className= 'flex place-items-center mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 '>
                        Dashboard</Link>
                    </div>
                </button>
                {
                    !Authenticated?
                    <button className= 'p-3 m-5 bg-gray-400 justify-center'><div><Link to='/' onClick={()=>{loginWithRedirect()}}
                    className='flex place-items-center-mt-4 lg:inline-block lg-mt-0 text-gray-200 hover:text-white'>
                        Login</Link></div></button>
                        :
                    <button className= 'p-3 m-5 bg-gray-400 justify-center'><div><Link to='/' onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}
                    className='flex place-items-center-mt-4 lg:inline-block lg-mt-0 text-gray-200 hover:text-white'>
                        Logout</Link></div></button>
                }

            </div>
        </div> )
        :
        (<></>)}

    </nav>
  )
}

export default Navbar