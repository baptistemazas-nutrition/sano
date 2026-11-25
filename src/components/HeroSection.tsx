
import React from 'react';
import FadeIn from './FadeIn';
import { ArrowDown, UserRound, User } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-sano-light-blue/30 pt-16">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(10, 37, 64, 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(76, 175, 80, 0.03) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 pt-16 md:pt-0 flex flex-col items-center text-center">
        <FadeIn delay={200}>
          <div className="flex justify-center mb-6">
            <div className="relative flex transform hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sano-blue/10 flex items-center justify-center border-2 border-sano-blue/20 shadow-lg">
                <UserRound className="text-sano-blue" size={32} />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sano-green/10 flex items-center justify-center border-2 border-sano-blue/20 shadow-lg -ml-4">
                <User className="text-sano-green" size={32} />
              </div>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={300}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text font-display max-w-5xl mx-auto leading-tight">
            Sano, la science médicale et la prévention accessibles à tous
          </h1>
        </FadeIn>
        
        <FadeIn delay={400}>
          <p className="text-lg md:text-xl text-sano-blue/70 max-w-3xl mx-auto mb-12">
            L'écosystème médical intelligent du quotidien pour les médecins et les patients
          </p>
        </FadeIn>
        
        <FadeIn delay={500}>
          <a 
            href="#problems" 
            className="bg-gradient-to-r from-sano-blue to-sano-green text-white px-10 py-5 rounded-full text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sano-blue focus:ring-offset-2 group flex items-center space-x-2"
          >
            <span>Découvrir Sano</span>
            <ArrowDown className="animate-bounce ml-2" size={20} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
