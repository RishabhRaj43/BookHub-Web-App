import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="relative w-80 h-80 overflow-hidden bg-base-100 shadow-lg rounded-3xl hover:scale-105 duration-200">
      <div className="absolute inset-0">
        <img
          src={data.image}
          alt={data.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4 text-white rounded-3xl">
        <div className="relative z-10">
          <h2 className="card-title text-lg font-semibold">{data.name}</h2>
          <p>{data.title}</p>
          <div className="card-actions mt-2">
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
