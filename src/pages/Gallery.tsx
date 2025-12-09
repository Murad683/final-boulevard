import { useState } from "react";
import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { type: "video" as const, src: "/videos/atmosphere-1.mp4", title: "Atmosfer" },
  { type: "video" as const, src: "/videos/atmosphere-2.mp4", title: "İnteryer" },
  { type: "video" as const, src: "/videos/atmosphere-3.mp4", title: "Mühit" },
  { type: "video" as const, src: "/videos/atmosphere-4.mp4", title: "Məkan" },
  { type: "video" as const, src: "/videos/cabinet.mp4", title: "Kabinet" },
  { type: "video" as const, src: "/videos/cabinet-1.mp4", title: "Xüsusi Otaq" },
];

const Gallery = () => {
  const headerRef = useScrollAnimation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
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
              Vizual Səyahət
            </span>
            <h1 className="text-display text-cream mb-6">Qalereya</h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Boulevard 1909-un atmosferini, interyerini və kulinariya
              sənətimizi kəşf edin.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={index}
                item={item}
                index={index}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors duration-300 z-10"
            aria-label="Bağla"
          >
            <X size={32} />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 md:left-8 text-cream/70 hover:text-cream transition-colors duration-300 p-2"
            aria-label="Əvvəlki"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 text-cream/70 hover:text-cream transition-colors duration-300 p-2"
            aria-label="Növbəti"
          >
            <ChevronRight size={40} />
          </button>

          {/* Content */}
          <div
            className="max-w-5xl w-full mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems[currentIndex].type === "video" ? (
              <video
                key={currentIndex}
                autoPlay
                controls
                loop
                playsInline
                className="w-full rounded-2xl shadow-2xl"
              >
                <source
                  src={galleryItems[currentIndex].src}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].title}
                className="w-full rounded-2xl shadow-2xl"
              />
            )}
            <p className="text-center text-cream mt-4 font-display text-lg">
              {galleryItems[currentIndex].title}
            </p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50 text-sm">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

interface GalleryItemProps {
  item: {
    type: "video" | "image";
    src: string;
    title: string;
  };
  index: number;
  onClick: () => void;
}

const GalleryItem = ({ item, index, onClick }: GalleryItemProps) => {
  const itemRef = useScrollAnimation();

  return (
    <div
      ref={itemRef}
      className="opacity-0 translate-y-8"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        onClick={onClick}
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer"
      >
        {item.type === "video" ? (
          <>
            <video
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            >
              <source src={item.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-secondary/30 group-hover:bg-secondary/10 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Play className="text-primary-foreground ml-1" size={24} />
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors duration-300" />
          </>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary/80 to-transparent">
          <h3 className="font-display text-lg text-cream">{item.title}</h3>
        </div>
      </button>
    </div>
  );
};

export default Gallery;
