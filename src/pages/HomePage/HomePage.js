import { Outlet } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Caroussel";
import Formula from "../../components/Formula/Formula";
import InfoSection from "../../components/InfoSection/InfoSection";
import NavBar from "../../components/NavBar/NavBar"
import Review from "../../components/Review/Review";

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Carrousel />
      </header>
      <div className="wrapper mx-5">
      <section id="info-section" className="m-5">
        <InfoSection />
      </section>
      <section id="formula">
        <Formula />
      </section>
      </div>
      <section id="review" className="bg-secondary">
        <Review />
      </section>
      <Outlet />
    </div>
  );
}