
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FadeIn from './FadeIn';
import { ChevronDown, Folder } from 'lucide-react';

type CareSidebarProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  userType: "patient" | "medecin";
  getCategoryDisplayByUserType: (category: string, userType: "patient" | "medecin") => string;
  categoryColors: Record<string, { bg: string; text: string; border: string; light: string }>;
};

const CareSidebar: React.FC<CareSidebarProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  userType,
  getCategoryDisplayByUserType,
  categoryColors,
}) => {
  const displayCategory = getCategoryDisplayByUserType(selectedCategory, userType);
  const colorClass = categoryColors[selectedCategory] || { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-300", light: "bg-rose-100" };
  
  // État pour l'animation hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeIn className="w-full">
      <div className="glass-modern bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-5 h-fit mb-6 md:mb-0 border border-white/60">
        <h2 className="text-xl font-bold text-rose-500 mb-4 flex items-center">
          <Folder className="mr-2 h-5 w-5" />
          <span className="relative">
            Catégories
            <span className="absolute -bottom-1 left-0 h-1 w-1/2 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full"></span>
          </span>
        </h2>
        <div className="relative">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger 
              className={`w-full ${colorClass.text} border-2 ${colorClass.border} transition-all duration-300 rounded-xl py-3 
                relative overflow-hidden group`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Effet d'animation au survol */}
              <span 
                className={`absolute inset-0 ${colorClass.bg} opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
              />
              
              {/* Icône de la catégorie */}
              <div className="flex items-center">
                <span className={`${colorClass.bg} ${colorClass.text} p-1.5 rounded-full mr-2 flex items-center justify-center`}>
                  <Folder className="h-3.5 w-3.5" />
                </span>
                <SelectValue placeholder={displayCategory}>{displayCategory}</SelectValue>
              </div>
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-y-auto rounded-xl border border-gray-100 shadow-xl bg-white/95 backdrop-blur-lg p-1">
              {categories.map((category) => {
                const catDisplay = getCategoryDisplayByUserType(category, userType);
                const catColor = categoryColors[category] || { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-300", light: "bg-rose-100" };
                
                return (
                  <SelectItem 
                    key={category} 
                    value={category}
                    className={`${category === selectedCategory ? `${catColor.bg} ${catColor.text}` : ''} 
                    transition-all duration-200 rounded-lg my-1 py-2 px-3 focus:bg-gray-50 hover:${catColor.bg} hover:${catColor.text}`}
                  >
                    <div className="flex items-center">
                      <span className={`${catColor.bg} ${catColor.text} p-1.5 rounded-full mr-2 flex items-center justify-center`}>
                        <Folder className="h-3.5 w-3.5" />
                      </span>
                      {catDisplay}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          
          {/* Indicateur visuel */}
          <div className={`absolute -bottom-0.5 left-0 w-full h-0.5 overflow-hidden rounded-full transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-full h-full ${colorClass.bg}`}></div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default CareSidebar;
