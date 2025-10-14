import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ConditionsUtilisation() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-8">Conditions d'Utilisation</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-lg mb-6">
                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">1. Acceptation des conditions</h2>
              <p>
                En accédant et en utilisant le site web de DevExpress, vous acceptez d'être lié par ces 
                conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez 
                que vous êtes responsable du respect des lois locales applicables. Si vous n'acceptez pas 
                ces conditions, vous n'êtes pas autorisé à utiliser ou à accéder à ce site.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">2. Utilisation de la licence</h2>
              <p>
                La permission est accordée de télécharger temporairement une copie des documents 
                (informations ou logiciels) sur le site web de DevExpress pour un visionnage transitoire 
                personnel et non commercial uniquement. Il s'agit de l'octroi d'une licence, et non d'un 
                transfert de titre, et sous cette licence, vous ne pouvez pas :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Modifier ou copier les documents</li>
                <li className="mb-2">Utiliser les documents à des fins commerciales ou pour une présentation publique</li>
                <li className="mb-2">Tenter de décompiler ou de désosser tout logiciel contenu sur le site web de DevExpress</li>
                <li className="mb-2">Supprimer tout droit d'auteur ou autres notations de propriété des documents</li>
                <li className="mb-2">Transférer les documents à une autre personne ou "refléter" les documents sur un autre serveur</li>
              </ul>
              <p>
                Cette licence sera automatiquement résiliée si vous violez l'une de ces restrictions et peut être 
                résiliée par DevExpress à tout moment. À la fin de votre consultation de ces documents ou à la 
                résiliation de cette licence, vous devez détruire tout matériel téléchargé en votre possession, 
                qu'il soit sous format électronique ou imprimé.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">3. Clause de non-responsabilité</h2>
              <p>
                Les documents sur le site web de DevExpress sont fournis "tels quels". DevExpress ne donne 
                aucune garantie, expresse ou implicite, et décline et annule par la présente toutes les autres 
                garanties, y compris, sans limitation, les garanties ou conditions implicites de qualité marchande, 
                d'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou autre 
                violation des droits.
              </p>
              <p className="mt-4">
                En outre, DevExpress ne garantit pas et ne fait aucune déclaration concernant l'exactitude, 
                les résultats probables, ou la fiabilité de l'utilisation des documents sur son site web ou 
                autrement liés à ces documents ou à tout site lié à ce site.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">4. Limitations</h2>
              <p>
                En aucun cas, DevExpress ou ses fournisseurs ne seront responsables de tout dommage 
                (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison 
                d'une interruption d'activité) découlant de l'utilisation ou de l'impossibilité d'utiliser 
                les documents sur le site web de DevExpress, même si DevExpress ou un représentant autorisé 
                de DevExpress a été informé oralement ou par écrit de la possibilité de tels dommages.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">5. Révisions et erreurs</h2>
              <p>
                Les documents apparaissant sur le site web de DevExpress pourraient inclure des erreurs 
                techniques, typographiques ou photographiques. DevExpress ne garantit pas que l'un des 
                documents de son site web est exact, complet ou à jour. DevExpress peut apporter des 
                modifications aux documents contenus sur son site web à tout moment sans préavis.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">6. Liens</h2>
              <p>
                DevExpress n'a pas examiné tous les sites liés à son site web et n'est pas responsable 
                du contenu de ces sites liés. L'inclusion de tout lien n'implique pas l'approbation par 
                DevExpress du site. L'utilisation de tout site web lié est aux risques et périls de l'utilisateur.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">7. Modifications des conditions d'utilisation</h2>
              <p>
                DevExpress peut réviser ces conditions d'utilisation de son site web à tout moment sans préavis. 
                En utilisant ce site web, vous acceptez d'être lié par la version alors en vigueur de ces 
                conditions d'utilisation.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">8. Droit applicable</h2>
              <p>
                Toute réclamation relative au site web de DevExpress sera régie par les lois de la Belgique, 
                sans égard à ses dispositions en matière de conflit de lois.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">9. Contact</h2>
              <p>
                Si vous avez des questions concernant ces conditions d'utilisation, 
                veuillez nous contacter à l'adresse suivante :
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
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
