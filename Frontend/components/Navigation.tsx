"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const Navigation = () => {

  const [isclicked, setIsClicked] = useState(false)

  return (
    <div className='p-5 flex justify-between'>
      <div className='flex justify-end'>
      <Image
        src="/logo.jpg"
        width={100}
        height={100}
        alt="Picture of the author"
      />
      </div>
        <ul className='flex hidden justify-center md:flex lg:justify-end lg:flex lg:mr-8'>
            <li className='p-4'>About Us</li>
            <li className='p-4'>Products</li>
            <li className='p-4'>Reviews</li>
        </ul>

        <div className='flex border-solid border-2 max-w-10 max-h-10 md:hidden lg:hidden z-index:1'
          onClick={() => setIsClicked(prev => !prev)}
    >
      <Image
        src="/menu.jpg"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </div>
    {isclicked &&
    <nav className='fixed bg-blue-100 w-6/12'>
      <button onClick={() => setIsClicked(prev => !prev)}>close</button>
     <ul >
     <li className='p-4'>About Us</li>
     <li className='p-4'>Products</li>
     <li className='p-4'>Reviews</li>
 </ul>
 </nav>
 }
    
    </div>
  )
}

export default Navigation