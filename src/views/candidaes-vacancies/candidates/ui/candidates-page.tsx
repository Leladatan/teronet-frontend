import HeroSection from "@/views/candidaes-vacancies/candidates/ui/components/hero-section/hero-section";
import CandidatesSection from "@/views/candidaes-vacancies/candidates/ui/components/candidates-section/candidates-section";

const CandidatesPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <CandidatesSection />
    </section>
  );
};

export default CandidatesPage;
