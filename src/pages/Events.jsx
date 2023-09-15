import React, { useEffect, useState } from "react";
import picture3 from "../pictures/picture3.jpg";
import { useForm } from "react-hook-form";
import { setEvents } from "../store/slices/event.slice";
import { useDispatch, useSelector } from "react-redux";
import useObtain from "../hooks/useObtain";
import CartEvent from "../components/cartEvent";
const Events = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const {
    newPost,
    data: events,
    deleteData,
    updateData,
    obtainAllData,
  } = useObtain(getAllEvents);

  function defaulValues() {
    return reset({
      nameEvent: "",
      dateInit: "",
      dateFinish: "",
      descriptionEvent: "",
      imgEvent: "",
    });
  }

  function getAllEvents() {
    obtainAllData(`http://localhost:3000/alaskamu/events`);
  }
  const addEvent = (data) => {
    newPost(`http://localhost:3000/alaskamu/events`, data);
    defaulValues();
  };
  const updateEvent = (data) => {
    updateData(`http://localhost:3000/alaskamu/events/${selectedEvent}`, data);
    defaulValues();
    setSelectedEvent(null);
  };
  const deleteEvent = (id) => {
    deleteData(`http://localhost:3000/alaskamu/events/${id}`);
  };
  const sendRegister = (data) => {
    console.log(data)
    if (selectedEvent) {
      return updateEvent(data);
    } else {
      addEvent(data);
    }  
      setIsActive(!isActive);
  
  };

  const eventToUpdate = (data) => {
    reset(data);
    if (!isActive) {
      setIsActive(!isActive);
    }
    setSelectedEvent(data.id);
  };

  const cancelEvent=()=>{
    setIsActive(!isActive)
    defaulValues()
  }

  useEffect(() => {
    getAllEvents();
  }, []);

  

  dispatch(setEvents(events));


  return (
    <>
      <section className="w-full  ">
        <img
          className="absolute -z-20 w-full opacity-50 shadow-[0px_20px_34px_10px_#000000]  "
          src={picture3}
          alt=""
        />
        <div className="pt-[23vh] "></div>
      

        <button
          onClick={() => setIsActive(!isActive)}
          className="font-redrose mx-2 absolute top-[15vh] bg-lime-500 rounded-md p-1"
        >
          AGREGAR EVENTO
        </button>
        {isActive && (

          <form
            className="absolute z-20 top-0 right-0 bottom-0 left-0 h-fit  w-[90%] bg-stone-600 rounded-md px-2 py-5 max-w-md m-auto"
            onSubmit={handleSubmit(sendRegister)}
          >
            <div>
              <input
                className="w-full p-2 outline-none my-1 rounded-md"
                placeholder="Nombre de evento"
                type="text"
                {...register("nameEvent")}
              />
            </div>
            <div>
              <input
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("dateInit")}
                placeholder="Fecha de inicio"
              />
            </div>
            <div>
              <input
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                placeholder="Fecha de finalización"
                {...register("dateFinish")}
              />
            </div>
            <div>
              <input
                className="w-full p-2 outline-none my-1 rounded-md"
                placeholder="Descripción del Evento"
                type="text"
                {...register("descriptionEvent")}
              />
            </div>
            <div>
              <input
                className="w-full p-2 outline-none my-1 rounded-md"
                placeholder="Imagen"
                type="text"
                {...register("imgEvent")}
              />
            </div>
            <button
            className="font-redrose bg-lime-500 w-full p-2  my-1 rounded-md">
             { selectedEvent?"actualizar": "CREAR EVENTO"}
            </button>
            <button
            type="button"
              onClick={() => cancelEvent()}
              className="font-redrose bg-emerald-600 w-full p-2  my-1 rounded-md"
            >
              CANCELAR
            </button>
        
          </form>
        )}  
      </section>
      
      <section className=" m-auto  ">
          <div className=" w-fit max-w-[1200px] m-auto md:grid md:grid-cols-2 lg:gap-15 xl:grid-cols-3 gap-5  ">
            {events.map((events) => (
              <CartEvent
                key={events.id}
                nameEvent={events.nameEvent}
                imgEvent={events.imgEvent}
                description={events.descriptionEvent}
                deleteEvent={deleteEvent}
                eventToUpdate={eventToUpdate}
                setIsActive={setIsActive}
                events={events}
                isActive={isActive}
              />
            ))}
          </div>
        </section>
    </>
  );
};

export default Events;
