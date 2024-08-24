'use client'

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products/1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.message); // Update state with the fetched data
      } catch (error) {
        setError(error.message); // Update state with the error message
      } finally {
        setLoading(false); // Set loading to false after the data is fetched
      }
    };

    fetchData();
  }, []); 

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>Error: {error}</p>; // Show error message if any

  return (
    <>
      <h1>Fetched Data</h1>

    
    </>
  );
}

export default Page;
