"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 space-y-8 relative">
            {/* Style pour les bulles */}
            <style jsx>{`
              @keyframes float1 {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(15px, -15px) rotate(5deg); }
                50% { transform: translate(5px, -25px) rotate(-5deg); }
                75% { transform: translate(-10px, -10px) rotate(3deg); }
              }
              
              @keyframes float2 {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(-15px, -10px) rotate(-3deg); }
                50% { transform: translate(-5px, -20px) rotate(5deg); }
                75% { transform: translate(10px, -5px) rotate(-2deg); }
              }
              
              @keyframes float3 {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(10px, -5px) rotate(3deg); }
                50% { transform: translate(20px, -15px) rotate(-3deg); }
                75% { transform: translate(5px, -25px) rotate(5deg); }
              }
              
              @keyframes float4 {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(-5px, -20px) rotate(-5deg); }
                50% { transform: translate(-15px, -10px) rotate(3deg); }
                75% { transform: translate(-10px, -5px) rotate(-3deg); }
              }
              
              .bubble {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: radial-gradient(circle at 30% 30%, rgba(0,113,227,0.5), rgba(0,82,204,0.2));
                box-shadow: 0 0 20px rgba(0,113,227,0.3), inset 0 0 20px rgba(0,113,227,0.3);
                backdrop-filter: blur(4px);
                border: 1px solid rgba(0,113,227,0.5);
                color: white;
                font-weight: 600;
                text-shadow: 0 1px 3px rgba(0,0,0,0.3);
                letter-spacing: 0.5px;
                font-size: 12px;
                z-index: 5;
              }
              
              .bubble-1 {
                width: 80px;
                height: 80px;
                top: -10%;
                right: 5%;
                animation: float1 8s ease-in-out infinite;
              }
              
              .bubble-2 {
                width: 90px;
                height: 90px;
                bottom: 5%;
                left: -5%;
                animation: float2 9s ease-in-out infinite;
              }
              
              .bubble-3 {
                width: 70px;
                height: 70px;
                bottom: 30%;
                right: -5%;
                animation: float3 10s ease-in-out infinite;
              }
              
              .bubble-4 {
                width: 60px;
                height: 60px;
                top: 20%;
                left: -5%;
                animation: float4 7s ease-in-out infinite;
              }
              
              @media (max-width: 1024px) {
                .bubble-2 {
                  left: 0;
                  bottom: 5%;
                }
                .bubble-3 {
                  right: 0;
                }
                .bubble-4 {
                  left: 0;
                  top: 25%;
                }
              }
              
              @media (max-width: 768px) {
                .bubble {
                  font-size: 10px;
                }
                .bubble-1 {
                  width: 60px;
                  height: 60px;
                  top: -5%;
                  right: 0;
                }
                .bubble-2 {
                  width: 65px;
                  height: 65px;
                  bottom: 0;
                  left: 0;
                }
                .bubble-3 {
                  width: 55px;
                  height: 55px;
                  bottom: 25%;
                  right: 0;
                }
                .bubble-4 {
                  width: 50px;
                  height: 50px;
                  top: 20%;
                  left: 0;
                }
              }
              
              @media (max-width: 480px) {
                .bubble-1 {
                  width: 50px;
                  height: 50px;
                  top: -8%;
                  right: 0;
                }
                .bubble-2 {
                  width: 55px;
                  height: 55px;
                  bottom: 0;
                  left: auto;
                  right: 10%;
                }
                .bubble-3 {
                  width: 45px;
                  height: 45px;
                  bottom: 20%;
                  right: 0;
                }
                .bubble-4 {
                  width: 40px;
                  height: 40px;
                  top: 15%;
                  left: auto;
                  right: 25%;
                }
              }
            `}</style>
            
            {/* Bulles de savon avec mots */}
            <div className="bubble bubble-1">EXCELLENCE</div>
            <div className="bubble bubble-2">CRÉATIVITÉ</div>
            <div className="bubble bubble-3">INNOVATION</div>
            <div className="bubble bubble-4">EXPERTISE</div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight relative z-10">
              Créez votre présence en ligne avec{" "}
              <span className="text-primary font-semibold">élégance</span>
            </h1>
            <p className="text-foreground/80 text-lg max-w-xl leading-relaxed relative z-10">
              Nous concevons et développons des sites web modernes qui captent l&apos;attention et convertissent les visiteurs en clients.
            </p>
            <div className="flex flex-wrap gap-4 relative z-10">
              <Link 
                href="#services" 
                className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-all hover:bg-primary/90"
              >
                Découvrir nos services
              </Link>
              <Link 
                href="#portfolio" 
                className="rounded-full border border-primary/20 px-6 py-3 text-center text-sm font-medium transition-all hover:bg-primary/5"
              >
                Voir notre portfolio
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary/20">
              {/* Overlay professionnel pour améliorer la visibilité du contenu */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-blue-600/10 to-secondary/15 z-10 mix-blend-overlay"></div>
              
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
              
              {/* Pas de bulles ici, elles sont déplacées du côté du texte */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient professionnel */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent -z-10"></div>
    </section>
  );
}
