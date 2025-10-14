"use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Landing Page",
    description: "Une page web unique et optimisée pour convertir vos visiteurs en clients avec un design moderne et efficace.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    popular: true,
    badge: "OFFRE POPULAIRE",
    price: "399€",
    originalPrice: "549€",
    discount: "25% de réduction",
    features: [
      "Design responsive",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Appels à l'action efficaces",
      "Livraison en 7 jours",
      "Hébergement offert pendant 1 an"
    ]
  },
  {
    id: 2,
    title: "Site Web Complet",
    description: "Un site web multi-pages professionnel avec toutes les fonctionnalités essentielles pour présenter votre entreprise.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    price: "899€",
    features: [
      "Jusqu'à 5 pages",
      "CMS intégré",
      "Optimisation SEO avancée",
      "Design personnalisé",
      "Livraison en 14 jours",
      "Hébergement offert pendant 1 an"
    ]
  }
];

export default function ServicesSection() {
  // const router = useRouter();
  
  const handleCommandClick = (serviceTitle: string) => {
    // Mettre à jour l'URL avec le service sélectionné
    window.history.pushState({}, '', `/#contact?service=${encodeURIComponent(serviceTitle)}`);
    
    // Faire défiler jusqu'à la section contact avec une animation fluide
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Déclencher un événement personnalisé pour informer le composant ContactSection
      const event = new CustomEvent('serviceSelected', { detail: serviceTitle });
      window.dispatchEvent(event);
    }
  };
  
  return (
    <section id="services" className="apple-section bg-gradient-to-b from-primary/10 to-secondary/70 fade-in">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Nos Services</h2>
          <p className="text-foreground/80 card-text">
            Nous proposons deux solutions sur mesure pour vous aider à établir votre présence en ligne avec efficacité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-background rounded-2xl p-8 shadow-sm border card ${service.popular ? 'border-primary shadow-md shadow-primary/5' : 'border-primary/20'} transition-all hover:shadow-md hover:border-primary/40 flex flex-col h-full relative`}
            >
              <div className="mb-6 text-primary">{service.icon}</div>
              <h3 className="card-title mb-3">{service.title}</h3>
              <p className="text-foreground/80 mb-6 card-text">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="price text-primary">
                    {service.price}
                  </span>
                  {service.originalPrice && (
                    <span className="text-sm text-primary/60 line-through">
                      {service.originalPrice}
                    </span>
                  )}
                </div>
                {service.discount && (
                  <div className="text-sm font-medium text-green-600 mt-1">
                    {service.discount}
                  </div>
                )}
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      className="w-5 h-5 text-primary"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button 
                  className={`apple-button w-full bg-primary text-primary-foreground rounded-full font-medium transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2`}
                  onClick={() => handleCommandClick(service.title)}
                >
                  {service.popular ? 'Profiter de l\'offre' : 'Commander'}
                </button>
              </div>
              
              {/* Badge avec classe CSS dédiée */}
              {service.popular && (
                <div className="popular-badge">
                  {service.badge}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2 text-sm text-primary/90 border border-primary/30 rounded-full px-4 py-2 bg-primary/5 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="font-medium">Possibilité de paiement en 2x ou 3x sans frais pour tous nos services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
