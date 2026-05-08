import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BodyProductos from "./BodyProductos";

export default function Productos() {
    return (
        <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <BodyProductos />
                </main>
                <Footer />
        </div>
    );
}