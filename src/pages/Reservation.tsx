import { useState } from "react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, Calendar, Clock, Users, User, Phone } from "lucide-react";

const Reservation = () => {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const message = `Salam! Rezervasiya etmək istəyirəm:

Ad / Soyad: ${formData.name}
Telefon: ${formData.phone}
Tarix: ${formData.date}
Saat: ${formData.time}
Şəxs sayı: ${formData.guests}`;

    // Encode and create WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/994101001909?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    // Show success state
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Masa Rezervasiyası
            </span>
            <h1 className="text-display text-cream mb-6">Rezervasiya</h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Xüsusi anlarınız üçün yer ayırın. Biz sizin üçün ən yaxşı
              təcrübəni yaratmağa hazırıq.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <div
                ref={formRef}
                className="card-surface p-8 md:p-12 opacity-0 translate-y-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                    >
                      Ad / Soyad
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={20}
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-premium w-full min-w-0 pl-12"
                        placeholder="Adınızı daxil edin"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                    >
                      Telefon
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={20}
                      />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-premium w-full min-w-0 pl-12"
                        placeholder="+994 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date */}
                    <div className="min-w-0">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                      >
                        Tarix
                      </label>
                      <div className="relative min-w-0 overflow-hidden">
                        <Calendar
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                          size={20}
                        />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="input-premium w-full min-w-0 max-w-full pl-12 pr-4 text-left appearance-none"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div className="min-w-0">
                      <label
                        htmlFor="time"
                        className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                      >
                        Saat
                      </label>
                      <div className="relative">
                        <Clock
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                          size={20}
                        />
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="input-premium w-full min-w-0 pl-12 appearance-none cursor-pointer"
                        >
                          <option value="">Seçin</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                    >
                      Şəxs Sayı
                    </label>
                    <div className="relative">
                      <Users
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={20}
                      />
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="input-premium w-full min-w-0 pl-12 appearance-none cursor-pointer"
                      >
                        <option value="">Seçin</option>
                        <option value="1">1 nəfər</option>
                        <option value="2">2 nəfər</option>
                        <option value="3">3 nəfər</option>
                        <option value="4">4 nəfər</option>
                        <option value="5">5 nəfər</option>
                        <option value="6">6 nəfər</option>
                        <option value="7-10">7-10 nəfər</option>
                        <option value="10+">10+ nəfər</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full mt-8"
                  >
                    Rezervasiya Et
                  </button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Və ya bizimlə əlaqə saxlayın:{" "}
                    <a
                      href="tel:+994101001909"
                      className="text-primary hover:underline"
                    >
                      (+994) 10 100 1909
                    </a>
                  </p>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="card-surface p-8 md:p-12 text-center animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="text-primary" size={40} />
                </div>
                <h2 className="text-subheading text-foreground mb-4">
                  Rezervasiyanız Göndərildi!
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Hörmətli {formData.name}, rezervasiya məlumatlarınız WhatsApp
                  vasitəsilə göndərildi. Zəhmət olmasa mesajı göndərin və
                  tezliklə sizinlə əlaqə saxlayacağıq.
                </p>
                <div className="card-premium p-6 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-left">
                      <span className="text-muted-foreground">Tarix:</span>
                      <p className="font-medium text-foreground">{formData.date}</p>
                    </div>
                    <div className="text-left">
                      <span className="text-muted-foreground">Saat:</span>
                      <p className="font-medium text-foreground">{formData.time}</p>
                    </div>
                    <div className="text-left">
                      <span className="text-muted-foreground">Şəxs sayı:</span>
                      <p className="font-medium text-foreground">{formData.guests}</p>
                    </div>
                    <div className="text-left">
                      <span className="text-muted-foreground">Telefon:</span>
                      <p className="font-medium text-foreground">{formData.phone}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline"
                >
                  Yeni Rezervasiya
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservation;
