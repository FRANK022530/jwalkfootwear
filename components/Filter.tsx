import React from 'react';
import Card from './Card';

const Filter = () => {
  return (
    <div className='w-10/12 mt-20 m-auto p-2 flex  '>
    <div className=' rounded-md border-2 w-[15rem]  p-4 max-h-[500px] min-w-[200px] mr-4 '>
      <h1 className='text-2xl font-bold mb-4'>Brand</h1>
      <label className='p-2' ><input type="radio" name="brand" value="Nike" />Nike</label><br></br>
      <label className='p-2'><input type="radio" name="brand" value="Jordan" />Jordan</label><br></br>
      <label className='p-2'><input type="radio" name="brand" value="New Balance" />New Balance</label><br></br>
        <br/>
      <h1 className='text-2xl font-bold mb-4'>Gender</h1>
      <label className='p-2' ><input type="radio" name="gender" value="Nike" />Male</label><br></br>
      <label className='p-2'><input type="radio" name="gender" value="Jordan" />Female</label><br></br>
      <label className='p-2'><input type="radio" name="gender" value="New Balance" />Unisex</label><br></br>
      <br/>
      <h1 className='text-2xl font-bold mb-4'>Shoe Type</h1>
      <label className='p-2' ><input type="radio" name="type" value="Nike" />Sneakers</label><br></br>
      <label className='p-2'><input type="radio" name="type" value="Jordan" />Loafers</label><br></br>
      <label className='p-2'><input type="radio" name="type" value="New Balance" />Boots</label><br></br>
      <label className='p-2'><input type="radio" name="type" value="New Balance" />Corporate</label><br></br>
    </div>

    <div className='flex flex-wrap '>
    <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
    </div>



    </div>


  );
}

export default Filter;
