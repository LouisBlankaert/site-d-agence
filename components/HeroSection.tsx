import Link from "next/link";
// import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Créez votre présence en ligne avec{" "}
              <span className="text-primary">élégance</span>
            </h1>
            <p className="text-foreground/80 max-w-xl">
              Nous concevons et développons des sites web modernes qui captent l&apos;attention et convertissent les visiteurs en clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#services" className="apple-button text-center text-sm">
                Découvrir nos services
              </Link>
              <Link 
                href="#portfolio" 
                className="rounded-full border border-border px-5 py-2.5 text-center text-sm font-medium transition-all hover:bg-secondary"
              >
                Voir notre portfolio
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              {/* Overlay pour améliorer la visibilité du contenu */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-10 mix-blend-overlay"></div>
              
              {/* Vidéo */}
              <div className="relative w-full h-full">
                <video
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/coding-team.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge les vidéos HTML5.
                </video>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-primary/20 backdrop-blur-md z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-secondary/30 backdrop-blur-sm z-10"></div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/30 backdrop-blur-md z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
    </section>
  );
}
