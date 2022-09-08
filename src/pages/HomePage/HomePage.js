import { Outlet } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Caroussel";
import NavBar from "../../components/NavBar/NavBar"

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Carrousel />
      </header>
      <Outlet />
    </div>
  );
}