import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Clock, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container-premium">
          <div
            ref={headerRef}
            className="text-center opacity-0 translate-y-8"
          >
            <span className="inline-block text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Bizimlə Əlaqə
            </span>
            <h1 className="text-display text-cream mb-6">Əlaqə</h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Suallarınız, təklifləriniz və ya rezervasiya üçün bizimlə əlaqə
              saxlayın.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div
            ref={contentRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 opacity-0 translate-y-8"
          >
            {/* Contact Info */}
            <div className="space-y-10">
              {/* Address */}
              <div className="card-premium p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      Ünvan
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      15 Ahad Yaqubov küçəsi,
                      <br />
                      Bakı, Azərbaycan AZ1003
                      <br />
                      <span className="text-sm">
                        (Su İdman Sarayının yaxınlığı, Yeni Bulvar)
                      </span>
                    </p>
                    <a
                      href="https://maps.app.goo.gl/qfKCM3rH9NjtdiQi7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline mt-3 text-sm font-medium"
                    >
                      Google Xəritədə bax
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card-premium p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      Telefon
                    </h3>
                    <a
                      href="tel:+994101001909"
                      className="text-2xl font-display text-primary hover:underline"
                    >
                      (+994) 10 100 1909
                    </a>
                    <p className="text-muted-foreground text-sm mt-2">
                      Rezervasiya və məlumat üçün
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card-premium p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-4">
                      İş Saatları
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Bazar ertəsi - Cümə</span>
                        <span className="font-medium text-foreground">
                          08:00 - 00:00
                        </span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Şənbə - Bazar</span>
                        <span className="font-medium text-foreground">
                          08:00 - 00:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="card-premium p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/boulevard1909/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary hover:underline"
                    >
                      @boulevard1909
                    </a>
                    <p className="text-muted-foreground text-sm mt-2">
                      Ən son yenilikləri izləyin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-full min-h-[500px]">
              <div className="card-premium p-0 overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.22986456742!2d49.8332816754788!3d40.33724656047392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307f00779bad09%3A0x8c410e1ffe7372fd!2sRestaurant%20Boulevard!5e0!3m2!1saz!2saz!4v1765280630918!5m2!1saz!2saz"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boulevard 1909 Lokasiya"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
