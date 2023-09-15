import React from "react";
import sale from "../pictures/sale.png";

const CartProduct = ({ product, deleteProduct, obtainProductSelected }) => {
  return (
    <>
      <div className="text-center relative   m-auto  w-44 h-52  text-white">
        <img className="absolute top-0" src={sale} alt="" />
        <img className="w-[70%] m-auto mt-5" src={product.img} alt="" />
        <p className="text-lime-500">{product.price}$</p>
        <p className="font-bold text-zinc-100">{product.nameItem}</p>
      </div>
    </>
  );
};

export default CartProduct;
