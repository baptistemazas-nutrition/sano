
import React from 'react';
import { Database, HeartPulse, FileText, ClipboardCheck, Activity, Smartphone, User, UserRound } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const EcosystemVisualization: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Calculate positions for 6 items evenly distributed in a circle
  const getPosition = (index: number, totalItems: number, radius: number) => {
    // Start from the top (12 o'clock) and go clockwise
    // Each item is 360/totalItems degrees apart
    const angle = (index * (2 * Math.PI / totalItems)) - (Math.PI / 2); // Start from top (12 o'clock)
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  const getIconMargin = (size: string) => {
    // Adjust margins to center the ecosystem items based on their size
    if (size === "w-24 h-24" || size === "w-20 h-20") {
      return "mb-4"; // Larger icons need more bottom margin for proper spacing
    }
    return "mb-2"; // Smaller icons need less margin
  };

  // Determine appropriate sizes based on screen size
  const getCircleSize = () => {
    return isMobile ? "w-[300px] h-[300px]" : "w-[400px] h-[400px]";
  };

  const getCenterHubSize = () => {
    return isMobile ? "w-32 h-32" : "w-44 h-44";
  };

  const getContainerHeight = () => {
    return isMobile ? "h-[400px]" : "h-[500px]";
  };

  // Adjust radius for mobile
  const getRadius = () => {
    return isMobile ? 150 : 200; // Smaller radius on mobile
  };

  // Get the appropriate icon size based on the item type and screen size
  const getItemSize = (itemType: string) => {
    if (isMobile) {
      // On mobile, make all items a bit smaller
      if (itemType === "main") { // C.A.R.E, Veille médicale, MedQuest
        return "w-20 h-20";
      } else { // Data items
        return "w-14 h-14"; 
      }
    } else {
      // On desktop, keep the original sizes
      if (itemType === "main") { // C.A.R.E, Veille médicale, MedQuest
        return "w-24 h-24";
      } else { // Data items
        return "w-16 h-16";
      }
    }
  };

  // Get icon size based on screen size
  const getIconSize = (defaultSize: number) => {
    return isMobile ? Math.max(defaultSize - 6, 18) : defaultSize;
  };

  return (
    <div className="mb-16">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-medium text-sano-blue mb-8 text-center">Un écosystème d'applications médicales connectées au coeur de la relation médecin-patient</h3>
        
        <div className={`relative w-full max-w-3xl mx-auto ${getContainerHeight()} flex items-center justify-center`}>
          {/* Perfect circle with consistent styling */}
          <div className={`absolute ${getCircleSize()} rounded-full border-2 border-slate-200`}></div>
          
          {/* Doctor-patient central hub circle */}
          <div className={`absolute ${getCenterHubSize()} rounded-full bg-white flex items-center justify-center z-10 shadow-lg border border-slate-100`}>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="relative flex">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                    <UserRound className="text-sano-blue" size={isMobile ? 24 : 32} />
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-50 flex items-center justify-center border border-green-100 -ml-4">
                    <User className="text-sano-green" size={isMobile ? 24 : 32} />
                  </div>
                </div>
              </div>
              <p className="text-sano-blue font-semibold text-sm md:text-base">Médecin - Patient</p>
            </div>
          </div>
          
          {/* Equally distributed items around the circle with exact positioning */}
          {[
            { name: "Données cliniques", icon: <Database size={getIconSize(24)} className="text-blue-500" />, bgColor: "bg-blue-50", type: "data", textSize: "text-xs", action: "" },
            { name: "C.A.R.E", icon: <HeartPulse size={getIconSize(30)} className="text-[#FF6384]" />, bgColor: "bg-[#FFDEE2]/70", type: "main", textSize: "text-xs md:text-sm font-semibold text-sano-blue", action: "Agir" },
            { name: "Données biologiques", icon: <Activity size={getIconSize(24)} className="text-purple-500" />, bgColor: "bg-purple-50", type: "data", textSize: "text-xs", action: "" },
            { name: "Veille médicale", icon: <FileText size={getIconSize(30)} className="text-green-600" />, bgColor: "bg-green-50/80", type: "main", textSize: "text-xs md:text-sm font-semibold text-sano-blue", action: "Actualiser" },
            { name: "Appareils connectés", icon: <Smartphone size={getIconSize(24)} className="text-amber-500" />, bgColor: "bg-amber-50", type: "data", textSize: "text-xs", action: "" },
            { name: "MedQuest", icon: <ClipboardCheck size={getIconSize(30)} className="text-[#4A90E2]" />, bgColor: "bg-[#D3E4FD]/80", type: "main", textSize: "text-xs md:text-sm font-semibold text-sano-blue", action: "Comprendre" }
          ].map((item, index) => {
            const radius = getRadius(); // Adjust radius based on screen size
            const position = getPosition(index, 6, radius);
            const itemSize = getItemSize(item.type);
            const iconMargin = getIconMargin(itemSize);
            
            // Determine action text color based on the item name
            let actionColor = "";
            if (item.action === "Agir") {
              actionColor = "text-[#FF6384]"; // Red for C.A.R.E
            } else if (item.action === "Comprendre") {
              actionColor = "text-[#4A90E2]"; // Blue for MedQuest
            } else if (item.action === "Actualiser") {
              actionColor = "text-sano-green"; // Keep green for Veille médicale
            }
            
            return (
              <div 
                key={item.name} 
                className="absolute" 
                style={{ 
                  left: `calc(50% + ${position.x}px)`, 
                  top: `calc(50% + ${position.y}px)`, 
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`${itemSize} rounded-full ${item.bgColor} flex items-center justify-center ${iconMargin} shadow-md mx-auto`}>
                  {item.icon}
                </div>
                <div className="text-center">
                  <p className={`${item.textSize} font-medium text-gray-700`}>{item.name}</p>
                  {item.action && <p className={`text-xs font-medium ${actionColor}`}>{item.action}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EcosystemVisualization;
