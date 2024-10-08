import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="card w-64 shadow-xl p-2 pb-2">
  <figure>
  <Image
        src="/shoeproduct.jpg"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card