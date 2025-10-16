import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Autogate",
    description: "Site web de voitures, pour mettre les acheteurs en contact avec les vendeurs.",
    image: "/portfolio-agence.jpg",
    tags: ["Next.js", "TailwindCSS", "React"],
    link: "https://site-voiture-drab.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Portfolio web d'un developpeur.",
    image: "/portfolio-tasks.jpg",
    tags: ["Next.js", "TailwindCSS", "React"],
    link: "https://www.louisblankaert.com/"
  },
  {
    id: 3,
    title: "Pimmo",
    description: "Site pour les locations d'appartements.",
    image: "/portfolio-agence.jpg",
    tags: ["Next.js", "TailwindCSS", "React"],
    link: "https://pimmo.vercel.app/"
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="apple-section bg-gradient-to-b from-primary/10 to-secondary/70 fade-in">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Notre Portfolio</h2>
          <p className="text-foreground/80 card-text">
            Découvrez quelques-uns de nos projets récents et comment nous avons aidé nos clients à atteindre leurs objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-secondary rounded-2xl overflow-hidden transition-all hover:shadow-lg card"
            >
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full aspect-[16/9] bg-muted group-hover:opacity-90 transition-opacity cursor-pointer">
                  {/* Utiliser Image pour les images réelles ou un placeholder si l'image n'est pas disponible */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/50 flex items-center justify-center z-10">
                    <span className="text-xl font-medium">{item.title}</span>
                  </div>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <h3 className="card-title mb-2">{item.title}</h3>
                <p className="text-foreground/80 mb-4 card-text">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-3 py-1 bg-background rounded-full text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={item.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium text-sm"
                >
                  {item.title}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-5 h-5 ml-1"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
