
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from '@/hooks/use-mobile';
import { aiService } from '@/services/aiService';
import { toast } from 'sonner';
import FadeIn from '@/components/FadeIn';

// Import our components
import CareSidebar from '@/components/CareSidebar';
import CareContent from '@/components/CareContent';
import CareFooter from '@/components/CareFooter';

// Sort categories alphabetically
const careCategories = [
  "Activité physique adaptée",
  "Cholestérol",
  "Diabète",
  "Diététique",
  "Evaluation du risque cardiovasculaire",
  "Hypertension artérielle",
  "Maladie du foie gras (stéatose hépatique)",
  "Maladie rénale chronique",
  "Nutrition du sport",
  "Obésité",
  "Sevrage tabagique",
  "Syndrome d'apnée du sommeil"
];

// Map categories to colors - with inverted colors as requested
const categoryColors: Record<string, { bg: string, text: string, border: string, light: string }> = {
  "Evaluation du risque cardiovasculaire": { bg: "bg-red-50", text: "text-red-700", border: "border-red-300", light: "bg-red-100" },
  "Diététique": { bg: "bg-green-50", text: "text-green-700", border: "border-green-300", light: "bg-green-100" },
  // Nutrition du sport et Activité physique adaptée - couleurs inversées
  "Nutrition du sport": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-300", light: "bg-purple-100" },
  "Activité physique adaptée": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-300", light: "bg-blue-100" },
  "Sevrage tabagique": { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300", light: "bg-gray-200" },
  "Hypertension artérielle": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-300", light: "bg-pink-100" },
  // Diabète et Cholestérol - couleurs inversées
  "Diabète": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-300", light: "bg-indigo-100" },
  "Cholestérol": { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-300", light: "bg-yellow-100" },
  "Obésité": { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-300", light: "bg-teal-100" },
  "Maladie du foie gras (stéatose hépatique)": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-300", light: "bg-amber-100" },
  "Syndrome d'apnée du sommeil": { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-300", light: "bg-cyan-100" },
  "Maladie rénale chronique": { bg: "bg-lime-50", text: "text-lime-700", border: "border-lime-300", light: "bg-lime-100" }
};

// Expert content for each category
const expertContent: Record<string, Record<string, string>> = {
  "Diabète": {
    patient: "Le diabète est une maladie caractérisée par un taux de glucose sanguin (glycémie) trop élevé. Il existe principalement deux types : le diabète de type 1 (auto-immun) et le diabète de type 2 (lié au mode de vie). Les symptômes incluent soif excessive, mictions fréquentes et fatigue. Une bonne gestion implique un suivi médical régulier, une alimentation équilibrée, de l'activité physique et parfois des médicaments.",
    medecin: "Le diabète de type 2 se caractérise par une insulinorésistance progressive et un déficit sécrétoire relatif d'insuline. La prise en charge thérapeutique doit être individualisée avec un objectif d'HbA1c généralement < 7% (ou < 6.5% chez le patient jeune sans comorbidité). Les mesures hygiéno-diététiques sont essentielles, avec une escalade thérapeutique selon les recommandations actuelles (metformine en première intention, puis inhibiteurs SGLT2 ou GLP-1 RA en fonction du profil patient).",
    tools: "• Outils de calcul du risque de diabète\n• Nomogramme d'ajustement d'insuline\n• Protocole de surveillance glycémique\n• Calculatrice d'équivalence glucidique\n• Évaluation du risque de complications"
  },
  "Hypertension artérielle": {
    patient: "L'hypertension artérielle est une élévation anormale de la pression du sang dans les vaisseaux. Cette pression doit idéalement être maintenue sous 140/90 mmHg. L'HTA est souvent silencieuse mais peut causer des complications graves comme AVC ou infarctus. Le traitement repose sur une alimentation pauvre en sel, l'activité physique, la perte de poids si nécessaire, et des médicaments adaptés.",
    medecin: "L'HTA est définie par des valeurs ≥ 140/90 mmHg confirmées par des mesures répétées. L'évaluation initiale doit rechercher des causes secondaires, une atteinte des organes cibles et le risque cardiovasculaire global. Pour la majorité des patients, la cible est < 140/90 mmHg, mais des cibles plus basses (< 130/80 mmHg) sont recommandées chez certains patients à haut risque CV. La stratégie thérapeutique repose sur la combinaison d'IEC/ARA2, inhibiteur calcique et diurétique thiazidique.",
    tools: "• Calculateur de risque cardiovasculaire SCORE2\n• Algorithme de traitement selon ESH/ESC 2023\n• Protocole MAPA/automesure tensionnelle\n• Évaluation du retentissement sur les organes cibles\n• Nomogramme d'adaptation thérapeutique"
  },
  "Cholestérol": {
    patient: "Le cholestérol est une substance grasse naturellement présente dans l'organisme. Un excès de 'mauvais' cholestérol (LDL) peut former des plaques dans les artères et augmenter le risque cardiovasculaire. Le 'bon' cholestérol (HDL) aide à éliminer le LDL. Pour maintenir un bon équilibre, privilégiez une alimentation équilibrée, limitez les graisses saturées, pratiquez une activité physique régulière et suivez vos prescriptions médicales.",
    medecin: "La dyslipidémie est un facteur de risque cardiovasculaire modifiable majeur. L'objectif thérapeutique de LDL-cholestérol varie selon le niveau de risque CV: très élevé (<0.55 g/L), élevé (<0.7 g/L), modéré (<1.0 g/L) et faible (<1.16 g/L). En prévention primaire, les statines sont recommandées après échec des mesures hygiéno-diététiques. L'association avec ézétimibe puis inhibiteurs PCSK9 est à considérer en cas de non-atteinte des objectifs, particulièrement en prévention secondaire.",
    tools: "• Calculateur du risque cardiovasculaire SCORE2\n• Table de conversion LDL/HDL/CT en mmol/L et g/L\n• Algorithme d'intensification thérapeutique\n• Évaluation du risque de rhabdomyolyse\n• Protocole de suivi biologique"
  },
  "Activité physique adaptée": {
    patient: "L'activité physique adaptée (APA) est un programme d'exercices personnalisé selon vos capacités et besoins. Elle améliore votre condition physique, réduit les risques de maladies chroniques et optimise l'efficacité des traitements. Idéalement, visez 30 minutes d'activité modérée 5 jours par semaine ou 25 minutes d'activité intense 3 jours par semaine, avec 2 séances de renforcement musculaire hebdomadaires.",
    medecin: "La prescription d'APA doit être individualisée selon les comorbidités, capacités fonctionnelles et préférences du patient. Les recommandations actuelles préconisent 150-300 minutes/semaine d'activité modérée ou 75-150 minutes/semaine d'activité intense, associées à 2 séances hebdomadaires de renforcement musculaire. L'intensité peut être évaluée par échelle de Borg, FC max ou MET. Une évaluation préalable (ECG d'effort si ATCD CV) est recommandée avant prescription, avec une progression graduelle de l'intensité et de la durée.",
    tools: "• Questionnaire d'aptitude à l'activité physique (Q-AAP+)\n• Échelle de Borg modifiée\n• Calculateur de FC cible par âge\n• Programmes d'exercices par pathologie\n• Évaluation du niveau d'activité physique (IPAQ)"
  },
  "Diététique": {
    patient: "Une alimentation équilibrée est essentielle pour votre santé. Privilégiez les fruits et légumes (5 portions/jour), les céréales complètes, les protéines maigres et les bonnes graisses (huile d'olive, poissons gras). Limitez le sel (<5g/jour), le sucre et les graisses saturées. Hydratez-vous suffisamment et adaptez votre apport calorique à votre niveau d'activité physique. Des ajustements spécifiques peuvent être nécessaires selon votre état de santé.",
    medecin: "Les interventions nutritionnelles doivent être personnalisées selon les comorbidités et préférences du patient. Le régime méditerranéen a démontré des bénéfices cardiovasculaires significatifs avec un niveau de preuve élevé (NP1). Pour l'hypertension, le régime DASH est recommandé avec restriction sodée modérée (5-6g/j). En cas de dyslipidémie, privilégier les acides gras insaturés, limiter les AGS (<7% AET) et augmenter les apports en fibres (>25g/j). Pour le diabète de type 2, ajuster l'apport glucidique et favoriser les aliments à faible index glycémique.",
    tools: "• Calculateur de besoins énergétiques (Harris-Benedict)\n• Table d'index glycémique\n• Échelle SAIN-LIM pour qualité nutritionnelle\n• Outil d'évaluation de l'adhésion au régime méditerranéen\n• Monitoring de la consommation sodée"
  },
  "Evaluation du risque cardiovasculaire": {
    patient: "L'évaluation du risque cardiovasculaire permet d'estimer votre probabilité de développer une maladie cardiaque ou un AVC dans les années à venir. Ce calcul prend en compte plusieurs facteurs comme votre âge, sexe, tension artérielle, taux de cholestérol, tabagisme et antécédents familiaux. Connaître votre niveau de risque permet d'adapter les mesures de prévention et les traitements nécessaires pour préserver votre santé cardiovasculaire.",
    medecin: "L'évaluation du risque cardiovasculaire global est fondamentale pour orienter les décisions thérapeutiques. Les recommandations européennes actuelles préconisent l'utilisation du score SCORE2/SCORE2-OP qui estime le risque d'événement CV fatal ou non à 10 ans. La stratification en 4 niveaux (faible, modéré, élevé, très élevé) permet de définir les objectifs thérapeutiques, notamment pour le LDL-cholestérol et la pression artérielle. Pour les patients diabétiques ou avec maladie rénale chronique, des algorithmes spécifiques sont recommandés.",
    tools: "• Calculateur SCORE2/SCORE2-OP en ligne\n• Évaluation du risque résiduel sous traitement\n• Estimation du bénéfice absolu des interventions\n• Table de stratification du risque ESC 2021\n• Algorithme de décision thérapeutique selon le niveau de risque"
  },
  "Obésité": {
    patient: "L'obésité est définie par un IMC ≥ 30 kg/m². Elle peut entraîner diverses complications comme le diabète, l'hypertension ou l'apnée du sommeil. La prise en charge repose sur une approche globale associant alimentation équilibrée, activité physique régulière, soutien psychologique et parfois des traitements médicamenteux ou chirurgicaux. L'objectif est une perte de poids progressive et durable, avec des bénéfices significatifs même pour une réduction modérée de 5-10% du poids initial.",
    medecin: "L'obésité nécessite une prise en charge multidisciplinaire. L'évaluation initiale doit comprendre l'IMC, le tour de taille, les comorbidités et l'impact psychosocial. Une perte de poids de 5-15% est déjà associée à une amélioration cliniquement significative des comorbidités. Les interventions comportementales combinant diététique, activité physique et suivi psychologique constituent le socle thérapeutique. Les traitements médicamenteux (GLP-1 RA, etc.) peuvent être envisagés si IMC ≥30 ou ≥27 avec comorbidités. La chirurgie bariatrique est indiquée pour IMC ≥40 ou ≥35 avec comorbidités après échec d'une prise en charge médicale bien conduite.",
    tools: "• Calculateur d'IMC et d'IMC ajusté\n• Évaluation du risque d'apnée du sommeil (STOP-BANG)\n• Échelle de qualité de vie spécifique (IWQOL-Lite)\n• Protocole de suivi post-chirurgie bariatrique\n• Nomogramme de dépense énergétique"
  },
  "Maladie rénale chronique": {
    patient: "La maladie rénale chronique est une détérioration progressive de la fonction des reins. Elle est souvent silencieuse jusqu'à un stade avancé, d'où l'importance d'un dépistage régulier. Les principaux facteurs de risque sont le diabète, l'hypertension et l'âge. Le traitement vise à ralentir la progression de la maladie par le contrôle des facteurs de risque, une alimentation adaptée et des médicaments spécifiques.",
    medecin: "La MRC est définie par un DFG <60 ml/min/1,73m² et/ou des marqueurs d'atteinte rénale pendant >3 mois. La classification KDIGO en 5 stades selon le DFG et l'albuminurie guide la prise en charge. Le contrôle tensionnel (cible <130/80 mmHg) avec bloqueurs du SRAA est fondamental, particulièrement en cas de protéinurie. L'optimisation du contrôle glycémique chez les diabétiques est essentielle, avec une préférence pour les iSGLT2 qui ont démontré un effet néphroprotecteur indépendant. Une restriction protéique modérée (0,8g/kg/j) peut être bénéfique aux stades avancés. L'orientation précoce vers un néphrologue est recommandée dès le stade 3B.",
    tools: "• Calculateur de DFG (CKD-EPI 2021)\n• Nomogramme d'ajustement médicamenteux selon le DFG\n• Outil de prédiction de la progression (KFRE)\n• Évaluation du risque cardiovasculaire spécifique\n• Guide d'adaptation diététique par stade"
  },
  "Nutrition du sport": {
    patient: "Une nutrition adaptée à votre activité sportive optimise performances et récupération. Avant l'effort, privilégiez des glucides complexes 2-3h avant. Pendant l'exercice prolongé (>1h), hydratez-vous régulièrement et apportez des glucides simples si nécessaire. Après l'effort, consommez dans les 30 minutes un repas combinant protéines et glucides pour favoriser la récupération. Ajustez vos apports caloriques selon l'intensité et le type d'activité pratiquée.",
    medecin: "La nutrition sportive doit être individualisée selon le type d'activité (endurance, résistance, intermittent), sa durée et son intensité. Pour les sports d'endurance, les recommandations actuelles préconisent 5-7g/kg/j de glucides en entraînement régulier et jusqu'à 10g/kg/j en période d'entraînement intensif. L'apport protéique optimal se situe entre 1,2 et 2g/kg/j selon l'intensité de l'entraînement, avec une répartition sur la journée favorisant la synthèse protéique. La période anabolique post-effort (30-60min) est cruciale pour optimiser la récupération avec un apport de 20-25g de protéines de haute valeur biologique et des glucides (rapport 1:3-4). Une hydratation adaptée est essentielle avec une stratégie personnalisée selon le taux de sudation.",
    tools: "• Calculateur de besoins caloriques adaptés au sport\n• Planification nutritionnelle périodisée\n• Évaluation du statut d'hydratation\n• Protocole de recharge glucidique pré-compétition\n• Estimation des pertes hydroélectrolytiques"
  },
  "Sevrage tabagique": {
    patient: "Le sevrage tabagique apporte des bénéfices immédiats et à long terme pour votre santé. Dès 20 minutes après la dernière cigarette, votre tension artérielle et fréquence cardiaque diminuent. Pour réussir votre arrêt, combinez approche comportementale et aides médicamenteuses si nécessaire (substituts nicotiniques, médicaments). N'hésitez pas à vous faire accompagner par un professionnel de santé, cela augmente significativement vos chances de succès.",
    medecin: "L'approche du sevrage tabagique repose sur la stratégie des 5A: Ask (rechercher systématiquement), Advise (conseiller l'arrêt), Assess (évaluer la motivation), Assist (aider à l'arrêt) et Arrange (organiser le suivi). L'évaluation initiale doit comprendre le test de Fagerström et la recherche de comorbidités psychiatriques. Les traitements de première ligne incluent les substituts nicotiniques (formes orales + patch), la varénicline et le bupropion. La combinaison d'un traitement pharmacologique et d'un soutien comportemental intensif double les chances de succès à 6 mois. Un suivi rapproché est recommandé avec une vigilance particulière sur les symptômes dépressifs et le risque de rechute.",
    tools: "• Test de dépendance de Fagerström\n• Échelle HAD pour anxiété/dépression\n• Mesure du CO expiré\n• Calculateur d'économies financières\n• Protocole d'adaptation posologique des substituts nicotiniques"
  },
  "Maladie du foie gras (stéatose hépatique)": {
    patient: "La maladie du foie gras se caractérise par une accumulation excessive de graisse dans le foie, souvent liée au surpoids ou à une alimentation trop riche. Elle peut évoluer silencieusement vers une inflammation (stéatohépatite) puis une fibrose. Les mesures essentielles sont la perte de poids progressive (5-10%), l'activité physique régulière, la limitation des sucres raffinés, de l'alcool et des graisses saturées, ainsi qu'un bon contrôle du diabète et du cholestérol si présents.",
    medecin: "La NAFLD/MASH nécessite une approche systématique: 1) Évaluation de la sévérité via biomarqueurs non-invasifs (FIB-4, élastographie) pour identifier la fibrose avancée; 2) Recherche et prise en charge des comorbidités métaboliques associées. Le socle thérapeutique repose sur les modifications du mode de vie avec objectif de perte de poids de 7-10%. Les GLP-1 RA ont démontré une efficacité sur la stéatohépatite dans les essais récents. Pour les patients avec fibrose significative (≥F2) ou MASH avec fibrose, les inhibiteurs FXR (acide obéticholique) et les agonistes PPAR (lanifibranor) montrent des résultats prometteurs. La transplantation hépatique reste le traitement de dernière ligne en cas de cirrhose décompensée.",
    tools: "• Calculateur de scores non-invasifs (FIB-4, NFS)\n• Algorithme d'évaluation de la fibrose\n• Suivi longitudinal des biomarqueurs\n• Programme d'intervention sur le mode de vie\n• Protocole de dépistage du CHC chez les patients cirrhotiques"
  },
  "Syndrome d'apnée du sommeil": {
    patient: "Le syndrome d'apnée du sommeil se caractérise par des arrêts respiratoires pendant le sommeil, entraînant fatigue diurne, ronflements et réveils nocturnes. Il peut augmenter le risque cardiovasculaire et métabolique s'il n'est pas traité. La prise en charge repose sur la PPC (pression positive continue), la perte de poids si nécessaire, l'évitement de l'alcool et des sédatifs avant le coucher, et parfois des orthèses d'avancée mandibulaire. Un diagnostic et un traitement précoces améliorent significativement la qualité de vie.",
    medecin: "Le SAOS doit être évoqué systématiquement devant une somnolence diurne excessive, des ronflements ou une HTA réfractaire. Le diagnostic repose sur la polysomnographie ou la polygraphie ventilatoire, avec classification selon l'IAH (léger: 5-15/h, modéré: 15-30/h, sévère: >30/h). La PPC reste le traitement de référence pour les SAOS modérés à sévères (IAH ≥15/h) ou symptomatiques. L'observance minimale recommandée est de 4h/nuit pendant 70% des nuits. Les orthèses d'avancée mandibulaire constituent une alternative en cas de SAOS léger à modéré ou d'intolérance à la PPC. La prise en charge des comorbidités et des facteurs aggravants (obésité, position de sommeil, consommation d'alcool) est fondamentale.",
    tools: "• Questionnaire de dépistage STOP-BANG\n• Échelle de somnolence d'Epworth\n• Analyse de l'observance à la PPC\n• Protocole d'adaptation des pressions\n• Algorithme de prise en charge en fonction de l'IAH"
  }
};

const Care: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(careCategories[0]);
  const [userType, setUserType] = useState<"patient" | "medecin">("patient");
  const [searchQuery, setSearchQuery] = useState("");
  const [showTools, setShowTools] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const isMobile = useIsMobile();

  // Get the current category's colors
  const currentCategoryColors = categoryColors[selectedCategory] || { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-300", light: "bg-rose-100" };

  // Add scroll to top effect when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset search result when category or user type changes
  useEffect(() => {
    setSearchResult("");
    setShowTools(false);
  }, [selectedCategory, userType]);

  const getPlaceholderByCategory = (category: string) => {
    const placeholders: Record<string, string> = {
      "Evaluation du risque cardiovasculaire": "Rechercher des informations sur les risques cardiovasculaires...",
      "Diététique": "Rechercher des conseils diététiques...",
      "Nutrition du sport": "Rechercher des informations sur la nutrition sportive...",
      "Activité physique adaptée": "Rechercher des programmes d'activité physique adaptée...",
      "Sevrage tabagique": "Rechercher des méthodes de sevrage tabagique...",
      "Hypertension artérielle": "Rechercher des informations sur l'hypertension artérielle...",
      "Diabète": "Rechercher des informations sur le diabète...",
      "Cholestérol": "Rechercher des informations sur le cholestérol...",
      "Obésité": "Rechercher des informations sur l'obésité...",
      "Maladie du foie gras (stéatose hépatique)": "Rechercher des informations sur la stéatose hépatique...",
      "Syndrome d'apnée du sommeil": "Rechercher des informations sur l'apnée du sommeil...",
      "Maladie rénale chronique": "Rechercher des informations sur les maladies rénales chroniques..."
    };
    
    return placeholders[category] || "Rechercher...";
  };

  const getCategoryDisplayByUserType = (category: string, userType: "patient" | "medecin") => {
    if (category === "Maladie du foie gras (stéatose hépatique)") {
      return userType === "patient" ? "Maladie du foie gras" : "Stéatose hépatique";
    }
    return category;
  };

  const getContentBasedOnUserTypeAndCategory = (category: string, userType: "patient" | "medecin") => {
    if (searchResult) {
      return searchResult;
    }
    
    // Return expert content based on category and user type
    if (expertContent[category] && expertContent[category][userType]) {
      return expertContent[category][userType];
    }
    
    // Default content if no expert content is available
    if (category === "Maladie du foie gras (stéatose hépatique)") {
      return userType === "patient" 
        ? "Informations sur la maladie du foie gras pour les patients"
        : "Informations cliniques sur la stéatose hépatique pour les professionnels de santé";
    }
    return `Contenu pour ${category} - Version ${userType === "patient" ? "patient" : "professionnel"}`;
  };

  const getToolsContentByCategory = (category: string) => {
    // Return tools content if available
    if (expertContent[category] && expertContent[category].tools) {
      return expertContent[category].tools;
    }
    
    return `Algorithmes et outils dédiés pour ${category}`;
  };

  const handleCopy = () => {
    // Get the content to copy
    const content = showTools ? 
      getToolsContentByCategory(selectedCategory) : 
      searchResult || getContentBasedOnUserTypeAndCategory(selectedCategory, userType);
      
    // Copy to clipboard
    navigator.clipboard.writeText(content)
      .then(() => {
        toast.success("Contenu copié dans le presse-papier");
      })
      .catch(err => {
        console.error('Erreur lors de la copie:', err);
        toast.error("Erreur lors de la copie du contenu");
      });
  };

  const toggleTools = () => {
    setShowTools(!showTools);
    setSearchResult("");
  };
  
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setSearchResult("");
    
    try {
      // Utilisation du service AI pour obtenir une réponse
      const result = await aiService.getAIResponse(searchQuery, selectedCategory, userType);
      setSearchResult(result);
    } catch (error) {
      console.error("Erreur dans la recherche IA:", error);
      toast.error("Problème de connexion avec l'IA. Utilisation de la réponse locale.");
      
      // Fallback to local response generator
      const results = generateSimpleAIResponse(searchQuery, selectedCategory, userType);
      setSearchResult(results);
    } finally {
      setIsSearching(false);
    }
  };
  
  // Simple AI response generator function as fallback
  const generateSimpleAIResponse = (query: string, category: string, userType: "patient" | "medecin") => {
    const queryLower = query.toLowerCase();
    const categoryInfo = expertContent;
    
    // Default responses for categories not specifically handled
    const defaultResponses = {
      patient: `Voici des informations sur ${category} concernant votre requête "${query}": Cette condition nécessite un suivi médical régulier et peut être gérée avec un mode de vie sain incluant une alimentation équilibrée et de l'exercice physique. Discutez avec votre médecin des options de traitement adaptées à votre situation.`,
      medecin: `Informations cliniques sur ${category} concernant "${query}": L'approche thérapeutique doit être personnalisée en fonction du profil du patient, incluant l'évaluation des comorbidités et l'adhérence au traitement. Les dernières recommandations suggèrent une approche multidisciplinaire avec suivi régulier et ajustement du traitement selon la réponse clinique.`
    };

    // Determine response based on query content
    if (queryLower.includes("symptôme") || queryLower.includes("signe")) {
      return `Les symptômes courants de ${category} incluent des changements de pression artérielle, fatigue, et parfois des douleurs spécifiques. Un diagnostic précoce permet une meilleure prise en charge.`;
    } else if (queryLower.includes("traitement") || queryLower.includes("médicament")) {
      return `Les traitements pour ${category} peuvent inclure des médicaments spécifiques, des changements de mode de vie et un suivi régulier. Consultez votre médecin pour un traitement personnalisé.`;
    } else if (queryLower.includes("alimentation") || queryLower.includes("nutrition") || queryLower.includes("manger")) {
      return `Pour ${category}, une alimentation équilibrée est recommandée, avec une attention particulière aux apports en sel, sucres et graisses. Un nutritionniste peut vous aider à établir un plan alimentaire adapté.`;
    }
    
    // Use category-specific responses if available, otherwise use defaults
    if (categoryInfo[category]) {
      return categoryInfo[category][userType] || defaultResponses[userType];
    }
    
    return defaultResponses[userType];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-rose-50/50 via-rose-100/20 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-rose-400 to-red-500 py-3 md:py-4 px-4 md:px-6 shadow-lg sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <FadeIn direction="left">
            <div className="flex items-center">
              <Link to="/" className="text-white mr-4 hover:bg-white/20 p-2 rounded-full transition-all duration-300">
                <ArrowLeft size={isMobile ? 20 : 24} />
              </Link>
              <div className="flex flex-col md:flex-row md:items-baseline">
                <h1 className="text-2xl md:text-3xl font-bold text-white">C.A.R.E,</h1>
                <span className="text-sm md:text-lg font-light text-white/90 md:ml-2">votre assistant spécialiste</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-1 shadow-inner">
                <ToggleGroup 
                  type="single" 
                  value={userType} 
                  onValueChange={(value) => {
                    if (value) setUserType(value as "patient" | "medecin");
                  }}
                  className="bg-white/10 rounded-full"
                >
                  <ToggleGroupItem 
                    value="patient" 
                    className="text-white text-xs md:text-base data-[state=on]:bg-white data-[state=on]:text-rose-500 rounded-full px-2 md:px-4 py-1 transition-all duration-300"
                  >
                    Patient
                  </ToggleGroupItem>
                  <ToggleGroupItem 
                    value="medecin" 
                    className="text-white text-xs md:text-base data-[state=on]:bg-white data-[state=on]:text-rose-500 rounded-full px-2 md:px-4 py-1 transition-all duration-300"
                  >
                    Médecin
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Main content - with curved container */}
      <div className="container mx-auto mt-6 md:mt-10 px-4 flex-1 pb-6 relative z-10">
        {/* Categories at the top */}
        <CareSidebar 
          categories={careCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          userType={userType}
          getCategoryDisplayByUserType={getCategoryDisplayByUserType}
          categoryColors={categoryColors}
        />

        {/* Content area */}
        <div className="mt-6 md:mt-8">
          <CareContent 
            selectedCategory={selectedCategory}
            currentCategoryColors={currentCategoryColors}
            userType={userType}
            getCategoryDisplayByUserType={getCategoryDisplayByUserType}
            getContentBasedOnUserTypeAndCategory={getContentBasedOnUserTypeAndCategory}
            getToolsContentByCategory={getToolsContentByCategory}
            showTools={showTools}
            toggleTools={toggleTools}
            handleCopy={handleCopy}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            getPlaceholderByCategory={getPlaceholderByCategory}
            handleSearch={handleSearch}
            isSearching={isSearching}
          />
        </div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10">
        <CareFooter />
      </div>

      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[-10%] w-[30%] h-[30%] rounded-full bg-rose-200/30 blur-[120px]"></div>
        <div className="absolute top-[50%] right-[-5%] w-[25%] h-[25%] rounded-full bg-blue-200/20 blur-[100px]"></div>
        <div className="absolute bottom-[5%] left-[20%] w-[40%] h-[20%] rounded-full bg-purple-200/20 blur-[120px]"></div>
      </div>
    </div>
  );
};

export default Care;
