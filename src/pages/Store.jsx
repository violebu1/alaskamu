import React, { useEffect, useState } from "react";
import useObtain from "../hooks/useObtain";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import mu from '../pictures/mu.jpg'
import picture4 from "../pictures/picture4.jpg";
import CartProduct from "../components/CartProduct";
const Store = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data, newPost, updateData, deleteData, obtainAllData } =
    useObtain(getAllProducts);
  const { register, handleSubmit, reset } = useForm();
  const [isActive, setIsActive] = useState(false);

  function valueDefault() {
    return reset({
      img: "",
      nameItem: "",
      price: "",
      description: "",
    });
  }

  function getAllProducts() {
    obtainAllData("http://localhost:3000/alaskamu/products");
  }

  const createProduct = (data) => {
    newPost(`http://localhost:3000/alaskamu/products`, data);
    valueDefault();
    setIsActive(!isActive)
  };

  const deleteProduct = (id) => {
    deleteData(`http://localhost:3000/alaskamu/products/${id}`);
  };

  const updateProduct = (data) => {
    updateData(
      `http://localhost:3000/alaskamu/products/${selectedProduct}`,
      data
    );
    setSelectedProduct(null);
    valueDefault();
  };

  const sendRegister = (data) => {
    if (selectedProduct) {
      return updateProduct(data);
    } else {
      createProduct(data);
    }
  };

  const obtainProductSelected = (product) => {
    reset(product);
    setSelectedProduct(product.id);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <img
        className="w-full absolute -z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        src={mu}
        alt="img"
      />
      <div className="w-full h-[15vh]"></div>

      <section className="w-[90%]  z-20  m-auto">
        <button
          onClick={() => setIsActive(!isActive)}
          className="font-redrose p-1 my-3 bg-lime-500 rounded-md"
        >
          AGREGAR PRODUCTO
        </button>

        {isActive && (
          <form
            className="absolute z-20 top-0 right-0 bottom-0 left-0 h-fit  w-[90%] bg-stone-600 rounded-md px-2 py-5 max-w-md m-auto"
            onSubmit={handleSubmit(sendRegister)}
          >
            <div>
              <input
                placeholder="Imagen"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("img")}
              />
            </div>
            <div>
              <input
                placeholder="Nombre del producto"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("nameItem")}
              />
            </div>
            <div>
              <input
                placeholder="Precio"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("price")}
              />
            </div>
            <div>
              <input
                placeholder="Descripción"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("description")}
              />
            </div>
            <button className="font-redrose w-full p-2 bg-lime-500 my-1 rounded-md">
            CREAR PRODUCTO
            </button>
            <button
            type="button"
            onClick={()=>setIsActive(!isActive)}
            className="font-redrose bg-emerald-600 w-full p-2  my-1 rounded-md">
            CANCELAR
            </button>
          </form>
        )}
      
      </section>

      <div
      
      className="w-full max-w-4xl   grid z-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 m-auto">
          {data.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
    </>
  );
};

export default Store;
