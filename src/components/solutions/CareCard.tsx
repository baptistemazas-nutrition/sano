
import React from 'react';
import { HeartPulse, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link as RouterLink } from 'react-router-dom';

const CareCard: React.FC = () => {
  return (
    <RouterLink to="/care" className="block h-full">
      <Card className="glass-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-t-4 border-sano-blue overflow-hidden cursor-pointer h-full">
        <div className="bg-[#FFDEE2] p-6 flex justify-center">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <HeartPulse className="text-sano-blue" size={36} />
          </div>
        </div>
        <div className="px-6 py-6">
          <h3 className="text-2xl font-bold text-sano-blue mb-3 text-center">C.A.R.E</h3>
          <p className="text-sano-blue/80 mb-5 text-lg text-center">
            <strong>Votre assistant intelligent et scientifique, entraîné par les experts du domaine</strong>
          </p>
          <div className="space-y-3 mb-5">
            <div className="flex items-start">
              <CheckCircle2 className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
              <div>
                <p className="text-sano-blue/80 font-medium">Pour tous</p>
                <ul className="text-sano-blue/80 mt-1 space-y-1.5">
                  <li className="flex items-start">
                    <span className="text-sano-blue/80"><span className="text-red-500">•</span> Estimez votre risque cardiovasculaire à 10 ans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sano-blue/80"><span className="text-red-500">•</span> Des conseils scientifiques pour l'obésité, le diabète, l'hypertension artérielle, le cholestérol, la diététique et l'activité physique</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
              <div>
                <p className="text-sano-blue/80 font-medium">Pour les professionnels de santé</p>
                <ul className="text-sano-blue/80 mt-1 space-y-1.5">
                  <li className="flex items-start">
                    <span className="text-sano-blue/80"><span className="text-red-500">•</span> Un assistant pour la prise en charge des maladies cardio-métaboliques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sano-blue/80"><span className="text-red-500">•</span> Des recommandations hygiéno-diététiques personnalisées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sano-blue/80"><span className="text-red-500">•</span> Des outils d'aide à l'orientation et au suivi des patients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </RouterLink>
  );
};

export default CareCard;
