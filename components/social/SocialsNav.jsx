import React from 'react'
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";

const SocialsNav = () => {
  return (
    <div className='flex flex-row gap-4'>
        <FaLinkedinIn className=' cursor-pointer' size={24}  />
        <FaGithub className=' cursor-pointer' size={24}  />
        <FaGlobe className=' cursor-pointer' size={24}  />

    </div>
  )
}

export default SocialsNav