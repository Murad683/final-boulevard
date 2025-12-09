import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const dishes = [
  {
    name: "Şəki piti",
    description: "",
    price: "24 ₼",
  },
  {
    name: "Quzu boynu sobada",
    description: "",
    price: "64 ₼",
  },
  {
    name: "Şüyüdlü, paxlalı plov quzu qolu ilə",
    description: "",
    price: "29 ₼",
  },
  {
    name: "Bakı küftə-bozbəşi",
    description: "",
    price: "28 ₼",
  },
];

const FeaturedDishes = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-card">
      <div className="container-premium">
        {/* Header */}
        <div
          ref={sectionRef}
          className="text-center mb-16 md:mb-20 opacity-0 translate-y-8"
        >
          <span className="inline-block text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Seçilmiş Dadlar
          </span>
          <h2 className="text-heading text-foreground mb-6">
            Şef Tövsiyəsi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ən çox sevilən və tövsiyə olunan yeməklərimizdən bir neçəsi
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <DishCard key={dish.name} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DishCardProps {
  dish: {
    name: string;
    description: string;
    price: string;
  };
  index: number;
}

const DishCard = ({ dish, index }: DishCardProps) => {
  const cardRef = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className="card-surface group opacity-0 translate-y-8"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300 font-extralight">
            {dish.name}
          </h3>
          <div className="w-12 h-px bg-primary/40 mb-4 group-hover:w-20 transition-all duration-300" />
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {dish.description}
          </p>
        </div>
        <span className="font-display text-xl md:text-2xl text-primary whitespace-nowrap font-extralight">
          {dish.price}
        </span>
      </div>
    </div>
  );
};

export default FeaturedDishes;
