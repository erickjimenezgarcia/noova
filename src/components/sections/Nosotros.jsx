import { useState, useEffect  } from "react";





export default function Nosotros() {

  

  const [open, setOpen] = useState(false);

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  return (
    <section id="nosotros" className="py-10 bg-white">
      <div className="wrapper">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-primary-800 mb-4 text-center">
              ¿QUIÉNES SOMOS?
            </h2>

            <p className="text-neutral-600 mb-6 leading-relaxed">
              Brindamos servicios integrales a minas subterráneas.
              Especialistas en Ventilación de Minas, Bombeo y Drenaje de aguas
              subterráneas, Auditorías Internas, Homologación y Certificación.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                ✔️ Más de 14 años de experiencia
              </li>
              <li className="flex items-center gap-2">
                ✔️ El Compromiso Social es pieza fundamental
              </li>
              <li className="flex items-center gap-2">
                ✔️ Minería Sustentable y compromiso ambiental
              </li>
            </ul>

            <a
  href="#"
  className="group bg-primary-800 text-white py-3 px-8 rounded-full
             flex items-center justify-center gap-2 duration-300
             hover:bg-primary-700
             w-fit mx-auto md:mx-0"
>
  VER MÁS
</a>
          </div>

          <div className="relative cursor-pointer" onClick={() => setOpen(true)}>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
            <img
              src="video.png"
              alt=""
              className="w-full h-full object-cover"
            />       
            </div>    
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          
          <div className="relative w-[80%] ">

            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl cursor-pointer"
            >
              ✕
            </button>

            <div className="aspect-video">
  <video
    className="w-full h-full rounded-lg"
    src="https://noovasac.com/wp-content/uploads/2024/03/Video-Corporativo-2022.mp4"
    controls
    autoPlay
  />
</div>
          </div>
        </div>
      )}
    </section>
  );
}