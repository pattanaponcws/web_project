import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Order() {
  const params = useParams();

  const [menus, setMenu] = useState([]);

  const fetchOrder = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API}/menus/rest/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setMenu(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
//5555
  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div class="p-9 w-screen h-screen bg-base bg-cover  ">
      <div className=" pt-20 pb-10 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        Menu
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-12">
        {menus.map((menu, index) => (
          <div className="pb-10">
            <div class="overflow-hidden rounded-t-2xl " key={index}>
              <div class=" h-40 md:h-60 w-full flex justify-center">
                <img src={menu.menuPic} alt={menu.menuFood} />
              </div>
            </div>
            <div class="px-6 py-3 bg-amber-300 rounded-b-2xl">
              <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <div>
                  <h2 class="md:mt-1 md:mx-2 text-mg lg:text-xl font-semibold text-gray-800">
                    {menu.menuFood}
                  </h2>
                </div>
                <div class=" inline-block py-2 text-mg lg:text-xl">
                  {menu.priceFood} <span>Bath</span>
                </div>
              </div>
              <div class="flex flex-row justify-around">
                <div>
                  <button
                type="button"
                class="py-2 px-5 bg-amber-100 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >-</button>
                </div>
                <div>
                  <button
                type="button"
                class="py-2 px-5 bg-amber-100 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >0</button>
                </div>
                <div>
                  <button
                type="button"
                class="py-2 px-5 bg-amber-100 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >+</button>
                </div>
              </div>
              <div className="p-5">
              <button
                type="button"
                class="py-2 px-5 bg-amber-100 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >Add to Cart</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
