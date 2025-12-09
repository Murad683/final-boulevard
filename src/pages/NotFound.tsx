import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="text-center px-6">
        <span className="text-primary text-8xl md:text-9xl font-display block mb-4">
          404
        </span>
        <h1 className="text-3xl md:text-4xl font-display text-cream mb-4">
          Səhifə Tapılmadı
        </h1>
        <p className="text-cream/70 mb-8 max-w-md mx-auto">
          Axtardığınız səhifə mövcud deyil və ya köçürülmüş ola bilər.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={18} />
          Ana Səhifəyə Qayıt
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
