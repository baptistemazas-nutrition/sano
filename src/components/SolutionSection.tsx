
import React from 'react';
import FadeIn from './FadeIn';
import EcosystemVisualization from './solutions/EcosystemVisualization';
import CareCard from './solutions/CareCard';
import VeilleMedicaleCard from './solutions/VeilleMedicaleCard';
import MedQuestCard from './solutions/MedQuestCard';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="bg-gradient-to-b from-white to-sano-light-blue/30 py-16">
      <div className="section-container">
        <FadeIn delay={100}>
          <h2 className="section-title text-center mb-8">Notre solution : SANO</h2>
        </FadeIn>

        {/* Harmonious visualization of the ecosystem */}
        <FadeIn delay={200}>
          <EcosystemVisualization />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* C.A.R.E - LEFT */}
          <FadeIn delay={300} direction="left">
            <CareCard />
          </FadeIn>

          {/* Veille médicale - RIGHT */}
          <FadeIn delay={400} direction="right">
            <VeilleMedicaleCard />
          </FadeIn>
        </div>
        
        {/* MedQuest - BOTTOM */}
        <FadeIn delay={500}>
          <MedQuestCard />
        </FadeIn>
      </div>
    </section>
  );
};

export default SolutionSection;
