import React from 'react'

const Reviews = () => {
  return (
    <div className='flex justify-center '>
    <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full ">
 <div className='w-full  h-64 flex justify-center items-center'>
    <div className='w-10/12 h-5/6 bg-white rounded-lg border-2'>
        Review1
    </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <div className='w-full  h-64 flex justify-center items-center'>
    <div className='w-10/12 h-5/6 bg-white rounded-lg border-2'>
        Review2
    </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <div className='w-full  h-64 flex justify-center items-center'>
    <div className='w-10/12 h-5/6 bg-white rounded-lg border-2'>
        Review3
    </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle ">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <div className='w-full  h-64 flex justify-center items-center'>
    <div className='w-10/12 h-5/6 bg-white rounded-lg border-2'>
        Review4
    </div>
 </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
  )
}

export default Reviews