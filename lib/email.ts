/**
 * Service d'envoi d'emails via Web3Forms
 * Web3Forms est un service gratuit qui permet d'envoyer des emails depuis des formulaires HTML
 * sans avoir besoin de backend ou de configuration complexe
 * 
 * Site: https://web3forms.com/
 */

/**
 * Envoie un email via Web3Forms
 */
export async function sendEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // Créer un objet FormData pour l'envoi
    const formData = new FormData();
    
    // Utiliser la clé d'accès Web3Forms depuis les variables d'environnement
    // Cette clé doit être définie dans le fichier .env.local
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
    if (!accessKey) {
      console.error('La clé d\'accès Web3Forms n\'est pas définie dans les variables d\'environnement');
      throw new Error('Configuration manquante: WEB3FORMS_KEY');
    }
    
    formData.append('access_key', accessKey);
    
    // Informations du formulaire
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);
    
    // Email de destination (votre email)
    formData.append('to_email', 'devexpress1@hotmail.com');
    
    // Désactiver le captcha
    formData.append('botcheck', '');
    
    // Envoyer la requête à Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    
    // Vérifier si la requête a réussi
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    // Analyser la réponse
    const result = await response.json();
    console.log('Réponse de Web3Forms:', result);
    
    // Web3Forms renvoie { success: true } en cas de succès
    if (result.success) {
      return { success: true, message: 'Email envoyé avec succès' };
    } else {
      console.error('Réponse inattendue de Web3Forms:', result);
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, message: 'Erreur lors de l\'envoi de l\'email' };
  }
}
