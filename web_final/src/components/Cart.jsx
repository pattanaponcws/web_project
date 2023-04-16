import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
    const [rests, setRests] = useState([]);

    const fetchData = () => {
      axios
        ({
          method : "get",
          url : 'https://localhost:7057/api/restaurants',
          headers : {"Content-Type" : "application/json"}
        })
        .then((response) => {
          console.log(response.data);
          setRests(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
  return (
    <div>
    <div className=" pt-20 pb-10 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
    Restaurant
    </div>
    <div class="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 ">
        {rests.map((rest, index) => (

            <div className='flex justify-center flex-col'>
              <img className=' h-60 w-f object-cover rounded-t-xl overflow-hidden' src={rest.restPic} alt={rest.restName} />
              <div className=' bg-orange-300'>
                555
              </div>
            </div>
           ))}
   <div>
    5
   </div>
</div>
</div>


    
    
  )
}

export default Cart
