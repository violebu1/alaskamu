import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import alaskalogo from '../pictures/alaskalogo.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { title: "EVENTOS", to:"/events"},
    {title:"TIENDA" ,to:"/store"},
    {title:"REGISTRO" ,to:"/login"},
    {title:"MI PERFIL" ,to:"/myprofile"}
  ];

  console.log(nav[0].to)
  return (
    <>
      <header className=" relative max-w-[2020px]">
        <nav className="flex z-20 items-center absolute px-2 py-1 lg:p-3 w-full  m-auto ">
          <Link to={"/"}>
            <img className="w-20 h-20"
            src={alaskalogo}
            />
            {/* <h1 className="font-redrose text-white text-2xl md:text-6xl">
              AlaskaMu
            </h1> */}
          </Link>
          <button className="text-2xl ml-auto md:hidden">
          <FontAwesomeIcon icon={faBars} style={{color: "#fafafa",}} />
          </button>
          <div className=" text-white ml-auto hidden md:flex gap-5 lg:gap-16 lg:pr-10">
            {nav.map((page) => (
              <Link key={page.title} to={page.to}>
                <ul className="text-lg">
                  <li className="font-redrose font-extrabold">{page.title}</li>
                </ul>
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
