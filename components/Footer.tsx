import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-primary/10 to-secondary/70 border-t border-primary/10">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">DevExpress</h3>
            <p className="text-sm text-foreground/80 mb-4">Nous sommes une agence web passionnée par la création d&apos;expériences numériques exceptionnelles.</p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-primary">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Landing Page
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Site Web Complet
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/notre-histoire" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-foreground/80 text-sm">+32 486 25 19 26</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-foreground/80 text-sm">devexpress1@hotmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/80 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DevExpress. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link href="/politique-de-confidentialite" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              Politique de confidentialité
            </Link>
            <Link href="/conditions-utilisation" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
