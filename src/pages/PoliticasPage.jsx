import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BodyPoliticas from "./BodyPoliticas";

export default function PoliticasPage() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
            <BodyPoliticas />
        </main>
        <Footer />
    </div>
    );
}