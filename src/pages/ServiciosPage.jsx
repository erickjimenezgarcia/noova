import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BodyServicios from "./BodyServicios";
import HeroBanner from "../components/layout/HeroBanner";

export default function ServiciosPage() {

    const SLIDES = [
        { img: "/contactanos.png", title: "Servicios" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <HeroBanner slides={SLIDES} />
                    <BodyServicios />
                </main>
                <Footer />
        </div>
    );
}