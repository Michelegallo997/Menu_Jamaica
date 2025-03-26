export const MenuFooter = ({ language }) => (
  <footer className="mt-24 py-12 bg-gradient-to-b from-gray-900 to-black border-t border-amber-900/50">
    <div className="max-w-4xl mx-auto px-6">
      {/* Logo y marca */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 bg-amber-500/90 rounded-full flex items-center justify-center mb-4 
                       shadow-[0_0_20px_rgba(217,119,6,0.5)] rotate-3">
          <i className="fa-solid fa-utensils text-3xl text-black"></i>
        </div>
        <h3 className="text-3xl font-serif font-bold text-amber-400 tracking-wider">JAMAICA BAR</h3>
        <p className="text-amber-300/80 mt-2 font-light uppercase text-sm tracking-widest">
          {language === 'es' ? 'GASTRONOMÍA & COCTELERÍA' : 'GASTRONOMY & MIXOLOGY'}
        </p>
      </div>

      {/* Info contacto */}
      <div className="grid md:grid-cols-3 gap-8 text-center text-gray-300 mb-12">
        <div className="space-y-3">
          <i className="fa-solid fa-location-dot text-amber-400 text-2xl"></i>
          <p className="font-light">C/ Binicanella 16</p>
          <p className="font-light opacity-80">Calamilor</p>
        </div>
        
        <div className="space-y-3">
          <i className="fa-solid fa-phone-flip text-amber-400 text-2xl"></i>
          <a href="tel:655924594" className="block text-lg font-medium hover:text-amber-300 transition-colors">
            655 924 594
          </a>
          <p className="text-xs text-amber-500/80">{language === 'es' ? 'RESERVAS' : 'BOOKINGS'}</p>
        </div>
        
        <div className="space-y-3">
          <i className="fa-brands fa-instagram text-amber-400 text-2xl" ></i>
          <a 
            href="https://www.instagram.com/barjamaica1984?igsh=emUzaGxhZDZhNmhr" 
            target="_blank" 
            rel="noreferrer"
            className="block text-lg font-medium hover:text-amber-300 transition-colors"
          >
            @barjamnica1984
          </a>
          <p className="text-xs text-amber-500/80">{language === 'es' ? 'SÍGUENOS' : 'FOLLOW US'}</p>
        </div>
      </div>

      {/* Horario */}
      <div className="bg-black/40 p-5 rounded-xl max-w-md mx-auto mb-12 border border-amber-900/30">
        <p className="text-center text-amber-400 font-serif tracking-wider mb-2">
          <i className="fa-regular fa-clock mr-2"></i>
          {language === 'es' ? 'HORARIO' : 'HOURS'}
        </p>
        <p className="text-center text-gray-300 font-light">
          {language === 'es' 
            ? 'Lunes a Domingo · 12:00 - 00:00' 
            : 'Monday - Sunday · 12:00 - 00:00'}
        </p>
      </div>

      {/* Créditos */}
      <div className="pt-6 border-t border-amber-900/30 text-center">
        <p className="text-xs text-gray-500 mb-2 tracking-wider">
          © {new Date().getFullYear()} JAMAICA BAR · {language === 'es' ? 'TODOS LOS DERECHOS RESERVADOS' : 'ALL RIGHTS RESERVED'}
        </p>
        <p className="text-xs text-gray-600">
          {language === 'es' ? 'DISEÑADO POR' : 'DESIGNED BY'}{' '}
          <a 
            href="https://www.linkedin.com/in/michelegiovannygallo/" 
            target="_blank" 
            rel="noreferrer"
            className="text-amber-500 hover:underline font-medium"
          >
            MICHELE GALLO
          </a>
        </p>
      </div>
    </div>
  </footer>
);