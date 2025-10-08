import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="La Casa Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-6 leading-tight">
            Welcome to <span className="text-accent">La Casa</span>
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 font-light">
            Experience authentic Mediterranean cuisine crafted with passion, tradition, and the finest ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection("menu")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              View Our Menu
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-6"
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
