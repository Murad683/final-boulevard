import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked
      });
    }
  }, []);

  const videoSrc = "/videos/atmosphere-2.mp4";

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-secondary">
      {/* Video Background */}
      <div className="absolute inset-0 lg:hidden">
        <video
          key={videoSrc}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Fallback background color */}
        <div
          className={`absolute inset-0 bg-secondary transition-opacity duration-700 pointer-events-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-premium text-center">
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <span className="inline-block text-primary uppercase tracking-[0.3em] text-sm mb-6 font-medium">
              Premium Azərbaycan Restoranı
            </span>
          </div>

          <h1
            className="text-display text-cream mb-8 opacity-0 animate-fade-up font-extralight"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            Ənənəvi Zövqün
            <br />
            <span className="text-primary">Müasir Təqdimatı</span>
          </h1>

          <p
            className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            Boulevard 1909 - Azərbaycan mətbəxinin incə dadlarını müasir dünya
            standartları ilə birləşdirən unikal məkan.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
          >
            <Link to="/rezervasiya" className="btn-primary">
              Rezervasiya Et
            </Link>
            <Link to="/menu" className="btn-secondary">
              Menyunu Aç
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
        style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
