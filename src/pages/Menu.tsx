import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type MenuItem = { name: string; price: string };
type MenuCategory = { id: string; name: string; items: MenuItem[] };

const menuCategories: MenuCategory[] = [
  {
    id: "soyuq-qelyanaltilar",
    name: "Soyuq qəlyanaltılar",
    items: [
      { name: "Tərəvəz buketi", price: "14" },
      { name: "Pendir çeşidləri", price: "35" },
      { name: "Naxçıvan pendiri", price: "12" },
      { name: "Qarışıq zeytun 150/400 qr", price: "8/16" },
      { name: "Turşu çeşidləri 500 qr", price: "14" },
      { name: "Badımcan ləvəngi", price: "12" },
      { name: "Pomidor məzəsi", price: "9" },
      { name: "Acılı tərəvəz məzəsi", price: "8" },
      { name: "Ev sayağı ət assorti", price: "42" },
      { name: "Lobya fəsincan", price: "12" },
      { name: "Mastı xiyər", price: "6" },
      { name: "Qulançar turşusu", price: "7" },
      { name: "Dil salatı", price: "14" },
      { name: "Çanaq pendiri çoban salatı", price: "10" },
      {
        name: "Toyuq ciyəri paşteti meyvə sosu ilə",
        price: "14",
      },
      { name: "Allah və pomidorlu salat", price: "14" },
      { name: "Xırt-vırt badımcan salatı", price: "14" },
      { name: "Bulvar salatı", price: "22" },
    ],
  },
  {
    id: "sorbalar",
    name: "Şorbalar",
    items: [
      { name: "Kənd çolpası şorbası", price: "10" },
      { name: "Düşbərə", price: "10" },
      { name: "Qurutlu əriştə şorbası", price: "13" },
      { name: "Əli, noxudlu doyğa", price: "14" },
    ],
  },
  {
    id: "isti-qelyanaltilar",
    name: "İsti qəlyanaltılar",
    items: [
      { name: "Ətli qutab", price: "4" },
      { name: "Göyərtili qutab", price: "3" },
      { name: "Balqabaqlı qutab", price: "4" },
      { name: "Xırt-vırt blinçik (ətli / ispanaqlı)", price: "4/3" },
      { name: "Göyərti küküsü", price: "10" },
      { name: "Qoz küküsü", price: "10" },
      { name: "Pendirli qatlama manqalda", price: "15" },
      { name: "Ətli blinçik manqalda", price: "18" },
    ],
  },
  {
    id: "isti-yemekler",
    name: "İsti yeməklər",
    items: [
      { name: "Kartof dolması pomidor azması ilə", price: "28" },
      { name: "Bakı küftə-bozbəşi", price: "28" },
      { name: "Zirincili şirəli dana", price: "34" },
      { name: "Şəki piti", price: "24" },
      { name: "Quzu boynu sobada", price: "64" },
      { name: "Qovurma", price: "34" },
      { name: "Heyva dolması", price: "25" },
      { name: "Tərəvəz dolması", price: "22" },
      { name: "Soğan dolması noxud püresi ilə", price: "24" },
      { name: "Tarhunlu can əti", price: "32" },
      { name: "Kənd çolpası ləvəngi", price: "34" },
      { name: "Çəpiş pörtdəməsi", price: "28" },
      { name: "Hind toyuğu qaymaqlı sağısıda", price: "35" },
      { name: "Ev sayağı Sulhulu", price: "24" },
      { name: "Gərəf saxsıda", price: "38" },
      { name: "Şabalıdlı Turac nar qovurması", price: "52" },
      { name: "Hind toyuğu dolması", price: "29" },
    ],
  },
  {
    id: "tava-yemekleri",
    name: "Tava yeməkləri",
    items: [
      { name: "Sac quzu əti ilə (4 nəfərlik)", price: "65" },
      { name: "Sac can əti ilə (4 nəfərlik)", price: "75" },
      { name: "Sac toyuq əti ilə (4 nəfərlik)", price: "55" },
      { name: "Kəllə beyin (2 nəfərlik)", price: "40" },
      { name: "Qızıl balıq surğaq", price: "32" },
      { name: "Quzu qabırğalı nar qovurma", price: "38" },
      { name: "Şabalıdlı (2 nəfərlik)", price: "38" },
      { name: "Çoban qovurma quzu maçası ilə", price: "38" },
      { name: "Qaymaq sousunda ispanaqlı qızılbalıq", price: "42" },
    ],
  },
  {
    id: "xemir-yemekleri",
    name: "Xəmir yeməkləri",
    items: [
      { name: "Qıymalı yarpaq xingəl", price: "18" },
      { name: "Çolpalı yarpaq xingəl", price: "18" },
      { name: "Gürzə (soyuq / qızartma)", price: "16" },
      { name: "Fəsəli", price: "6" },
    ],
  },
  {
    id: "plovlar",
    name: "Plovlar",
    items: [
      { name: "Qəbələ plov", price: "32" },
      { name: "Şüyüdlü, paxlalı plov quzu qolu ilə", price: "29" },
      { name: "Turşu qovurma plov", price: "29" },
    ],
  },
  {
    id: "kabablar",
    name: "Kabablar",
    items: [
      { name: "Toyuq lülə", price: "15" },
      { name: "Döymə lülə", price: "18" },
      { name: "Quzu tikə", price: "22" },
      { name: "Quzu antrikot", price: "26" },
      { name: "Dana basdırma", price: "24" },
      { name: "Quzu basdırma", price: "24" },
      { name: "Toyuq kababı", price: "15" },
      { name: "Nərə balığı kababı", price: "95" },
      { name: "Səktədə bütöv çolpa", price: "29" },
      { name: "Xan kababı", price: "18" },
      { name: "Maça kababı", price: "17" },
      { name: "Tərəvəz kababı", price: "8" },
      { name: "Küldə kabab", price: "8" },
      { name: "Çəpiş kababı", price: "24" },
      { name: "Hind toyuğu kababı", price: "22" },
    ],
  },
  {
    id: "desertler",
    name: "Desertlər",
    items: [
      { name: "Azərbaycan milli bişmələri", price: "18/35" },
      { name: "Qoz şirniyyatı", price: "18" },
      { name: "Abşeron Tortu", price: "18" },
      { name: "Ballı Tort", price: "18" },
      { name: "Nağıl Tortu", price: "18" },
      { name: "San Sebastian", price: "18" },
      { name: "Kiev sayağı Tort", price: "18" },
      { name: "Gelato Dondurma", price: "12" },
      { name: "Dondurma", price: "5" },
      { name: "Qarışıq meyvə", price: "25" },
    ],
  },
  {
    id: "qelyan",
    name: "Qəlyan",
    items: [
      { name: "Qış Yuxusu (Winter Dream)", price: "110" },
      { name: "Manqo–Marakuya Smuzi", price: "130" },
      { name: "Marşmello", price: "180" },
      { name: "Fincan (Virginia + Burley)", price: "60" },
      {
        name: "Fincan (Siqar yarpağı, zəngin nikotin)",
        price: "80",
      },
      { name: "Meyvəli qəlyan (Virginia + Burley)", price: "80" },
    ],
  },
  {
    id: "alkoqolsuz-ickiler",
    name: "Alkoqolsuz İçkilər",
    items: [
      { name: "Sirab (still/sparkling)", price: "6/10" },
      { name: "Aqua Panna", price: "10/15" },
      { name: "San Pellegrino", price: "10/15" },
      { name: "Cola / Fanta / Sprite", price: "7" },
      { name: "Meyvə şirələri (Juice)", price: "8" },
      { name: "Təzə sıxılmış şirə (Fresh Juice)", price: "12" },
      { name: "Meyvə kompotu", price: "10" },
      { name: "Red Bull", price: "12" },
      { name: "Şalğam", price: "7" },
      { name: "Tonik", price: "9" },
      { name: "Ev sayağı limonad", price: "9/25" },
    ],
  },
  {
    id: "cay-ve-qehve",
    name: "Çay və Qəhvə",
    items: [
      { name: "Lənkəran çayı", price: "15" },
      { name: "Ot çayları", price: "18" },
      { name: "Zəncəfil çayı", price: "20" },
      { name: "Qış çayı", price: "20" },
      { name: "Espresso", price: "6" },
      { name: "Americano", price: "8" },
      { name: "Türk qəhvəsi", price: "7" },
      { name: "Cappuccino", price: "9" },
      { name: "Raf", price: "10" },
    ],
  },
  {
    id: "piveler",
    name: "Pivələr",
    items: [
      { name: "Xırdalan", price: "8" },
      { name: "Xırdalan Draft", price: "8" },
      { name: "Heineken", price: "14" },
      { name: "Erdinger / Erdinger 0", price: "16/14" },
      { name: "Hoegaarden", price: "16" },
      { name: "Corona", price: "16" },
    ],
  },
  {
    id: "kokteyller",
    name: "Kokteyllər",
    items: [
      { name: "Gül bağı", price: "20" },
      { name: "İpak Yolu", price: "21" },
      { name: "Buta", price: "22" },
      { name: "Mirvari", price: "22" },
      { name: "İçərişəhər", price: "22" },
      { name: "Fayton", price: "25" },
    ],
  },
  {
    id: "sert-ickiler",
    name: "Sərt İçkilər",
    items: [
      { name: "Ev sayağı / Meyvəli nistoykalar", price: "8/6/95" },
      { name: "Likörlər (Meyvəli, Jagermeister)", price: "10/14" },
      { name: "Rakı (Tekirdağ, Yeni Rakı)", price: "14/16" },
      { name: "Rom (Captain Morgan, Bacardi, Zacapa)", price: "11-51" },
      {
        name: "Viski (Jameson, Jack Daniel’s, Chivas, Macallan və s.)",
        price: "12-115",
      },
      {
        name: "Araq (Xan, Absolut, Grey Goose, Belvedere və s.)",
        price: "8-17",
      },
      { name: "Tekila (Olmeca, Patron, Don Julio)", price: "11-30" },
      { name: "Grappa", price: "10" },
      { name: "Cin (Beefeater, Bombay, Hendrick’s)", price: "14-18" },
      { name: "Brendi / Konyak (Xan, Hennessy, Remy Martin)", price: "10-95" },
    ],
  },
  {
    id: "serablar",
    name: "Şərablar",
    items: [
      { name: "Ağ şərablar (Azərbaycan, İtaliya, Fransa və s.)", price: "16-520" },
      { name: "Roze şərablar (Azərbaycan, İtaliya, Fransa)", price: "16-240" },
      {
        name: "Qırmızı şərablar (Azərbaycan, İspaniya, İtaliya, Fransa və s.)",
        price: "17-1750",
      },
      { name: "Köpüklü şərablar (Prosecco, Chandon)", price: "28-155" },
      { name: "Şampan (Moët, Dom Pérignon və s.)", price: "380-1350" },
    ],
  },
];

const Menu = () => {
  const headerRef = useScrollAnimation();
  const [activeCategoryId, setActiveCategoryId] = useState(
    menuCategories[0]?.id ?? ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  const activeCategory = useMemo(
    () => menuCategories.find((cat) => cat.id === activeCategoryId) ?? menuCategories[0],
    [activeCategoryId]
  );
  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return activeCategory?.items ?? [];
    return (activeCategory?.items ?? []).filter((item) =>
      item.name.toLowerCase().includes(term)
    );
  }, [activeCategory, searchTerm]);

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
              Kulinariya Sənəti
            </span>
            <h1 className="text-display text-cream mb-6">Menyumuz</h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Bölməni seçin, xüsusi dadları sürətli tapın.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="bg-background pt-16 md:pt-20 pb-24 md:pb-32">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto mb-8">
            <label className="relative block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/70" size={18} />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                placeholder="Məhsul axtar..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-background border border-secondary/20 shadow-soft text-sm md:text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </label>
          </div>

          <div className="mb-12 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 md:flex md:flex-wrap md:justify-center">
            {menuCategories.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`w-full md:w-auto text-center px-4 py-2 rounded-full border text-xs md:text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-soft"
                      : "border-secondary/30 text-secondary hover:text-primary hover:border-primary/50"
                  }`}
                  aria-pressed={isActive}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          <div
            key={activeCategory.id}
            className="opacity-0 translate-y-8 animate-fade-up"
            style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
          >
            {/* Category Header */}
            <div className="text-center mb-10">
              <h2 className="text-subheading text-foreground mb-4">
                {activeCategory.name}
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>

            {/* Menu Items */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.name}
                    className="card-premium p-6 md:p-8 group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-display text-lg md:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="w-8 h-px bg-primary/30 group-hover:w-12 transition-all duration-300" />
                      </div>
                      <span className="font-display text-lg md:text-xl text-primary whitespace-nowrap">
                        ₼{item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground bg-card rounded-3xl py-10 px-6 shadow-card">
                Bu bölmədə axtarışa uyğun məhsul tapılmadı.
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
