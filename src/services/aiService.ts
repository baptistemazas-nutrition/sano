
import { HfInference } from '@huggingface/inference';

// Utiliser une clé d'API valide ou null pour utiliser des réponses locales
const API_KEY = ''; // Laisser vide pour forcer l'utilisation des réponses locales
const hf = new HfInference(API_KEY || null);

// Réponses locales spécialisées par catégorie, basées sur les recommandations nationales et internationales
const localResponses = {
  "diabete": {
    patient: "Le diabète est une maladie chronique caractérisée par un taux élevé de sucre dans le sang. Il existe principalement deux types : le type 1 (insulino-dépendant) et le type 2 (non insulino-dépendant). Les symptômes courants incluent une soif excessive, une miction fréquente, une fatigue inhabituelle et une perte de poids inexpliquée. La gestion du diabète repose sur une alimentation équilibrée, une activité physique régulière et parfois des médicaments. Un suivi médical régulier est essentiel pour prévenir les complications.",
    medecin: "Le diabète se caractérise par une hyperglycémie chronique résultant d'un défaut de sécrétion d'insuline, d'action de l'insuline ou des deux. Le diagnostic repose sur une glycémie à jeun ≥ 1,26 g/L (7,0 mmol/L) à deux reprises ou une HbA1c ≥ 6,5%. Pour le diabète de type 1, le traitement par insuline est indispensable. Pour le diabète de type 2, l'approche thérapeutique est progressive : mesures hygiéno-diététiques, puis monothérapie (metformine en première intention), bithérapie, trithérapie et insuline si nécessaire. La prise en charge des facteurs de risque cardiovasculaires associés est primordiale.",
    generic: "Les dernières recommandations internationales (ADA, EASD) préconisent une approche personnalisée du diabète, centrée sur le patient et ses comorbidités. Les nouvelles classes thérapeutiques comme les GLP-1 RA et les SGLT2i ont démontré des bénéfices cardiovasculaires et rénaux significatifs au-delà de leur effet hypoglycémiant."
  },
  "cholesterol": {
    patient: "Le cholestérol est une substance grasse naturellement présente dans votre corps. Un taux élevé de 'mauvais' cholestérol (LDL) peut augmenter le risque de maladies cardiaques. Un régime alimentaire équilibré pauvre en graisses saturées, une activité physique régulière et le maintien d'un poids santé peuvent aider à gérer votre taux de cholestérol. Dans certains cas, des médicaments comme les statines peuvent être nécessaires. Des contrôles réguliers sont recommandés, surtout après 40 ans.",
    medecin: "L'hypercholestérolémie est définie par un taux de LDL-cholestérol > 1,60 g/L. L'évaluation du risque cardiovasculaire global est essentielle pour définir la stratégie thérapeutique. En prévention primaire, les seuils d'intervention médicamenteuse dépendent du niveau de risque CV. Les statines restent le traitement de première intention avec un objectif de LDL-c variable selon le niveau de risque. Les études récentes soutiennent l'intérêt des inhibiteurs de PCSK9 en prévention secondaire chez les patients à très haut risque non contrôlés malgré un traitement par statine à dose maximale tolérée.",
    generic: "Les recommandations de l'ESC/EAS 2019 ont redéfini les objectifs de LDL-cholestérol selon le niveau de risque CV : <1,16 g/L pour les patients à bas risque, <1,0 g/L pour les patients à risque modéré, <0,7 g/L pour les patients à haut risque et <0,55 g/L pour les patients à très haut risque, notamment ceux en prévention secondaire."
  },
  "hypertension": {
    patient: "L'hypertension artérielle correspond à une pression sanguine trop élevée dans vos artères. Elle est souvent asymptomatique mais peut être dangereuse à long terme. Une tension normale est inférieure à 140/90 mmHg. Pour la contrôler, limitez le sel, maintenez un poids santé, pratiquez une activité physique régulière, limitez l'alcool et le stress. Des médicaments peuvent être nécessaires selon votre situation. Un suivi médical régulier est important pour ajuster le traitement si besoin.",
    medecin: "L'hypertension artérielle est définie par une PAS ≥ 140 mmHg et/ou une PAD ≥ 90 mmHg, mesurées en consultation et confirmées par des mesures ambulatoires (MAPA ou automesure). La stratégie thérapeutique repose sur l'évaluation du risque CV global. En première intention, les principales classes médicamenteuses sont les IEC/ARA2, inhibiteurs calciques et diurétiques thiazidiques. Les bêta-bloquants sont réservés à des indications spécifiques. L'objectif tensionnel est généralement < 140/90 mmHg, mais peut être abaissé à < 130/80 mmHg chez certains patients à haut risque CV, si bien toléré.",
    generic: "Les recommandations ESC/ESH 2018 préconisent un traitement d'emblée par bithérapie chez la majorité des patients hypertendus, idéalement en association fixe pour améliorer l'observance. La mesure ambulatoire de la pression artérielle (MAPA) ou l'automesure tensionnelle sont recommandées pour confirmer le diagnostic et évaluer l'efficacité thérapeutique."
  },
  "asthme": {
    patient: "L'asthme est une maladie chronique qui affecte les voies respiratoires en les rendant plus sensibles et inflammées. Les symptômes incluent l'essoufflement, la toux (surtout la nuit), une respiration sifflante et une sensation d'oppression thoracique. Le traitement repose sur deux types de médicaments : les bronchodilatateurs pour soulager rapidement et les anti-inflammatoires pour contrôler l'asthme à long terme. Il est essentiel d'identifier et d'éviter les déclencheurs personnels comme les allergènes ou l'effort physique.",
    medecin: "L'asthme est caractérisé par une inflammation chronique des voies aériennes avec hyperréactivité bronchique et obstruction variable et réversible. La prise en charge thérapeutique suit une approche par paliers, selon la classification GINA. Le traitement de fond repose principalement sur les corticoïdes inhalés, associés si nécessaire à des LABA. Les nouvelles recommandations GINA 2019 préconisent l'abandon des β2-mimétiques de courte durée d'action seuls, même dans l'asthme léger. Les biothérapies (anti-IgE, anti-IL5/IL5R, anti-IL4R) constituent une option thérapeutique dans l'asthme sévère après phénotypage précis.",
    generic: "Selon les recommandations GINA 2023, l'association corticoïde inhalé/formotérol à la demande est désormais recommandée comme traitement de choix pour l'asthme léger. Le phénotypage de l'asthme sévère permet d'orienter vers une biothérapie ciblée : omalizumab (anti-IgE) pour l'asthme allergique, mépolizumab/benralizumab (anti-IL5/IL5R) pour l'asthme éosinophilique, ou dupilumab (anti-IL4R) pour l'asthme à éosinophiles/Th2 élevé."
  },
  "depression": {
    patient: "La dépression est plus qu'une simple tristesse passagère. C'est une maladie qui affecte vos pensées, vos sentiments et votre capacité à gérer la vie quotidienne. Les symptômes incluent une tristesse persistante, une perte d'intérêt pour les activités habituelles, des troubles du sommeil et de l'appétit, et des pensées négatives récurrentes. Des traitements efficaces existent, comme la psychothérapie et parfois des médicaments. N'hésitez pas à consulter un professionnel, car la dépression n'est pas un signe de faiblesse et peut toucher n'importe qui.",
    medecin: "Le trouble dépressif caractérisé est défini selon les critères DSM-5 par au moins 5 symptômes présents pendant au moins 2 semaines, incluant obligatoirement l'humeur dépressive ou l'anhédonie. L'évaluation de la sévérité et du risque suicidaire est primordiale. La stratégie thérapeutique de première intention associe psychothérapie (TCC ou interpersonnelle) et antidépresseurs (ISRS en première ligne). Le suivi doit être rapproché les premières semaines. En cas de résistance, après vérification de l'observance, les options incluent le changement d'antidépresseur, les associations médicamenteuses, la potentialisation par thymorégulateurs, et en dernier recours l'électroconvulsivothérapie pour les formes sévères résistantes.",
    generic: "Les recommandations récentes de la HAS et de la CANMAT insistent sur l'importance d'une prise en charge multimodale de la dépression. Les ISRS et IRSNA restent les antidépresseurs de première intention, avec un délai d'action de 2-4 semaines. Les options de stimulation cérébrale (TMS, électroconvulsivothérapie) ont une place croissante dans les dépressions résistantes. Le dépistage et la prise en charge des comorbidités, notamment anxieuses, sont essentiels."
  },
  "arthrite": {
    patient: "L'arthrite est une inflammation des articulations qui cause douleur, raideur et gonflement. L'arthrose (usure du cartilage) et la polyarthrite rhumatoïde (maladie auto-immune) en sont les formes les plus courantes. Pour soulager les symptômes, on recommande une activité physique adaptée, le maintien d'un poids santé, des médicaments anti-inflammatoires et antidouleur. Des techniques comme l'application de chaleur ou de froid peuvent aussi aider. Consultez votre médecin pour un diagnostic précis et un traitement personnalisé.",
    medecin: "La prise en charge de l'arthrite varie selon son étiologie. Pour l'arthrose, la stratégie thérapeutique associe traitements non pharmacologiques (activité physique adaptée, perte de poids si nécessaire) et pharmacologiques (paracétamol, AINS, infiltrations de corticoïdes ou d'acide hyaluronique). Pour la polyarthrite rhumatoïde, le traitement de fond doit être instauré précocement, avec le méthotrexate en première intention, puis escalade thérapeutique vers les biothérapies (anti-TNF, anti-IL6R, inhibiteurs de JAK) en cas de réponse insuffisante. L'objectif est la rémission ou à défaut une faible activité de la maladie, évaluée par des scores composites (DAS28, SDAI).",
    generic: "Les recommandations EULAR 2019 pour la polyarthrite rhumatoïde préconisent une stratégie treat-to-target avec adaptation thérapeutique tous les 3-6 mois jusqu'à atteinte de l'objectif. Les inhibiteurs de JAK offrent une alternative orale aux biothérapies injectables. Pour l'arthrose, les recommandations OARSI 2019 soulignent l'importance des approches non-pharmacologiques et suggèrent une personnalisation des traitements selon les comorbidités et l'atteinte mono ou poly-articulaire."
  }
};

/**
 * Service pour gérer les appels à l'API d'IA de Hugging Face
 */
export const aiService = {
  /**
   * Récupère une réponse de l'IA pour une question médicale
   * @param query - La question posée
   * @param category - La catégorie médicale
   * @param userType - Le type d'utilisateur (patient ou médecin)
   * @returns La réponse générée par l'IA
   */
  async getAIResponse(query: string, category: string, userType: "patient" | "medecin"): Promise<string> {
    try {
      // Normaliser la catégorie pour correspondre aux clés de localResponses
      const normalizedCategory = category.toLowerCase()
        .replace("cholestérol", "cholesterol")
        .replace("dépression", "depression");
        
      // Si aucune requête spécifique n'est fournie, retourner une phrase générique sur la catégorie
      if (!query.trim()) {
        if (localResponses[normalizedCategory as keyof typeof localResponses]?.generic) {
          console.log("Utilisation de la réponse générique pour:", normalizedCategory);
          return localResponses[normalizedCategory as keyof typeof localResponses].generic;
        }
      }
      
      // Si aucune clé API n'est fournie ou en cas d'erreur, utiliser la réponse locale
      if (!API_KEY) {
        // Vérifier si nous avons une réponse locale pour cette catégorie
        if (localResponses[normalizedCategory as keyof typeof localResponses]) {
          console.log("Utilisation de la réponse locale pour:", normalizedCategory);
          return localResponses[normalizedCategory as keyof typeof localResponses][userType];
        } else {
          // Réponse générique si aucune catégorie spécifique n'est trouvée
          return `Voici une réponse générale concernant ${category} pour un ${userType === "patient" ? "patient" : "professionnel de santé"}: Cette fonctionnalité est en cours de développement pour cette catégorie spécifique. Veuillez consulter les recommandations nationales et internationales les plus récentes pour obtenir des informations précises.`;
        }
      }

      // Si une clé API est disponible, essayer d'utiliser Hugging Face
      const modelId = 'mistralai/Mistral-7B-Instruct-v0.2';
      
      // Création du prompt spécifique à la catégorie
      const prompt = `Tu es un assistant médical spécialisé en ${category}, expert des recommandations nationales et internationales actuelles. 
                     Réponds à cette question pour un ${userType === 'patient' ? 'patient' : 'professionnel de santé'}: 
                     "${query}"
                     Donne une réponse concise, factuelle et basée sur les connaissances médicales à jour.
                     Si tu n'es pas sûr, indique-le clairement.`;

      // Appel à l'API via le client Hugging Face
      const response = await hf.textGeneration({
        model: modelId,
        inputs: prompt,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.3,
          top_p: 0.9,
          return_full_text: false
        }
      });

      return response.generated_text || "Désolé, je n'ai pas pu générer une réponse pertinente.";
    } catch (error) {
      console.error("Erreur dans l'appel à l'API IA:", error);
      
      // En cas d'erreur, utiliser une réponse locale
      const normalizedCategory = category.toLowerCase()
        .replace("cholestérol", "cholesterol")
        .replace("dépression", "depression");
        
      if (localResponses[normalizedCategory as keyof typeof localResponses]) {
        console.log("Utilisation de la réponse locale (après erreur API) pour:", normalizedCategory);
        return localResponses[normalizedCategory as keyof typeof localResponses][userType];
      }
      
      return "Impossible de contacter le service d'IA. Voici une réponse générale basée sur nos connaissances médicales. Pour une information plus précise, veuillez consulter un professionnel de santé.";
    }
  }
};
