
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Wrench, Copy, Send, BookOpen, FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import FadeIn from './FadeIn';
import { Card, CardContent } from "@/components/ui/card";

type CareContentProps = {
  selectedCategory: string;
  currentCategoryColors: { bg: string; text: string; border: string; light: string };
  userType: "patient" | "medecin";
  getCategoryDisplayByUserType: (category: string, userType: "patient" | "medecin") => string;
  getContentBasedOnUserTypeAndCategory: (category: string, userType: "patient" | "medecin") => string;
  getToolsContentByCategory: (category: string) => string;
  showTools: boolean;
  toggleTools: () => void;
  handleCopy: () => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  getPlaceholderByCategory: (category: string) => string;
  handleSearch: () => void;
  isSearching: boolean;
};

const CareContent: React.FC<CareContentProps> = ({
  selectedCategory,
  currentCategoryColors,
  userType,
  getCategoryDisplayByUserType,
  getContentBasedOnUserTypeAndCategory,
  getToolsContentByCategory,
  showTools,
  toggleTools,
  handleCopy,
  searchQuery,
  setSearchQuery,
  getPlaceholderByCategory,
  handleSearch,
  isSearching
}) => {
  const isMobile = useIsMobile();

  const generatePrescription = () => {
    console.log(`Generating prescription for ${selectedCategory}`);
    // Functionality to generate prescription will be added here
  };

  return (
    <FadeIn delay={100} className="flex-1">
      <Card className={`bg-white/95 backdrop-blur-md shadow-xl border-0 overflow-hidden transition-all duration-300 hover:shadow-2xl rounded-2xl`}>
        <div className="relative overflow-hidden">
          {/* Decorative colored top bar */}
          <div className={`h-1.5 w-full ${currentCategoryColors.bg} mb-0`}></div>
          
          <CardContent className="p-5 md:p-6 flex flex-col">
            <div className="flex-1 mb-4">
              <div className="flex flex-col md:flex-row md:items-center mb-6 md:justify-between">
                <h2 className={`text-xl md:text-2xl font-bold mb-3 md:mb-0 ${currentCategoryColors.text} transition-colors relative flex items-center`}>
                  <BookOpen className="mr-2 h-5 w-5" />
                  {getCategoryDisplayByUserType(selectedCategory, userType)}
                  <span className={`absolute -bottom-1 left-0 h-0.5 w-1/4 ${currentCategoryColors.bg} rounded-full`}></span>
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={toggleTools}
                    className={`px-3 md:px-4 text-sm md:text-base ${currentCategoryColors.text} hover:${currentCategoryColors.bg} border-gray-200 hover:border-gray-300 rounded-xl transition-all shadow-sm`}
                  >
                    <Wrench className="mr-1.5 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden xs:inline">Boîte à outils</span>
                  </Button>

                  {userType === "medecin" && (
                    <Button
                      onClick={generatePrescription}
                      className={`px-3 md:px-4 text-sm md:text-base bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-all rounded-xl shadow-sm`}
                    >
                      <FileText className="mr-1.5 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                      <span className="hidden xs:inline">Générer une ordonnance</span>
                    </Button>
                  )}

                  <Button
                    onClick={handleCopy}
                    className={`px-3 md:px-4 text-sm md:text-base ${currentCategoryColors.bg} ${currentCategoryColors.text} hover:${currentCategoryColors.light} transition-all rounded-xl shadow-sm`}
                  >
                    <Copy className="mr-1.5 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden xs:inline">Copier</span>
                  </Button>
                </div>
              </div>
              
              <div className={`${currentCategoryColors.bg} p-4 md:p-8 rounded-2xl shadow-inner ${currentCategoryColors.text} flex flex-col overflow-y-auto h-48 md:h-72 border ${currentCategoryColors.border} transition-all duration-300`}>
                {isSearching ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-current"></div>
                    <p className="mt-3 text-sm opacity-70">Recherche en cours...</p>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    {showTools ? getToolsContentByCategory(selectedCategory) : getContentBasedOnUserTypeAndCategory(selectedCategory, userType)}
                  </div>
                )}
              </div>
            </div>
            
            <div className={`mt-auto pt-6`}>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button 
                  variant="default"
                  className={`px-3 md:px-4 py-2 text-sm md:text-base ${currentCategoryColors.bg} ${currentCategoryColors.text} border-none hover:${currentCategoryColors.light} shadow-sm hover:shadow-md transition-all rounded-xl`}
                  onClick={handleSearch}
                  disabled={isSearching || !searchQuery.trim()}
                >
                  <Search className="mr-1.5 md:mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                  Assistant IA
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                <div className="relative">
                  <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${currentCategoryColors.text}/70`} size={20} />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={getPlaceholderByCategory(selectedCategory)}
                    className={`pl-12 py-6 text-sm md:text-base rounded-xl border border-gray-200 focus-visible:ring-2 focus-visible:ring-${currentCategoryColors.text}/30 focus-visible:border-${currentCategoryColors.text}/50 shadow-sm transition-all duration-200 focus:shadow-md`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim() && !isSearching) {
                        handleSearch();
                      }
                    }}
                  />
                  {isMobile && (
                    <Button 
                      type="button"
                      size="sm" 
                      className={`absolute right-2 top-1/2 transform -translate-y-1/2 h-9 ${currentCategoryColors.bg} ${currentCategoryColors.text} hover:${currentCategoryColors.light} transition-colors rounded-lg`}
                      onClick={handleSearch}
                      disabled={isSearching || !searchQuery.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-xxs md:text-xs text-gray-500 mt-2 text-center px-2">
                  Nos algorithmes sont entraînés sur des modèles d'IA classiques et une expertise médicale basée sur les recommandations nationales et internationales; ils restent néanmoins imparfaits. C.A.R.E n'est pas tenu responsable des informations générées.
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </FadeIn>
  );
};

export default CareContent;
