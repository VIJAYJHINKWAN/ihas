import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";
import heroAward from "@/assets/hero-award.jpg";
import heroConference from "@/assets/hero-conference.jpg";

const slides = [
  {
    image: heroCampus,
    caption: "Best Physiotherapy College in UP | Top Institute Near Delhi NCR",
    subcaption: "Excellence in Healthcare Education Since 1994",
  },
  {
    image: heroAward,
    caption: "Best Physiotherapy College Award 2025",
    subcaption: "Recognized for Outstanding Contribution to Healthcare Education",
  },
  {
    image: heroConference,
    caption: "International Conference on Rehabilitation Sciences",
    subcaption: "Global Collaboration for Advancing Healthcare Research",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in" key={currentSlide}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight text-white drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              {slides[currentSlide].caption}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/95 drop-shadow-md" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              {slides[currentSlide].subcaption}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Apply Now
              </Button>
              <Button variant="heroOutline" size="xl">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 transition-colors flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 transition-colors flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
