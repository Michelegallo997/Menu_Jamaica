export const LanguageSwitcher = ({ language, setLanguage }) => (
  <div className="fixed z-50 top-4 right-4 flex gap-2 bg-black/80 backdrop-blur-sm p-2 rounded-full shadow-xl border border-gray-700">
    <button
      onClick={() => setLanguage('es')}
      className={`w-10 h-10 flex items-center justify-center rounded-full ${
        language === 'es' ? 'bg-amber-600 text-white' : 'bg-gray-800 text-gray-300'
      } transition-colors font-bold`}
    >
      ES
    </button>
    <button
      onClick={() => setLanguage('en')}
      className={`w-10 h-10 flex items-center justify-center rounded-full ${
        language === 'en' ? 'bg-amber-600 text-white' : 'bg-gray-800 text-gray-300'
      } transition-colors font-bold`}
    >
      EN
    </button>
    <button
      onClick={() => setLanguage('de')}
      className={`w-10 h-10 flex items-center justify-center rounded-full ${
        language === 'de' ? 'bg-amber-600 text-white' : 'bg-gray-800 text-gray-300'
      } transition-colors font-bold`}
    >
      DE
    </button>
  </div>
);