export default function WhatsAppButton() {
  const phoneNumber = "51999999999"; // 👈 Tu número
  const message = "Hola, me gustaría obtener más información.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.88.52 3.638 1.428 5.144L2 22l4.987-1.407A9.952 9.952 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm.001 18.25a8.228 8.228 0 0 1-4.195-1.148l-.3-.178-3.124.882.914-3.044-.196-.312A8.22 8.22 0 0 1 3.75 12C3.75 7.444 7.444 3.75 12 3.75S20.25 7.444 20.25 12 16.556 20.25 12 20.25zm4.51-5.907c-.247-.124-1.462-.72-1.689-.803-.226-.082-.39-.124-.555.124-.165.247-.638.803-.783.968-.144.165-.288.185-.535.062-.247-.124-1.042-.384-1.984-1.225-.733-.654-1.228-1.463-1.372-1.71-.144-.247-.015-.38.108-.503.111-.11.247-.288.37-.432.124-.144.165-.247.247-.411.082-.165.041-.309-.021-.432-.062-.124-.555-1.34-.76-1.834-.2-.482-.405-.416-.555-.424l-.473-.008a.908.908 0 0 0-.658.309c-.226.247-.864.844-.864 2.059 0 1.215.885 2.388 1.008 2.552.124.165 1.74 2.657 4.217 3.727.59.254 1.05.406 1.408.52.592.188 1.13.162 1.556.098.475-.07 1.462-.597 1.668-1.174.206-.576.206-1.07.144-1.173-.062-.103-.226-.165-.473-.288z"/>
      </svg>
    </a>
  );
}