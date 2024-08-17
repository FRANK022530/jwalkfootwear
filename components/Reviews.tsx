import React from 'react'

const Reviews = () => {
  return (
    <div className="carousel w-10/12 bg-blue-100">
  <div id="slide1" className="carousel-item relative w-10/12 ">
 <div className='w-full bg-red-500 h-64 flex justify-center items-center'>
    <div className='w-10/12 h-5/6 bg-white'>
        Review
    </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-10/12">
  <div className='w-full bg-yellow-500 h-64 flex justify-center items-center'>
    <div className='w-10/12 h-5/6 bg-white'>
        Review
    </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-10/12">
  <div className='w-full bg-green-500 h-64 flex justify-center items-center'>
    <div className='w-10/12 h-5/6 bg-white'>
        Review
    </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-10/12">
  <div className='w-full bg-blue-500 h-64 flex justify-center items-center'>
    <div className='w-10/12 h-5/6 bg-white'>
        Review
    </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Reviews