
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import FadeIn from './FadeIn';

const CareFooter: React.FC = () => {
  return (
    <div className="bg-gradient-to-t from-gray-50 via-white/80 to-transparent w-full py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {/* Pourquoi CARE Button (Left) */}
          <FadeIn delay={100} direction="left">
            <Link to="/pourquoi-care#pourquoi-care" className="h-full">
              <Button variant="outline" className="w-full h-full border-rose-200 text-rose-500 hover:bg-rose-50 text-sm md:text-base py-6 transition-all duration-300 hover:shadow-lg rounded-xl bg-white/90 backdrop-blur-sm">
                Pourquoi C.A.R.E ?
              </Button>
            </Link>
          </FadeIn>
          
          {/* Nos ambitions Button (Middle) */}
          <FadeIn delay={200}>
            <Link to="/ambitions" className="h-full">
              <Button variant="outline" className="w-full h-full border-rose-200 text-rose-500 hover:bg-rose-50 text-sm md:text-base py-6 transition-all duration-300 hover:shadow-lg rounded-xl bg-white/90 backdrop-blur-sm">
                Nos ambitions
              </Button>
            </Link>
          </FadeIn>
          
          {/* Contact information (Right) */}
          <FadeIn delay={300} direction="right">
            <div className="h-full backdrop-blur-md bg-white/90 rounded-xl shadow-md border border-gray-100 p-4 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col justify-center h-full">
                <p className="text-gray-700 text-sm md:text-base mb-2">
                  Vous souhaitez créer votre onglet de spécialité ?
                </p>
                <p className="text-gray-700 text-sm md:text-base mb-2">
                  Vous souhaitez investir ou devenir partenaire ?
                </p>
                <p className="text-rose-500 font-semibold text-sm md:text-base mb-1">
                  Contactez-nous !
                </p>
                <div className="flex items-center">
                  <Linkedin size={18} className="text-blue-600 mr-1.5" />
                  <a 
                    href="https://www.linkedin.com/in/baptiste-mazas-577219182/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    Baptiste Mazas
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default CareFooter;
