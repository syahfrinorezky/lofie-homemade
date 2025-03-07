import { useState, useEffect } from "react";
import { ArrowUpIcon } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark cursor-pointer transition-transform duration-300 hover:brightness-50 animate-bounce focus:outline-none">
          <ArrowUpIcon className="w-6 h-6 md:w-9 md:h-9" />
        </button>
      )}
    </div>
  );
}
