
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import FadeIn from './FadeIn';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sano-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FadeIn className="md:col-span-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">SANO</h2>
              <p className="text-white/80 mb-6">
                La science médicale et la prévention accessibles à tous.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/baptiste-mazas-577219182/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div>
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#problems" className="text-white/80 hover:text-white transition-colors">Problématiques</a></li>
                <li><a href="#solution" className="text-white/80 hover:text-white transition-colors">Notre solution</a></li>
                <li><a href="#team" className="text-white/80 hover:text-white transition-colors">Équipe</a></li>
                <li><a href="#ambitions" className="text-white/80 hover:text-white transition-colors">Ambitions</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 text-white/80" size={18} />
                  <a href="mailto:contact@veillemedicale.fr" className="text-white/80 hover:text-white transition-colors">
                    contact@veillemedicale.fr
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-3 text-white/80" size={18} />
                  <a href="https://www.linkedin.com/in/baptiste-mazas-577219182/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Sano Health. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
