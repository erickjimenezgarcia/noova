import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BodyTerminos from "./BodyTerminos";

export default function TerminosPage() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
            <BodyTerminos />
        </main>
        <Footer />
    </div>
    );
}