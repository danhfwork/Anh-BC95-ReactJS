import React, { useState } from "react";

const BTCar = () => {
  const [imgSrc, setImgSrc] = useState("img/red-car.jpg");
  const handleChangeImgSrc = (color) => {
    setImgSrc(`img/${color}-car.jpg`);
  };
  return (
    <div className="mt-10">
      <h1>Bài tập Car</h1>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <img className="w-full" src={imgSrc} alt="" />
        </div>
        <div className="col-span-6 space-x-4">
          <button
            className="bg-red-500 px-3 py-2 text-white"
            onClick={() => {
              handleChangeImgSrc('red');
            }}
          >
            Red
          </button>
          <button
            className="bg-black px-3 py-2 text-white"
            onClick={() => {
              handleChangeImgSrc('black');
            }}
          >
            Black
          </button>
          <button
            className="bg-gray-500 px-3 py-2 text-white"
            onClick={() => {
              handleChangeImgSrc("silver");
            }}
          >
            Silver
          </button>
          <button
            className="bg-gray-700 px-3 py-2 text-white"
            onClick={() => {
              handleChangeImgSrc("steel");
            }}
          >
            Steel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BTCar;
