import { Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-saffron-200 bg-white p-1">
      <Languages size={16} className="ml-2 text-saffron-600" />

      <button
        onClick={() => changeLanguage("hi")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === "hi"
            ? "bg-saffron-500 text-white"
            : "text-spiritual-brown hover:bg-saffron-50"
        }`}
      >
        हिन्दी
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === "en"
            ? "bg-saffron-500 text-white"
            : "text-spiritual-brown hover:bg-saffron-50"
        }`}
      >
        English
      </button>
    </div>
  );
}
