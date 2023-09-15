import React from "react";
import eventFormat from "../pictures/eventFormat.png";

const CartEvent = ({
  imgEvent,
  nameEvent,
  deleteEvent,
  eventToUpdate,
  description,
  events,
  setIsActive,
  isActive
}) => {
  return (
    <article
      className="w-[100%] md:w-[390px] font-garamond  h-[600px] text-white m-auto relative "
  
    >
      <img className="absolute w-full h-full -z-10" src={eventFormat} alt="" />
      <div className="w-full  p-2 text-center">
        <h3 className="font-redrose text-lg text-lime-500">{nameEvent}</h3>
        <img className="w-[80%] my-3 m-auto" src={imgEvent} alt="img" />
        <p>{description}</p>
      </div>
      <div className="absolute bottom-3 right-1/4 ">
        <button
          className="bg-red-600 px-3 rounded-md "
          onClick={() => deleteEvent(events.id)}
          type="button"
        >
          ELIMINAR
        </button>
        <button
          className="bg-slate-300 px-3 text-black rounded-md ml-2 "
          onClick={() => {eventToUpdate(events),setIsActive(!isActive)}}
          type="button"
        >
          ACTUALIZAR
        </button>
      </div>
    </article>
  );
};

export default CartEvent;
