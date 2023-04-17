import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";


function Menu(props) {
    
    const [Num, setNum] = useState(0);
    function AddtoCart (){
        axios({
            method: "post",
            url: "https://localhost:7057/api/AddCart",
            headers: {"Content-Type": "application/json", 
            "Authorization":"Bearer "+localStorage.getItem('token')
            },
            data: JSON.stringify({
                "MenuId": String(props.menu.menuId),
                "NumFood": parseInt(Num),
              })
        })
        .then(function(response){
            console.log(response.data)
            
            
        }).catch(function(response){
          console.log('error')
        });
        return
    }

  

  return (
    <div className="pb-10">
            <div class="overflow-hidden rounded-t-2xl " key={props.index}>
              <div class=" h-40 md:h-60 w-full flex justify-center">
                <img src={props.menu.menuPic} alt={props.menu.menuFood} />
              </div>
            </div>
            <div class="px-6 py-3 bg-amber-300 rounded-b-2xl">
              <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <div>
                  <h2 class="md:mt-1 md:mx-2 text-mg lg:text-xl font-semibold text-gray-800">
                    {props.menu.menuFood}
                  </h2>
                </div>
                <div class=" inline-block py-2 text-mg lg:text-xl">
                  {props.menu.priceFood} <span>Bath</span>
                </div>
              </div>
              <div class="flex flex-row justify-around">
                <div>
                  <button
                  onClick={()=>{setNum((x)=>x>0?x-1:x)}}
                type="button"
                class="py-2 px-5 bg-amber-100 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >-</button>
                </div>
                <div>
                  <button
                type="button"
                class="py-2 px-5 bg-amber-100 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >{Num}</button>
                </div>
                <div>
                  <button
                onClick={()=>{setNum((x)=>x+1)}}
                type="button"
                class="py-2 px-5 bg-amber-100 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >+</button>
                </div>
              </div>
              <div className="p-5">
              <button
                type="button"
                onClick={AddtoCart}
                class="py-2 px-5 bg-amber-100 text-sm lg:text-lg hover:bg-orange-600 hover:text-amber-100  focus:ring-orange-600 focus:ring-offset-amber-200  text-orange-600 w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  "
              >Add to Cart</button>
                </div>
            </div>
          </div>
        )
}

export default Menu;
