import React, { useEffect, useState } from 'react';
// import './Compcss/card.css'
import axios from 'axios';
import CardSec from './CardSec'; // Import Cardsec component

const Card = () => {
   const url = "http://127.0.0.1:8000/api/tours/";
 

 const useFetch=(url)=>{
    const [data, setData] = useState([]); // State to store tour data
   //    const [error, setError] = useState(null); // State for error handling
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url);
            console.log(response.data);
            setData(response.data);
         } catch (error) {
            console.error(error);
            // setError(error);
         }
      };

      fetchData();
   }, [url]);

   return {data};
 };



//  const {data: data} = useFetch(url);
 const { data } = useFetch(url);
// console.log(data);
// const maxColumnsPerRow = 3; // Set the maximum number of columns per row

return (
   <div className="container">
     <div className="row">
       {data.map((tour, index) => (
            tour.featured &&(
         <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 shadow-x">
              <CardSec tour={tour} />
         </div>)
       ))}
     </div>
   </div>
 );
};

export default Card;
