import React from 'react';
import FadeIn from './FadeIn';
import { Building, GraduationCap, User, Globe, Users, Network } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const TeamSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="team" className="bg-white">
      <div className="section-container">
        <FadeIn delay={100}>
          <h2 className="section-title text-center mb-16">L'écosystème Sano</h2>
        </FadeIn>

        <FadeIn delay={200} className="mb-24">
          <div className="glass-card rounded-2xl p-8 shadow-xl bg-gradient-to-r from-sano-light-blue to-sano-light-green/30">
            <div className="flex flex-col items-center">
              {/* Desktop Ecosystem View */}
              {!isMobile && (
                <div className="relative w-full max-w-4xl mx-auto h-[550px] mb-10">
                  {/* Network Background Effect */}
                  <div className="absolute inset-0 z-0">
                    {/* Main Circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[60%] h-[60%] border-2 border-sano-blue/15 rounded-full"></div>
                      <div className="absolute w-[75%] h-[75%] border border-sano-blue/10 rounded-full"></div>
                      <div className="absolute w-[40%] h-[40%] border border-sano-blue/10 rounded-full"></div>
                    </div>
                    
                    {/* Network Lines - More organic network appearance */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      {/* Radial gradients for lines */}
                      <defs>
                        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(103, 150, 210, 0.1)" />
                          <stop offset="50%" stopColor="rgba(103, 150, 210, 0.2)" />
                          <stop offset="100%" stopColor="rgba(103, 150, 210, 0.05)" />
                        </linearGradient>
                        <linearGradient id="lineGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgba(103, 150, 210, 0.05)" />
                          <stop offset="50%" stopColor="rgba(103, 150, 210, 0.2)" />
                          <stop offset="100%" stopColor="rgba(103, 150, 210, 0.1)" />
                        </linearGradient>
                      </defs>
                      
                      {/* Connection lines */}
                      <path d="M200,150 C300,200 400,150 500,200" stroke="url(#lineGradient1)" strokeWidth="1.5" fill="none" />
                      <path d="M500,200 C600,250 650,350 500,400" stroke="url(#lineGradient1)" strokeWidth="1.5" fill="none" />
                      <path d="M500,400 C400,450 300,450 200,400" stroke="url(#lineGradient1)" strokeWidth="1.5" fill="none" />
                      <path d="M200,400 C150,350 150,200 200,150" stroke="url(#lineGradient1)" strokeWidth="1.5" fill="none" />
                      
                      {/* Cross connections */}
                      <path d="M200,150 C350,250 350,300 200,400" stroke="url(#lineGradient2)" strokeWidth="1" fill="none" />
                      <path d="M500,200 C350,250 350,300 500,400" stroke="url(#lineGradient2)" strokeWidth="1" fill="none" />
                      <path d="M200,150 C350,170 450,170 500,200" stroke="url(#lineGradient2)" strokeWidth="1" fill="none" />
                      <path d="M200,400 C350,380 450,380 500,400" stroke="url(#lineGradient2)" strokeWidth="1" fill="none" />
                    </svg>
                    
                    {/* Connection points */}
                    <div className="absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                      <div className="h-4 w-4 rounded-full bg-sano-blue/20 p-1">
                        <div className="h-full w-full rounded-full bg-sano-blue/30 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2 translate-y-1/2">
                      <div className="h-4 w-4 rounded-full bg-sano-blue/20 p-1">
                        <div className="h-full w-full rounded-full bg-sano-blue/30 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute left-[25%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
                      <div className="h-4 w-4 rounded-full bg-sano-blue/20 p-1">
                        <div className="h-full w-full rounded-full bg-sano-blue/30 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute right-[25%] top-[50%] transform translate-x-1/2 -translate-y-1/2">
                      <div className="h-4 w-4 rounded-full bg-sano-blue/20 p-1">
                        <div className="h-full w-full rounded-full bg-sano-blue/30 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Central connector point */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sano-light-blue to-sano-light-green flex items-center justify-center">
                        <Network className="text-sano-blue/70" size={20} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Grid for equal sized cards */}
                  <div className="grid grid-cols-2 gap-8 w-full h-full">
                    {/* Dr. Mazas - Top Left - UPDATED DESCRIPTION */}
                    <div className="flex items-center justify-center">
                      <Card className="glass-card rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center w-full h-full relative z-10">
                        <div className="w-20 h-20 bg-sano-blue/10 rounded-full flex items-center justify-center mb-4">
                          <User className="text-sano-blue" size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-sano-blue mb-1">Dr. Baptiste Mazas</h4>
                        <p className="text-sano-blue/70 text-sm text-center">Diabétologie, Nutrition, Prévention Cardiovasculaire, Médecine du Sport</p>
                      </Card>
                    </div>
                    
                    {/* JEP & A.C - Top Right */}
                    <div className="flex items-center justify-center">
                      <Card className="glass-card rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center w-full h-full relative z-10">
                        <div className="w-20 h-20 bg-sano-blue/10 rounded-full flex items-center justify-center mb-4">
                          <Globe className="text-sano-blue" size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-sano-blue mb-1 text-center">JEP & A.C</h4>
                        <p className="text-sano-blue/70 text-sm text-center">Développeurs web, Ecole 42</p>
                      </Card>
                    </div>
                    
                    {/* Expert Network - Bottom Left */}
                    <div className="flex items-center justify-center">
                      <Card className="glass-card rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center w-full h-full relative z-10">
                        <div className="w-20 h-20 bg-sano-blue/10 rounded-full flex items-center justify-center mb-4">
                          <Building className="text-sano-blue" size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-sano-blue mb-1">Réseau d'experts</h4>
                        <p className="text-sano-blue/70 text-sm">AP-HP, Hôpitaux Universitaires</p>
                      </Card>
                    </div>
                    
                    {/* Academic Partnerships - Bottom Right */}
                    <div className="flex items-center justify-center">
                      <Card className="glass-card rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center w-full h-full relative z-10">
                        <div className="w-20 h-20 bg-sano-green/10 rounded-full flex items-center justify-center mb-4">
                          <GraduationCap className="text-sano-green" size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-sano-blue mb-1">Partenariats académiques</h4>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                          <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10 shadow-sm">CentraleSupélec</span>
                          <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10 shadow-sm">Polytechnique</span>
                          <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10 shadow-sm">42</span>
                          <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10 shadow-sm">HEC</span>
                          <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10 shadow-sm">ESSEC</span>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Ecosystem View - Grid Layout */}
              {isMobile && (
                <div className="grid grid-cols-1 gap-6 w-full relative">
                  {/* Network Indicator for Mobile */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-0 pointer-events-none">
                    <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-sano-blue/10 to-transparent absolute"></div>
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-sano-blue/10 to-transparent absolute"></div>
                  </div>
                  
                  {/* Dr. Mazas - UPDATED DESCRIPTION */}
                  <Card className="glass-card rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-sano-blue/10 rounded-full flex items-center justify-center mb-4">
                        <User className="text-sano-blue" size={24} />
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-sano-blue">Dr. Baptiste Mazas</h4>
                        <p className="text-sano-blue/70 text-sm">Diabétologie, Nutrition, Prévention Cardiovasculaire, Médecine du Sport</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* JEP & A.C */}
                  <Card className="glass-card rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="flex items-center justify-center">
                      <div className="w-14 h-14 bg-sano-blue/10 rounded-full flex items-center justify-center mr-4">
                        <Globe className="text-sano-blue" size={24} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-sano-blue">JEP & A.C</h4>
                        <p className="text-sano-blue/70 text-sm">Développeurs web, Ecole 42</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Expert Network */}
                  <Card className="glass-card rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-sano-blue/10 rounded-full flex items-center justify-center mr-4">
                        <Building className="text-sano-blue" size={24} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-sano-blue">Réseau d'experts</h4>
                        <p className="text-sano-blue/70 text-sm">AP-HP, Hôpitaux Universitaires</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Academic Partnerships */}
                  <Card className="glass-card rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative z-10">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-sano-green/10 rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="text-sano-green" size={24} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-bold text-sano-blue">Partenariats académiques</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10">CentraleSupélec</span>
                          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10">Polytechnique</span>
                          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10">42</span>
                          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10">HEC</span>
                          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-sano-blue/80 border border-sano-blue/10">ESSEC</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Connection indicators for mobile */}
                  <div className="flex items-center justify-center py-3">
                    <Network className="text-sano-blue/60 mr-2" size={18} />
                    <span className="text-sm text-sano-blue/60 font-medium">Réseau interconnecté</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TeamSection;
