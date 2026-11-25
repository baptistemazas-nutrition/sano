
import React from 'react';
import FadeIn from './FadeIn';
import { AlertTriangle, Clock, UserX } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProblemCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  delay: number;
  iconBgColor: string;
  iconColor: string;
}> = ({ icon, title, description, delay, iconBgColor, iconColor }) => (
  <FadeIn delay={delay} className="w-full md:w-1/3 p-4">
    <Card className="glass-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-white/50 h-full overflow-hidden">
      <div className={`${iconBgColor} w-full py-6 flex justify-center`}>
        <div className={`${iconColor} p-3 rounded-full`}>
          {icon}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-sano-blue mb-4 text-center">{title}</h3>
        {typeof description === 'string' ? (
          <p className="text-sano-blue/70">{description}</p>
        ) : (
          description
        )}
      </CardContent>
    </Card>
  </FadeIn>
);

const ProblemSection: React.FC = () => {
  return (
    <section id="problems" className="bg-white">
      <div className="section-container">
        <FadeIn delay={100}>
          <h2 className="section-title mb-10 text-center">Les problématiques de santé actuelles</h2>
        </FadeIn>

        <div className="flex flex-wrap -mx-4 mt-8">
          <ProblemCard
            icon={<AlertTriangle size={32} />}
            title="Explosion des maladies chroniques"
            description={
              <div className="text-sano-blue/80 text-center">
                <p className="text-lg font-medium mb-3">20 millions de Français</p>
                <p className="text-lg mb-3">2 milliards dans le monde</p>
                <p className="text-lg font-medium text-sano-green">80% des maladies cardiovasculaires sont expliqués par des facteurs que l'on sait prévenir</p>
              </div>
            }
            delay={300}
            iconBgColor="bg-sano-light-blue"
            iconColor="bg-white text-sano-blue"
          />
          <ProblemCard
            icon={<Clock size={32} />}
            title="Des professionnels surchargés"
            description={
              <div className="text-sano-blue/80 text-center">
                <p className="text-lg font-medium mb-2">+50% du temps consacré à l'administratif</p>
                <p className="text-lg mb-2">+5000 nouveaux articles publiés chaque jour</p>
                <p className="text-lg">Prises en charge de plus en plus complexes</p>
              </div>
            }
            delay={400}
            iconBgColor="bg-sano-light-blue"
            iconColor="bg-white text-sano-blue"
          />
          <ProblemCard
            icon={<UserX size={32} />}
            title="Des patients isolés"
            description={
              <div className="text-sano-blue/80 text-center">
                <p className="text-lg mb-3">Un suivi insuffisant</p>
                <p className="text-lg mb-3">Un accès limité à une information médicale fiable</p>
                <p className="text-lg">Peu d'outils pour la gestion des maladies chroniques</p>
              </div>
            }
            delay={500}
            iconBgColor="bg-sano-light-blue"
            iconColor="bg-white text-sano-blue"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
