
import React from 'react';
import FadeIn from './FadeIn';
import { Globe, Hospital, Target, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface AmbitionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const AmbitionCard: React.FC<AmbitionCardProps> = ({ icon, title, description, delay, color }) => (
  <FadeIn delay={delay}>
    <Card className={`glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full border-l-4 ${color}`}>
      <div className="flex items-center mb-4">
        <div className="bg-white p-3 rounded-full shadow-md mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-sano-blue">{title}</h3>
      </div>
      <p className="text-sano-blue/70 pl-14">{description}</p>
    </Card>
  </FadeIn>
);

const AmbitionsSection: React.FC = () => {
  return (
    <section id="ambitions" className="bg-gradient-to-b from-white to-sano-light-blue/20">
      <div className="section-container">
        <FadeIn delay={100}>
          <h2 className="section-title text-center mb-12">Nos ambitions</h2>
        </FadeIn>

        <div className="flex flex-col gap-6 mt-12 max-w-4xl mx-auto">
          {/* Timeline visualization */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sano-blue to-sano-green"></div>
            
            <FadeIn delay={200} className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-3 shadow-md z-10">
                <div className="bg-sano-blue rounded-full p-2">
                  <Hospital className="text-white" size={24} />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={300} className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-3 shadow-md z-10">
                <div className="bg-sano-blue/80 rounded-full p-2">
                  <Target className="text-white" size={24} />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={400} className="flex justify-center">
              <div className="bg-white rounded-full p-3 shadow-md z-10">
                <div className="bg-sano-green rounded-full p-2">
                  <Globe className="text-white" size={24} />
                </div>
              </div>
            </FadeIn>
          </div>
          
          <AmbitionCard
            icon={<Hospital className="text-sano-blue" size={24} />}
            title="Étendre Sano à d'autres spécialités médicales"
            description="Nous souhaitons appliquer notre approche à d'autres domaines médicaux pour rendre la médecine accessible à tous."
            delay={300}
            color="border-sano-blue"
          />
          
          <AmbitionCard
            icon={<Target className="text-sano-blue" size={24} />}
            title="Lancer un projet de recherche hospitalo-universitaire"
            description="Collaborer avec les institutions académiques et hospitalières pour mener des recherches de pointe sur l'application de l'IA dans la prévention médicale."
            delay={400}
            color="border-sano-blue/80"
          />
          
          <AmbitionCard
            icon={<Globe className="text-sano-green" size={24} />}
            title="Déploiement international"
            description="Adapter notre plateforme pour qu'elle soit accessible et pertinente à l'échelle mondiale, en commençant par l'Europe puis en visant un impact global."
            delay={500}
            color="border-sano-green"
          />
        </div>
      </div>
    </section>
  );
};

export default AmbitionsSection;
