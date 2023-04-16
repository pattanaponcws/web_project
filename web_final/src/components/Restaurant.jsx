import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Restaurant() {
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
    <div class="w-screen h-screen bg-base bg-cover  ">
      <div className=" pt-20 pb-10 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        Restaurant
      </div>

      <div class="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 ">
        {rests.map((rest, index) => (
          <div class="overflow-hidden rounded-2xl bg-res " key={index}>
            <div class="flex items-center h-48 w-full  overflow-hidden">
              <img src={rest.restPic} alt={rest.restName} />
            </div>

            <div class="px-5">
              <div class="flex flex-col items-center md:flex-row justify-between">
                <div>
                  <h2 class="mt-2 md:mx-3 text-md md:text-lg font-semibold text-gray-800">
                    {rest.restName}
                  </h2>
                </div>

                <div class=" inline-block py-2">
                  <button
                    type="button"
                    class=" py-2 px-5 bg-amber-100 hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
                  >
                    <Link to={`/restaurant/${rest.restId}`}>
                      <div className="text-sm md:text-xl">🛒</div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
