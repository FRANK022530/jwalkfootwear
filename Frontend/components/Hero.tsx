import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="h-full p-10 flex justify-center items-center">

      <div className='flex flex-wrap justify-center w-10/12 '>
      <Image 
  
        src="/SHOE.jpeg"
        width={700}
        height={700}
        alt="Picture of the author"
      />

      <div className='flex items-center justify-center'>
        <div className='flex-col items-center'>
            <div className='text-4xl text-center md:text-5xl lg:text-6xl w-full'>
                <p >Step into Style,</p>
                <p >Anytime, Anywhere</p></div>
            <div className=' flex justify-center p-4'><button className='btn btn primary bg-blue-400 text-white'>Get yours Now !</button></div>
        </div>
      </div>
  

      </div>
 

    </div>
  )
}

export default Hero
