import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar         from "./components/layout/Navbar";
import Footer         from "./components/layout/Footer";
import Hero           from "./components/sections/Hero";
import Nosotros       from "./components/sections/Nosotros";
import Servicios      from "./components/sections/Servicios";
import Proyectos      from "./components/sections/Proyectos";
import Historia       from "./components/sections/Historia";
import Clientes       from "./components/sections/Clientes";
import Aliados        from "./components/sections/Aliados";
import ContactoInicio from "./components/sections/ContactoInicio";
import NoticiasInicio from "./components/sections/NoticiasInicio";
import WhatsAppButton from "./components/layout/WhatsappButton";



// Páginas
import AcercaNosotros from "./pages/AcercaNosotros";
import Contactanos from "./pages/Contactanos";
import Productos from "./pages/Productos";
import ProyectosPage from "./pages/ProyectosPage";
import ServiciosPage from "./pages/ServiciosPage";
import TerminosPage from "./pages/TerminosPage";
import PoliticasPage from "./pages/PoliticasPage";
import CatalogoPage from "./pages/CatalogoPage";
import ProyectosSlugPage from "./pages/ProyectosSlugPage";
import ProductosSlugPage from "./pages/ProductosSlugPage";


function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Nosotros />
        <Historia />
        <Proyectos />
        <Clientes />
        <Aliados />
        {/* <NoticiasInicio /> */}
        <ContactoInicio />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <WhatsAppButton />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/acerca-nosotros"   element={<AcercaNosotros />} />
        <Route path="/contactanos"   element={<Contactanos />} />
        <Route path="/productos"   element={<Productos />} />
        <Route path="/productos/:slug"   element={<ProductosSlugPage />} />
        <Route path="/proyectos"   element={<ProyectosPage />} />
        <Route path="/proyectos/:slug"   element={<ProyectosSlugPage />} />
        <Route path="/servicios"   element={<ServiciosPage />} />
        <Route path="/terminos"   element={<TerminosPage />} />
        <Route path="/politicas"   element={<PoliticasPage />} />
        <Route path="/servicios/:slug" element={<CatalogoPage />} />
        
        {/* <Route path="/servicios"     element={<PaginaServicios />} /> */}
        {/* <Route path="/proyectos"     element={<PaginaProyectos />} /> */}
      </Routes>
    </BrowserRouter>
  );
}