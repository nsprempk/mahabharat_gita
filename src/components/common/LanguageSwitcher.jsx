import { Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-saffron-200 bg-white p-1 shadow-sm">
      <Languages size={18} className="ml-2 text-saffron-600" />

      <button
        type="button"
        onClick={() => changeLanguage("hi")}
        className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
          language === "hi"
            ? "bg-saffron-500 text-white"
            : "text-gray-600 hover:bg-saffron-50"
        }`}
      >
        हिंदी
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
          language === "en"
            ? "bg-saffron-500 text-white"
            : "text-gray-600 hover:bg-saffron-50"
        }`}
      >
        English
      </button>
    </div>
  );
}
