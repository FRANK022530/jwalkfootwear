'use client'
import React, { useState } from 'react';

const AddProduct = () => {
    const [imageSrc, setImageSrc] = useState(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageSrc(URL.createObjectURL(file));
        }
    };

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='h-5/6 w-8/12 bg-white border-gray border rounded-xl p-5 drop-shadow-md flex flex-col'>
                <h1 className='text-3xl'>Add Product</h1>
                <div className='flex h-5/6'>
                    <div className='flex flex-col flex-1 justify-center items-center p-5'>
                        <div className='bg-gray-50 w-full h-full mb-2 flex justify-center items-center'>
                            {imageSrc ? (<img src={imageSrc} alt="Uploaded" className='max-h-full max-w-full object-cover' />) : (<p>No image uploaded</p>)}
                        </div>
                        <input 
                            className='w-full' 
                            type='file' 
                            accept="image/*" 
                            onChange={handleFileChange} 
                        />
                    </div>
                    <div className='flex flex-col flex-1 p-5'>
                        <label className='p-2'>Product Name:</label>
                        <input className='p-3 mb-2' type='text' placeholder='Nike 101' name="ProductName" required/>
                        <label className='p-2'>Categories:</label>
                        <select className='p-3 mb-2' required>
                            <option selected disabled></option>
                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                        </select>
                        <label className='p-2'>Stocks:</label>
                        <input className='p-3 mb-2' type='number' placeholder='24' name="ProductName" required/>
                        <label className='p-2'>Sizes:</label>
                        <select className='p-3 mb-10' required>
                            <option selected disabled></option>
                            <option>Extra Small</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                        <button className='p-2 rounded-md text-white bg-green-500'>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
