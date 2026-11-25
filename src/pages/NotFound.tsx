
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-sano-light-blue/20 p-6">
      <div className="glass-card rounded-2xl p-12 max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sano-light-blue mb-6">
          <span className="text-4xl font-bold text-sano-blue">404</span>
        </div>
        <h1 className="text-3xl font-bold text-sano-blue mb-4">Page non trouvée</h1>
        <p className="text-sano-blue/70 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-gradient-to-r from-sano-blue to-sano-green text-white px-6 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
        >
          <ArrowLeft size={16} className="mr-2" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
