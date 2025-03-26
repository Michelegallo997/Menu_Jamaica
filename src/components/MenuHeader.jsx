import logo from '../assets/Jamaica-logo.png';

export const MenuHeader = ({ language }) => {
  const headerTexts = {
    title: {
      es: "JAMAICA BAR",
      en: "JAMAICA BAR", 
      de: "JAMAICA BAR"
    },
    subtitle: {
      es: "MENÚ",
      en: "MENU",
      de: "KARTE"
    }
  };

  const handleLogoClick = () => {
    window.scrollBy({
      top: 400, // Desplaza 200px hacia abajo
      behavior: 'smooth' // Efecto de scroll suave
    });
  };

  return (
    <header className="text-center mb-16">
      {/* Contenedor del logo con efecto click */}
      <div 
        className="flex justify-center mb-6 cursor-pointer"
        onClick={handleLogoClick}
      >
        <div className="relative group transition-all">
          <img 
            src={logo}
            alt="Jamaica Bar Logo"
            className="
              w-[395px] h-[395px]
              transition-transform duration-300 
              hover:scale-110
              active:scale-95  // Efecto al hacer clic
            "
          />
          {/* Efecto visual de "click" (opcional) */}
        
        </div>
      </div>

      {/* Título principal */}
      <h1 className="text-6xl font-bold mb-2 tracking-tighter text-amber-500">
        {headerTexts.title[language]}
      </h1>

      {/* Línea decorativa */}
      <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4"></div>

      {/* Subtítulo */}
      <h2 className="text-3xl font-light text-gray-300">
        {headerTexts.subtitle[language]}
      </h2>
    </header>
  );
};