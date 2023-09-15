import { useForm } from "react-hook-form";
import useObtain from "../hooks/useObtain";
import font from "../pictures/font.png";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import { useState } from "react";
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { newPost } = useObtain();
  const [initSesion, setInitSesion] = useState(true);

  const navigate = useNavigate();
  function valueDefault() {
    return reset({
      name: "",
      avatar: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      role: "normal",
    });
  }

  const addUser = (data) => {
    newPost(`http://localhost:3000/alaskamu/users`, data);
    valueDefault();
  };

  const sendRegister = (data) => {
    addUser(data);
  };

console.log(!!initSesion)
 
  return (
    <>
      <section className="w-full">
        <img
          className="w-full absolute -z-10 shadow-[0px_20px_34px_10px_#000000] "
          src={font}
          alt=""
        />

        {initSesion && (
          <form
            className="absolute z-20 top-0 right-0 bottom-0 left-0 h-fit  w-[90%]border-solid border rounded-md px-2 py-5 max-w-md m-auto"
            onSubmit={handleSubmit(sendRegister)}
          >
            <h3 className="text-xl font-redrose">REGISTRO</h3>
            <div>
              <input
                placeholder="Nombre"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("name")}
              />
            </div>
            <div>
              <input
                placeholder="Avatar"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("avatar")}
              />
            </div>
            <div>
              <input
                placeholder="Apellido"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("lastName")}
              />
            </div>
            <div>
              <input
                placeholder="Nombre del personaje"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="text"
                {...register("userName")}
              />
            </div>
            <div>
              <input
                placeholder="Email"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <input
                placeholder="Contraseña"
                className="w-full p-2 outline-none my-1 rounded-md"
                type="password"
                {...register("password")}
              />
            </div>
            <button className="font-redrose bg-red-500 w-full p-2 outline-none my-1 rounded-md">
              REGISTRARSE
            </button>
            <span className="font-redrose">Ya tienes una cuenta ?</span>

            <button
              type="button"
              onClick={() => setInitSesion(!initSesion)}
              className="font-redrose p-2 text-lime-500"
            >
              INICIAR SESION
            </button>
          </form>
        )}
      </section>

       
      {!initSesion?<SignIn setInitSesion={setInitSesion} initSesion={initSesion}/>:""}  
    </>
  );
};

export default Login;
