
import React from 'react';
import { FileText, CheckCircle2, ExternalLink, CircleDot } from 'lucide-react';
import { Card } from '@/components/ui/card';

const VeilleMedicaleCard: React.FC = () => {
  return (
    <a href="https://veillemedicale.fr" target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="glass-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-t-4 border-sano-green overflow-hidden cursor-pointer h-full">
        <div className="bg-sano-green/10 p-6 flex justify-center">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <FileText className="text-sano-green" size={36} />
          </div>
        </div>
        <div className="px-6 py-6">
          <h3 className="text-2xl font-bold text-sano-blue mb-3 text-center flex items-center justify-center">
            Veille médicale
            <CircleDot className="ml-2 text-green-500" size={12} />
          </h3>
          <p className="text-center text-sano-blue/80 mb-5 text-lg font-semibold">
            S'informer et se mettre à jour sur la science grâce à l'IA générative
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle2 className="text-sano-green mr-3 flex-shrink-0 mt-1" size={18} />
              <span className="text-sano-blue/80">Synthèse des publications scientifiques récentes</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-sano-green mr-3 flex-shrink-0 mt-1" size={18} />
              <span className="text-sano-blue/80">Alertes personnalisées par spécialité</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-sano-green mr-3 flex-shrink-0 mt-1" size={18} />
              <span className="text-sano-blue/80">Un niveau de language adapté à chacun</span>
            </div>
            <div className="flex items-start mt-3">
              <ExternalLink className="text-sano-blue mr-3 flex-shrink-0 mt-1" size={18} />
              <span className="text-sano-blue hover:text-sano-green transition-colors">
                veillemedicale.fr
              </span>
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-gray-200 text-center">
            <p className="text-sano-green font-medium">+1000 médecins • +60 000 requêtes par semaine</p>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default VeilleMedicaleCard;
