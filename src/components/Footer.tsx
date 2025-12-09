import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-premium py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Boulevard 1909" className="h-14 w-auto mb-6" />
            <p className="text-cream/70 text-sm leading-relaxed">
              Müasir yanaşma ilə ənənəvi Azərbaycan mətbəxini təqdim edən premium restoran.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg text-primary mb-6">Naviqasiya</h4>
            <ul className="space-y-3">
              {[
                { name: "Ana Səhifə", path: "/" },
                { name: "Menyu", path: "/menu" },
                { name: "Rezervasiya", path: "/rezervasiya" },
                { name: "Qalereya", path: "/qalereya" },
                { name: "Əlaqə", path: "/elaqe" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-primary mb-6">Əlaqə</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  15 Ahad Yaqubov küç., Bakı, Azərbaycan AZ1003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+994101001909"
                  className="text-cream/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  (+994) 10 100 1909
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-primary flex-shrink-0" />
                <a
                  href="https://www.instagram.com/boulevard1909/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  @boulevard1909
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-primary mb-6">İş Saatları</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex justify-between">
                <span>Bazar ertəsi - Cümə</span>
                <span>08:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Şənbə - Bazar</span>
                <span>08:00 - 00:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © 2024 Boulevard 1909. Bütün hüquqlar qorunur.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/boulevard1909/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Created by REVIO.AZ */}
          <div className="mt-6 text-center">
            <p className="text-cream/40 text-xs">
              Created by{" "}
              <a
                href="https://wa.me/994505131380?text=Salam%20saytlarla%20maraqlanıram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-primary transition-colors duration-300 font-medium"
              >
                REVIO.AZ
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
