import React from "react";

function Checkout({ visible, onClose }) {
  const handleOnClose = (e) => {
    if(e.target.id === 'container') onClose();
  };

  if (!visible) return null;
  return (
    <div
    id='container'
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
              type="text"
              className="border border-orange-500 p-2 rounded mb-5"
              placeholder="Enter Address"
            />
            <input
              type="text"
              className="border border-orange-500 p-2 rounded mb-5"
              placeholder="Enter Telephone"
            />
          </div>
          <div className="text-center">
            <button className="px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 " onClick={onClose}>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
