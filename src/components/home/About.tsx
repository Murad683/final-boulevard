import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center opacity-0 translate-y-8"
        >
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/atmosphere-4.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl border border-primary/20 -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Haqqımızda
            </span>
            <h2 className="text-heading text-foreground mb-8">
              Tarixə Hörmət,
              <br />
              <span className="text-primary">Gələcəyə Baxış</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Boulevard 1909, Yeni Bulvarda yerləşən, ənənəvi Azərbaycan
                mətbəxini müasir kulinariya sənəti ilə birləşdirən premium
                restoran konseptimizdir.
              </p>
              <p>
                Hər bir yeməyimiz, əsrlik reseptlərin incəliklərini qoruyaraq,
                müasir təqdimat üsulları ilə hazırlanır. Atmosferimiz isə
                rahatlıq, zəriflik və memarlıq estetikasının vəhdətidir.
              </p>
              <p>
                Bizim məqsədimiz - qonaqlara sadəcə yemək deyil, unudulmaz
                bir təcrübə yaşatmaqdır.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="block text-3xl md:text-4xl font-display text-primary mb-2">
                  50+
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Xüsusi Yemək
                </span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-display text-primary mb-2">
                  5★
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Reytinq
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
