import React from 'react'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <div className="hero bg-base-200 bg-blue-100">
    <div className="hero-content flex-col lg:flex-row-reverse ">
    <Image
        src="/logo.png"
        width={550}
        height={550}
        alt="Picture of the author"
      />
     
      <div>
        <h1 className="text-5xl font-bold">Your Name!</h1>
        <p className="py-6 w-96">
        At SoleStyle, we believe that every step you take should be in style. Founded in 2023, SoleStyle is your go-to destination for the latest in footwear fashion, offering a curated selection of high-quality shoes for every occasion.
        </p>
       
      </div>
    </div>
  </div>
  )
}

export default AboutUs