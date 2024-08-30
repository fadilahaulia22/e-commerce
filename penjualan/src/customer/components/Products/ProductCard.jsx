import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={products.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{products.brand}</p>
          <p>{products.title}</p>
          <p>{products.color}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">IDR{products.discountedPrice}</p>
          <p className="line-through opacity-50">IDR{products.price}</p>
          <p className="text-green-600 font-semibold">{products.discountPresent}% off</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
