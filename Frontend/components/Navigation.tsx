import React from 'react'
import Image from 'next/image'

const Navigation = () => {
  return (
    <div className='p-5 flex justify-between'>
      <div className=''>
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

        <div className='flex border-solid border-2 max-w-10 max-h-10 md:hidden lg:hidden '>
        <Image
        src="/menu.jpg"
        width={50}
        height={50}
        alt="Picture of the author"
      />
        </div>
    
    </div>
  )
}

export default Navigation