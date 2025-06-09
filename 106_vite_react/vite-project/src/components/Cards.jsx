import React from 'react';

const Cards = ({ title, disc }) => {
  return (
    <div className="w-72 bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <img
        className="w-full h-40 object-cover"
        src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-69266,resizemode-75,msid-106774994/industry/auto/cars-uvs/super-sports-car-segment-in-india-to-register-30-pc-growth-this-year-mclaren-automotive.jpg"
        alt="car"
      />
      <div className="p-4">
        <h1 className="text-lg font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-700">{disc}</p>
      </div>
    </div>
  );
};

export default Cards;
