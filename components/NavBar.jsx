import React from 'react'
import SocialsNav from './social/SocialsNav'
import { PiMagnifyingGlassThin } from "react-icons/pi";
const NavBar = () => {
  return (
    <div className='w-full max-w-7xl flex flex-row items-center justify-between mx-auto p-8'>
    <SocialsNav/>
        <div>
            <p className='text-9xl inline-block font-lovtony text-black leading-[.3]'>cc<span className='w-3 h-3 rounded-full bg-purple-400 inline-block ml-1'></span></p>
        </div>
    <div className='w-7 h-7 flex flex-row rounded-full bg-purple-400 items-center justify-center text-center cursor-pointer'>
        <PiMagnifyingGlassThin className='text-center text-white' size={12}/>
        </div>
    </div>
  )
}

export default NavBar