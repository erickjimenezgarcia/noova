import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BodyContactanos from "./BodyContactanos";

export default function Contactanos() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
            <BodyContactanos />
        </main>
        <Footer />
    </div>
    );
}