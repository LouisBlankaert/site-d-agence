import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-8">Politique de Confidentialité</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-lg mb-6">
                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
              <p>
                Chez DevExpress, nous prenons la protection de vos données personnelles très au sérieux. 
                Cette politique de confidentialité vous informe sur la manière dont nous collectons, 
                utilisons et protégeons vos informations lorsque vous visitez notre site web et utilisez nos services.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">2. Données collectées</h2>
              <p>
                Nous pouvons collecter les types d&apos;informations suivants :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">
                  <strong>Informations personnelles</strong> : nom, adresse e-mail, numéro de téléphone, 
                  et autres informations que vous nous fournissez volontairement via nos formulaires de contact.
                </li>
                <li className="mb-2">
                  <strong>Informations de navigation</strong> : adresse IP, type de navigateur, 
                  pages visitées, temps passé sur le site, et autres données de navigation.
                </li>
                <li className="mb-2">
                  <strong>Cookies</strong> : nous utilisons des cookies pour améliorer votre expérience 
                  sur notre site. Vous pouvez configurer votre navigateur pour refuser les cookies, 
                  mais cela pourrait affecter certaines fonctionnalités du site.
                </li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">3. Utilisation des données</h2>
              <p>
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Vous fournir les services que vous avez demandés</li>
                <li className="mb-2">Répondre à vos demandes et questions</li>
                <li className="mb-2">Améliorer notre site web et nos services</li>
                <li className="mb-2">Vous envoyer des communications marketing (avec votre consentement)</li>
                <li className="mb-2">Se conformer aux obligations légales</li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">4. Protection des données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
                personnelles contre tout accès, altération, divulgation ou destruction non autorisés. 
                Cependant, aucune méthode de transmission sur Internet ou de stockage électronique 
                n&apos;est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">5. Partage des données</h2>
              <p>
                Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager 
                vos informations avec :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Des prestataires de services qui nous aident à exploiter notre site web</li>
                <li className="mb-2">Des autorités publiques lorsque la loi l&apos;exige</li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">6. Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Droit d&apos;accès à vos données personnelles</li>
                <li className="mb-2">Droit de rectification de vos données</li>
                <li className="mb-2">Droit à l&apos;effacement de vos données</li>
                <li className="mb-2">Droit à la limitation du traitement</li>
                <li className="mb-2">Droit à la portabilité des données</li>
                <li className="mb-2">Droit d&apos;opposition au traitement</li>
              </ul>
              <p>
                Pour exercer ces droits, veuillez nous contacter à l&apos;adresse e-mail suivante : 
                <a href="mailto:devexpress1@hotmail.com" className="text-primary hover:underline"> devexpress1@hotmail.com</a>
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">7. Modifications de la politique de confidentialité</h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
                La version la plus récente sera toujours disponible sur cette page, avec la date de la dernière mise à jour.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">8. Contact</h2>
              <p>
                Si vous avez des questions concernant cette politique de confidentialité, 
                veuillez nous contacter à l&apos;adresse suivante :
              </p>
              <p>
                <strong>DevExpress</strong><br />
                Email : <a href="mailto:devexpress1@hotmail.com" className="text-primary hover:underline">devexpress1@hotmail.com</a><br />
                Téléphone : <a href="tel:+32486251926" className="text-primary hover:underline">+32 486 25 19 26</a>
              </p>
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
