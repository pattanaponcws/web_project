import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";

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
          <Menu menu={menu} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default Order;
