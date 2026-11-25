
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PourquoiCare: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 to-white">
      <header className="bg-gradient-to-r from-rose-300 to-red-400 py-4 px-4 md:px-6 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Link to="/care" className="text-white mr-4 hover:bg-rose-400 p-2 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold text-white">Pourquoi C.A.R.E ?</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-8 md:py-12 px-4 md:px-6" id="pourquoi-care">
        <div className="max-w-4xl mx-auto">
          <Card className="p-5 md:p-6 mb-8">
            <h3 className="text-xl font-bold text-rose-500 mb-4">Pourquoi C.A.R.E ?</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <span className="font-bold text-sm">1</span>
                </div>
                <p>Faciliter l'accès à la prévention : dépistage, diagnostic, traitements, orientations</p>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <span className="font-bold text-sm">2</span>
                </div>
                <p>Informations scientifiquement validées et constamment mises à jour</p>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <span className="font-bold text-sm">3</span>
                </div>
                <p>Recommandations adaptées au profil du patient</p>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <span className="font-bold text-sm">4</span>
                </div>
                <p>Lutter contre la désinformation : en faire l'outil fiable de référence</p>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-100 text-rose-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <span className="font-bold text-sm">5</span>
                </div>
                <p>Gain de temps et amélioration de la qualité des soins</p>
              </li>
            </ul>
          </Card>

          <Card className="mb-8 overflow-hidden">
            <div className="bg-rose-300 text-white p-4 md:p-5">
              <h2 className="text-xl font-bold mb-2">La prévention sauve des vies</h2>
              <p className="text-sm md:text-base">Les maladies chroniques représentent 71% des décès dans le monde ; la majorité peuvent être prévenues</p>
            </div>
            <div className="p-3 md:p-5">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-gray-50">
                    <TableRow>
                      <TableHead className="font-medium text-xs md:text-sm">Facteur de risque</TableHead>
                      <TableHead className="text-center font-medium text-xs md:text-sm">Prévalence</TableHead>
                      <TableHead className="font-medium text-xs md:text-sm">Mortalités associées</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="bg-orange-50/50 text-xs md:text-sm">Sédentarité</TableCell>
                      <TableCell className="text-center font-bold text-xs md:text-sm">&gt;40 %</TableCell>
                      <TableCell className="text-xs md:text-sm"><span className="font-bold">4<sup>ème</sup></span> cause de mortalité dans le monde</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="bg-orange-50/50 text-xs md:text-sm">Hypertension artérielle</TableCell>
                      <TableCell className="text-center font-bold text-xs md:text-sm">30 %</TableCell>
                      <TableCell className="text-xs md:text-sm"><span className="font-bold">1<sup>ère</sup></span> cause d'accident vasculaire cérébral (AVC)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="bg-orange-50/50 text-xs md:text-sm">Dyslipidémies</TableCell>
                      <TableCell className="text-center font-bold text-xs md:text-sm">30 %</TableCell>
                      <TableCell className="text-xs md:text-sm"><span className="font-bold">2<sup>ème</sup></span> cause d'AVC et d'infarctus du myocarde (IDM)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="bg-orange-50/50 text-xs md:text-sm">Tabac</TableCell>
                      <TableCell className="text-center font-bold text-xs md:text-sm">25 %</TableCell>
                      <TableCell className="text-xs md:text-sm"><span className="font-bold">1<sup>ère</sup></span> cause d'IDM et de cancer du poumon</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="bg-orange-50/50 text-xs md:text-sm">Stéatose hépatique</TableCell>
                      <TableCell className="text-center font-bold text-xs md:text-sm">25 %</TableCell>
                      <TableCell className="text-xs md:text-sm"><span className="font-bold">1<sup>ère</sup></span> cause d'hépatopathie</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="bg-orange-50/50 text-xs md:text-sm">Obésité</TableCell>
                      <TableCell className="text-center font-bold text-xs md:text-sm">18 %</TableCell>
                      <TableCell className="text-xs md:text-sm">Complications : diabète, HTA, dyslipidémie, stéatose hépatique</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="bg-orange-50/50 text-xs md:text-sm">Diabète</TableCell>
                      <TableCell className="text-center font-bold text-xs md:text-sm">6,5 %</TableCell>
                      <TableCell className="text-xs md:text-sm"><span className="font-bold">1<sup>ère</sup></span> cause d'insuffisance rénale terminale</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 p-3 bg-rose-50 rounded-lg text-center">
                <p className="font-medium text-rose-500 text-xs md:text-base">
                  Connaissez vous un médicament qui réduit de 30% les cancers, les maladies cardiovasculaires et les maladies neurodégénératives ? L'activité physique !
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Link to="/care" className="inline-flex items-center text-rose-500 hover:text-rose-600">
              <ArrowLeft className="mr-2" size={16} />
              Retour à C.A.R.E
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PourquoiCare;
