import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ReservationCTA = () => {
  const sectionRef = useScrollAnimation();
  const backgroundVideo = "/videos/atmosphere-3.mp4";

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary">
        <video
          key={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="container-premium relative z-10">
        <div
          ref={sectionRef}
          className="max-w-3xl opacity-0 translate-y-8"
        >
          <span className="inline-block text-primary uppercase tracking-[0.2em] text-sm mb-6 font-medium">
            Rezervasiya
          </span>
          <h2 className="text-heading text-cream mb-8">
            Unudulmaz Bir Axşam
            <br />
            <span className="text-primary">Üçün Yer Ayırın</span>
          </h2>
          <p className="text-cream/70 text-lg mb-10 leading-relaxed font-extralight">
            Xüsusi anlarınızı Boulevard 1909-da qeyd edin. Ən yaxşı masaları
            əvvəlcədən rezervasiya edərək, özünüzə uyğun vaxt seçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/rezervasiya" className="btn-primary w-full sm:w-auto max-w-[220px] text-center">
              Rezervasiya Et
            </Link>
            <a
              href="tel:+994101001909"
              className="btn-secondary w-full sm:w-auto max-w-[220px] text-center"
              aria-label="Zəng et"
            >
              Zəng Et
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-primary/10 hidden lg:block" />
      <div className="absolute bottom-1/4 right-20 w-32 h-32 rounded-full border border-primary/20 hidden lg:block" />
    </section>
  );
};

export default ReservationCTA;