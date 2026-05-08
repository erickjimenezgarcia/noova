import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactoInicio from "../components/sections/ContactoInicio";
import BodyNosotros from "../pages/BodyNosotros";

export default function AcercaNosotros() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <BodyNosotros />
        <ContactoInicio />
      </main>
      <Footer />
    </div>
  );
}
