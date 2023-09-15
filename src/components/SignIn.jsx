import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignIn = ({setInitSesion,initSesion}) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const sendForm = (data) => {
    axios.post(`http://localhost:3000/alaskamu/auth`, data).then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/myprofile");
    });
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
  };

  return (
    <>
      <form
      className="absolute z-20 top-0 right-0 bottom-0 left-0 h-fit  w-[90%] borde rounded-md px-2 py-5 max-w-md m-auto"
      onSubmit={handleSubmit(sendForm)}>
        <div>
          <input 
          placeholder="Email"
          className="w-full p-2 outline-none my-1 rounded-md"
          type="email" {...register("email")} />
        </div>
        <div>
          <input 
          placeholder="Contraseña"
          className="w-full p-2 outline-none my-1 rounded-md"
          type="password" {...register("password")} />
        </div>
        <button 
        
        className=" font-redrose bg-lime-500 w-full p-2 outline-none my-1 rounded-md"
        >
          INICIAR SESIÓN
        </button>
        <button
        onClick={()=>setInitSesion(!initSesion)}
        type="button"
        className="font-redrose p-2  w-full outline-none my-1 rounded-md bg-red-500">CANCELAR</button>
      </form>

    </>
  );
};

export default SignIn;
