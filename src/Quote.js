import React from "react";
import { useState, useEffect } from "react";

const Mycomponent=()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://type.fit/api/quotes');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const result = await response.json(); //convert to json
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    return (
      <div>
        <h1>Data from API</h1>
        {data && (
          <div>
          <p>
            {data[Math.floor(Math.random() * data.length)].text} -{' '}
            {data[Math.floor(Math.random() * data.length)].author}
          </p>
        </div>
        )}
      </div>
    );
}

export default Mycomponent;