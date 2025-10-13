"use client";

import { useState, useEffect } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Vérifier si un service a été sélectionné via l'URL ou l'événement personnalisé
  useEffect(() => {
    // Fonction pour extraire et définir le service à partir de l'URL
    const checkUrlForService = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash.includes("?service=")) {
          const service = hash.split("?service=")[1];
          if (service) {
            setFormData(prev => ({
              ...prev,
              subject: decodeURIComponent(service)
            }));
          }
        }
      }
    };
    
    // Vérifier l'URL au chargement initial
    checkUrlForService();
    
    // Écouter l'événement personnalisé déclenché par ServicesSection
    const handleServiceSelected = (event: CustomEvent) => {
      const serviceTitle = event.detail;
      if (serviceTitle) {
        setFormData(prev => ({
          ...prev,
          subject: serviceTitle
        }));
        
        // Mettre en surbrillance le formulaire
        const formElement = document.querySelector('.contact-form');
        if (formElement) {
          formElement.classList.add('highlight-form');
          setTimeout(() => {
            formElement.classList.remove('highlight-form');
          }, 1000);
        }
      }
    };
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('serviceSelected', handleServiceSelected as EventListener);
    
    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('serviceSelected', handleServiceSelected as EventListener);
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="apple-section bg-secondary fade-in">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Contactez-nous</h2>
            <p className="text-foreground/70 mb-8 text-sm">
              Vous avez un projet en tête ? N&apos;hésitez pas à nous contacter pour discuter de vos besoins et de comment nous pouvons vous aider.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <p className="text-foreground/70 text-xs">contact@agenceweb.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Téléphone</h4>
                  <p className="text-foreground/70 text-xs">+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Adresse</h4>
                  <p className="text-foreground/70 text-xs">123 Avenue des Champs-Élysées, 75008 Paris</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 card">
            <h4 className="text-base font-medium mb-5">Envoyez-nous un message</h4>
            
            {submitSuccess ? (
              <div className="bg-green-50 text-green-800 p-3 rounded-lg mb-5 text-sm">
                Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
              </div>
            ) : null}
            
            {/* Message d'erreur désactivé pour le moment */}
            
            <form onSubmit={handleSubmit} className="space-y-3 contact-form">
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-medium mb-1">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="Site Web Complet">Site Web Complet - 990€</option>
                  <option value="Landing Page">Landing Page - 590€</option>
                  <option value="Application Web">Application Web - 1990€</option>
                  <option value="Autre">Autre demande</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="apple-button w-full flex items-center justify-center text-sm"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
