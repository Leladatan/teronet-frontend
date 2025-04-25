import WelcomeSection from "@/views/main/home/ui/components/welcome-section/welcome-section";
import FindTeamSection from "@/views/main/home/ui/components/find-team-section/find-team-section";

const HomePage = () => {
  return (
    <section className="space-y-8">
      <WelcomeSection />
      <div className="container mx-auto px-4 py-8">
        <FindTeamSection />
      </div>
    </section>
  );
};

export default HomePage;
