
import React from 'react';
import { ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MedQuestCard: React.FC = () => {
  return (
    <Card className="glass-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-t-4 border-[#4A90E2] overflow-hidden">
      <div className="md:flex md:items-center">
        <div className="bg-[#D3E4FD] p-6 flex justify-center md:w-64 flex-shrink-0">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <ClipboardCheck className="text-[#4A90E2]" size={36} />
          </div>
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-2xl font-bold text-sano-blue mb-3 flex items-center">
            MedQuest
          </h3>
          <p className="text-sano-blue/80 mb-3">
            <strong>L'outil de questionnaires en ligne pour les professionnels de santé</strong>
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <CheckCircle2 className="text-[#4A90E2] mr-2 flex-shrink-0" size={16} />
              <span className="text-sano-blue/80">Plus de questions</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-[#4A90E2] mr-2 flex-shrink-0" size={16} />
              <span className="text-sano-blue/80">Plus de réponses</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-[#4A90E2] mr-2 flex-shrink-0" size={16} />
              <span className="text-sano-blue/80">Plus de communication</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MedQuestCard;
