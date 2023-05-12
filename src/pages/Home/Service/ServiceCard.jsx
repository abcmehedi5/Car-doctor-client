import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="card w-96 mx-auto border bg-base-100 p-2 mb-10">
      <figure>
        <img className="h-56 w-full" src={img} alt="product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-5 font-bold">{title}</h2>
        <div className="card-actions justify-end">
          <p className="text-red-700 font-bold">Price $ {price}</p>
          <div>
            <Link to={`/book/${_id}`}>
              <button className="btn btn-primary btn-sm">
                <FaArrowRight /> 
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
