
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TeamSection from '@/components/TeamSection';
import AmbitionsSection from '@/components/AmbitionsSection';
import RecruitmentSection from '@/components/RecruitmentSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Enhanced smooth scroll implementation for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId as string);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TeamSection />
        <AmbitionsSection />
        <RecruitmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
