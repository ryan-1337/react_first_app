import { Outlet } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Caroussel";
import InfoSection from "../../components/InfoSection/InfoSection";
import NavBar from "../../components/NavBar/NavBar"

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Carrousel />
      </header>
      <section id="info-section" class="m-5">
        <InfoSection />
      </section>
      <Outlet />
    </div>
  );
}