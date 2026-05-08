import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Proyectos from "../components/sections/Proyectos";
import HeroBanner from "../components/layout/HeroBanner";

const SLIDES = [
    { img: "/contactanos.png", title: "Proyectos" },
];

export default function ProyectosPage() {
    

    return (
        <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <HeroBanner slides={SLIDES} />
                    <Proyectos />
                </main>
                <Footer />
        </div>
    );
}