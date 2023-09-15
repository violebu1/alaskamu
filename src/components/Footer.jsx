import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="shadow-[0px_-11px_59px_17px_#000000] bg-black w-full h-64 md:h-72  text-slate-400 p-4 text-center  md:grid md:grid-cols-3 items-center m-auto max-w-[2020px]">
      <p className="font-redrose mb-5 md:m-0">
        Servidor privado de Mu Online v0.97z (basada en 0.97d, con
        modificaciones propias) | Exp 400x | Drop 40% | Zen bug OFF
      </p>
      <Link to={'https://www.facebook.com/profile.php?id=61550056767192'}>
      <div className="font-redrose flex items-center w-fit m-auto cursor-pointer ">
        <img
          className="w-6 mx-2 md:mb-0"
          src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
          alt=""
          />{" "}
        <p>AlaskaMu</p>
      </div>
      </Link>
      <p className="font-redrose mb-5 md:m-0">
      alaskamu.online © 2023 Nosotros hacemos la diferencia.
      </p>
    </footer>
  );
};

export default Footer;
