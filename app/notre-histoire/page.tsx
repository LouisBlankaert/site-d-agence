import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./styles.module.css";

export default function NotreHistoire() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-8">Notre Histoire</h1>
            
            <div className="prose prose-blue max-w-none">
              <div className="relative overflow-hidden rounded-2xl mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 p-6 md:p-8 shadow-lg border border-primary/20">
                <div className={`absolute top-0 left-0 w-full h-full ${styles.bgGridPattern} opacity-5`}></div>
                <blockquote className="relative z-10 italic text-lg md:text-xl text-foreground/90 border-l-4 border-primary pl-4">
                  &quot;Le développement web était comme une étoile lointaine qui m&apos;attirait depuis longtemps. En 2022, j&apos;ai enfin osé m&apos;y aventurer, et ce fut comme une révélation. Dans chaque ligne de code, j&apos;ai découvert un langage universel capable de transformer des idées abstraites en expériences tangibles. Aujourd&apos;hui, cette passion guide chacun de mes projets, tel un artisan qui façonne le numérique avec précision et créativité.&quot;
                </blockquote>
                <p className="text-right mt-4 text-sm text-foreground/70">— Fondateur de DevExpress</p>
              </div>
              
              <h2 className="text-2xl font-medium mt-12 mb-6">Le début d&apos;une passion</h2>
              <p>
                L&apos;histoire de DevExpress commence en 2022, lorsque notre fondateur décide enfin de franchir le pas et de se lancer dans l&apos;apprentissage du développement web. Ce qui n&apos;était au départ qu&apos;une simple curiosité s&apos;est rapidement transformé en une véritable passion.
              </p>
              <p className="mt-4">
                Après des mois d&apos;apprentissage intensif, de défis relevés et de projets personnels, l&apos;idée de créer une agence web spécialisée est née. Notre fondateur avait découvert non seulement le plaisir de coder, mais aussi celui de donner vie aux idées et aux projets des autres.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                <div className="bg-background rounded-xl p-6 shadow-sm border border-primary/20 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">La découverte</h3>
                  <p className="text-sm text-foreground/70">
                    2022 marque le début de l&apos;aventure avec la découverte du HTML, CSS et JavaScript.
                  </p>
                </div>
                
                <div className="bg-background rounded-xl p-6 shadow-sm border border-primary/20 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">L&apos;apprentissage</h3>
                  <p className="text-sm text-foreground/70">
                    Exploration des frameworks modernes et des meilleures pratiques du développement web.
                  </p>
                </div>
                
                <div className="bg-background rounded-xl p-6 shadow-sm border border-primary/20 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Le lancement</h3>
                  <p className="text-sm text-foreground/70">
                    Création de DevExpress pour partager cette passion et aider les entreprises à se développer en ligne.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-medium mt-12 mb-6">Notre philosophie</h2>
              <p>
                Chez DevExpress, nous croyons que chaque projet mérite une attention particulière. Notre approche est basée sur l&apos;écoute attentive des besoins de nos clients et la création de solutions sur mesure qui répondent parfaitement à leurs objectifs.
              </p>
              <p className="mt-4">
                Notre passion pour le développement web nous pousse à rester constamment à l&apos;affût des dernières tendances et technologies. Nous nous engageons à fournir des sites web modernes, performants et esthétiquement plaisants qui aident nos clients à se démarquer dans un monde numérique en constante évolution.
              </p>
              
              <h2 className="text-2xl font-medium mt-12 mb-6">Notre vision pour l&apos;avenir</h2>
              <p>
                Alors que nous continuons à grandir, notre objectif reste le même : transformer les idées en réalités numériques exceptionnelles. Nous aspirons à devenir un partenaire de confiance pour les entreprises qui cherchent à établir ou à renforcer leur présence en ligne.
              </p>
              <p className="mt-4">
                Nous sommes convaincus que le développement web est bien plus qu&apos;une simple compétence technique — c&apos;est un art qui combine créativité, innovation et expertise technique. C&apos;est cette vision qui guide chacun de nos projets et qui nous pousse à nous surpasser jour après jour.
              </p>
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 md:p-8 mt-12 border border-primary/20 shadow-lg">
                <h3 className="text-xl font-medium mb-4">Travaillons ensemble</h3>
                <p className="mb-6">
                  Vous avez un projet en tête ? Nous serions ravis de vous aider à le concrétiser. Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner dans votre aventure numérique.
                </p>
                <Link 
                  href="/#contact" 
                  className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-all hover:bg-primary/90 inline-block"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
            
            <div className="mt-12 mb-8">
              <Link 
                href="/" 
                className="text-primary hover:underline flex items-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-5 h-5 mr-1"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
