
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ambitions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/50 to-white">
      <header className="bg-gradient-to-r from-rose-300 to-red-400 py-4 px-6 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Link to="/care" className="text-white mr-4 hover:bg-rose-400 p-2 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold text-white">Nos Ambitions</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-rose-500 mb-6">Notre vision pour l'avenir de C.A.R.E</h2>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-rose-100 text-rose-600 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-rose-500 mb-2">Connectivité</h3>
                  <p className="text-gray-700">
                    Brancher notre base de données experte aux bases de données médicales (dossier médical, bilans 
                    biologiques) et objets connectés pour optimiser la prise en charge.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-rose-100 text-rose-600 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-rose-500 mb-2">Intelligence artificielle avancée</h3>
                  <p className="text-gray-700">
                    Continuer à entraîner nos algorithmes sur les spécialistes du domaine afin d'améliorer leurs performances.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-rose-100 text-rose-600 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-rose-500 mb-2">Collaboration multidisciplinaire</h3>
                  <p className="text-gray-700">
                    Développer cette solution à diverses spécialités médicales pour devenir la référence française.
                  </p>
                </div>
              </div>
            </div>
          </div>

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

export default Ambitions;
