
import React from 'react';
import FadeIn from './FadeIn';
import { Building, Code, Handshake, CheckCircle2, ArrowRight, User, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay: number;
  color: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ icon, title, items, delay, color }) => (
  <FadeIn delay={delay} className="w-full md:w-1/2 p-4">
    <Card className={`glass-card rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 border-t-4 ${color}`}>
      <div className="flex items-center mb-6">
        <div className="bg-white p-3 rounded-full shadow-md mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-sano-blue">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle2 className="text-sano-green mr-3 flex-shrink-0" size={18} />
            <span className="text-sano-blue/70">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  </FadeIn>
);

const RecruitmentSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <FadeIn delay={100}>
          <h2 className="section-title text-center mb-12">Qui nous recherchons ?</h2>
        </FadeIn>

        <div className="flex flex-wrap -mx-4 mt-8 justify-center">
          <RoleCard
            icon={<Rocket className="text-rose-500" size={24} />}
            title="Profil entrepreneur"
            items={[
              "Motivé par la santé publique",
              "Intérêt pour l'impact social",
              "Passionné par l'innovation numérique",
              "Objectifs : cadrage stratégique, structuration, levées de fonds, déploiement"
            ]}
            delay={200}
            color="border-rose-500"
          />
          
          <RoleCard
            icon={<Handshake className="text-sano-green" size={24} />}
            title="Partenariats & Financements"
            items={[
              "Incubateurs",
              "Hôpitaux et institutions de santé",
              "Mutuelles et assurances",
              "Laboratoires pharmaceutiques & Entreprises"
            ]}
            delay={400}
            color="border-sano-green"
          />
        </div>

        <FadeIn delay={500} className="mt-20 text-center">
          <a 
            href="https://www.linkedin.com/in/baptiste-mazas-577219182/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-sano-blue to-sano-green text-white px-8 py-6 rounded-full text-lg font-medium hover:shadow-lg transition-all transform hover:scale-105 inline-block group"
          >
            <div className="flex items-center space-x-2">
              <span>Si vous êtes convaincus que la prévention est l'avenir de la santé, rejoignez-nous ! ✨</span>
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default RecruitmentSection;
