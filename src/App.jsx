import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Hom from "./pages/Hom";
import Events from "./pages/Events";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Store from "./pages/Store";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Hom />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/myprofile" element={<UserProfile/>} />
          </Route>
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
