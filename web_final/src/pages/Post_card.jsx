import React from "react";
import { FiBell } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { HiTrash } from "react-icons/hi";

function Post_card() {
  return (
    <div className="p-9 w-screen h-screen bg-base bg-cover  ">
      <a href="/">
        <button className="fixed z-90 top-20 right-10 sm:right-6 border-t-4 font-bold border-b-4 border-r-4 border-orange-600 bg-amber-400 w-10 h-10  rounded-r-2xl  flex justify-center items-center text-white text-lg sm:text-xl hover:bg-orange-600  duration-300">
        <FiBell/>
        </button>
      </a>
      <a href="/">
        <button className="fixed z-90 top-20 right-20 sm:right-16 border-4 font-bold border-orange-600 bg-amber-400 w-10 h-10 rounded-l-2xl   flex justify-center items-center text-white text-lg sm:text-xl hover:bg-orange-600  duration-300">
          <FiDownload/>
        </button>
      </a>


      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 pt-20">
        <div className="bg-amber-100 rounded-2xl w-64 " >
         <img className=" rounded-t-2xl" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Murrah_buffalo.JPG" />
          <div>
            <h2 className="text-center text-lg sm:text-xl">restaurant</h2>
            <ul className="text-center p-4">
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                  <div>2X</div>
                  <div>ไก่ชีส</div>
                </div>
                <div className="text-base sm:text-lg">70 $</div>
              </li>
              <li className="flex justify-between items-center gap-x-3">
                <div className="flex justify-between gap-x-2">
                  <div>2X</div>
                  <div>ไก่ชีส</div>
                </div>
                <div>70 $</div>
              </li>
            </ul>
      
            
          </div>
          <div className="flex justify-between p-4 border-t-2 border-amber-500 border-dashed text-base sm:text-lg ">
              <div>Total Amount :</div>
              <div>105$</div>
          </div>
          <div className="text-center text-2xl text-orange-500 ">
          <button>
                      <HiTrash />
            </button>
        </div>
        </div>
     
        
      </div>
    </div>
  );
}

export default Post_card;
