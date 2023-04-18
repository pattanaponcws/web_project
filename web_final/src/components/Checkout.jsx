import axios from "axios";
import React, { useEffect, useState } from "react";
function Checkout({ visible, onClose, cart, restslsit, menulsit }) {
  const [tel, setTel] = useState([]);
  const [address, setAddress] = useState([]);
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  function remove(id) {
    axios({
      method: "delete",
      url: "https://localhost:7057/api/Remove?id=" + String(id),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        window.location.reload(false);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function sendCart() {
    if (cart == []) return null;
    axios({
      method: "post",
      url: "https://localhost:7057/api/CreatePost",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: JSON.stringify({
        tel: tel,
        address: address,
      }),
    }).then((response) => {
      restslsit.map((rest, index) => {
        const data = cart.filter(
          (x) => x.menu.restaurants.restId == rest.restId
        );
        menulsit.map((index, i) => {
          const temp = data.filter((x) => x.menu.menuId == index.menuId);
          let count = 0;
          for (let index = 0; index < temp.length; index++) {
            count += temp[index].countFood;
          }
          if (count > 0) {
            const data = {
              postId: String(response.data),
              countFood: count,
              price: count * index.priceFood,
              menu: String(index.menuId),
            };
            //console.log(response.data+'====='+index.menuId)
            axios({
              method: "post",
              url: "https://localhost:7057/api/AddPost",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              data: JSON.stringify(data),
            }).then((response) => {
              console.log(postmenu);
            });
          }
        });
        remove(rest.restId)
      });
    });

    onClose();
  }
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded">
        <div className="bg-white p-2 rounded w-72">
          <h1 className="font-semibold text-center text-xl text-orange-600 p-2">
            Confirm Check Out
          </h1>
          <div className="flex flex-col">
            <input
              value={address}
              type="text"
              className="border border-orange-500 p-2 rounded mb-5"
              onChange={(x) => {
                setAddress((y) => x.target.value);
              }}
              placeholder="Enter Address"
            />
            <input
              value={tel}
              type="text"
              className="border border-orange-500 p-2 rounded mb-5"
              onChange={(x) => {
                setTel((y) => x.target.value);
              }}
              placeholder="Enter Telephone"
            />
          </div>
          <div className="text-center">
            <button
              className="px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 "
              onClick={() => sendCart()}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
