import React, { useRef } from "react";
import mu from "../pictures/mu.mp4";
import mufont from '../pictures/mufont.jpg'
import picture2 from '../pictures/picture2.png'
import picture3 from "../pictures/picture3.jpg";
import multijugador from '../pictures/multijugador.png'
import alaskalogo from '../pictures/alaskalogo.png'
import { Link } from "react-router-dom";
import CartImage from "../components/CartImage";
import Footer from "../components/Footer";

const Hom = () => {
  const videoRef = useRef(null);
  function handleEnded() {
    videoRef.current.play();
  }

  return (
    <>
      <section className="w-full h-screen md:h-fit m-auto max-w-[2020px]">
        <video
          className="w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          autoPlay
          muted
          onEnded={handleEnded}
          ref={videoRef}
        >
          <source src={mu} type="video/mp4" />
        </video>
        <article className="w-full text-white relative  md:absolute md:top-24 lg:top-52 ">
          <img
            className="absolute -z-10 w-full opacity-10 top-0 md:hidden"
            src={picture3}
            alt="img"
          />
          <div className="py-7 px-4 text-center md:text-left md:p-2 md:absolute  ">
          <h2 className="text-emerald-400 font-redrose font-bold text-base md:hidden">
            SERVIDOR PERSONALIZADO{" "}
          </h2>
          <h3 className="font-bangers text-3xl md:text-4xl lg:text-6xl ">AlaskaMu</h3>
          <p className="font-redrose text-sm md:text-lg lg:text-xl">
            ¡Libera tus habilidades en el campo de batalla!
          </p>
          <button className="font-redrose bg-lime-500 p-2 rounded-md mt-10">
          <Link
              to={"https://www.mediafire.com/file/njub9s8mbvkegp1/AlaskaMU_2023.rar/file"}>
              DESCARGA AHORA
            </Link>
          </button>
          </div>
        </article>
        <img className="m-auto relative -top-10  -rotate-12 rounded-md md:hidden" src={multijugador} alt="" />
      </section>
      <section className="w-full  text-white relative max-w-[2020px] m-auto shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ">
        <img 
        className="w-full absolute top-0 opacity-20 -z-10"
        src={mufont} alt="" />
        <article className="flex items-center px-2">

        <div className="w-1/2 z-10  ">
            <img src={picture2} className="w-[80%]" alt="" />
        </div>
        <div className="w-1/2  text-sm text-center  font-redrose md:text-lg lg:text-2xl lg:p-10">
        <p>¡ Forma parte de una comunidad de jugadores apasionados en el  servidor de <span className="text-blue-600 font-bold">AlaskaMu</span> !</p>
        <img className="w-1/2 m-auto" src={alaskalogo} alt="" />
        </div>
        </article>
      </section>
      <section className="w-fulltext-white  my-7 m-auto max-w-[2020px] p-4">
        <h3 className="font-redrose pb-2 text-emerald-400 text-xl lg:text-2xl">¡La aventura no para!</h3>
        <div className="font-redrose text-yellow-300 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 text-center w-fit  m-auto ">

          <CartImage url="https://wiki.infinitymu.net/images/1/1d/Bk-CS-skill-1.gif" frase='Grandes batallas' />
          <CartImage url="https://media.tenor.com/9aBOZRuVBnMAAAAC/mu-online-swell-life.gif" frase='Domina el juego' />
          <CartImage url="https://wiki.infinitymu.net/images/d/d6/Mg-power-slash.gif" frase='Eventos imperdibles' />
          <CartImage url="https://media.tenor.com/bOb2BhRmO9kAAAAC/mu-online-bk.gif" frase=' Diversión' />
        </div>
      </section>


      <Footer/>
    </>
  );
};

export default Hom;
