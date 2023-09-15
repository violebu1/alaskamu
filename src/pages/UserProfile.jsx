import axios from "axios";
import perfil from "../pictures/perfil.jpg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/geUser.slice";
import { setPermiss } from "../store/slices/permiss.slice";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const user = useSelector((state) => state.setUser);
  const dispatch = useDispatch();
  const  navigate=useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:3000/alaskamu/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => dispatch(setUser(res.data)))
      .catch((err) => {
        console.log(err);
      });
    user.role == "admin"
      ? dispatch(setPermiss(true))
      : dispatch(setPermiss(false));
  }, []);

  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate('/')
    
  };

  return (
    <>
      <img className="w-full absolute -z-20 shadow-[0px_20px_34px_10px_#000000]" src={perfil} alt="" />

      <div className="w-full h-[15vh]"></div>

      <section className="bg-slate-800 rounded-md flex  w-[90%] max-w-[1000px]  m-auto p-2 ">
      <h2 className="text-lg font-redrose md:text-2xl">Bienvenido a tu espacio <span className="text-lime-500"> {user.name}</span> </h2>
      <button 
      onClick={handleLogout}
      className="bg-red-500 p-1 rounded-md ml-auto">cerrar sesion</button>
      </section>

    </>
  );
};

export default UserProfile;
