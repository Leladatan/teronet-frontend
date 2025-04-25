import HomeTitle from '@/views/main/home/ui/components/home-title';
import HomeNavigationCards from '@/views/main/home/ui/components/home-navigation-cards';
import HomeUserCards from '@/views/main/home/ui/components/home-user-cards';

const HomePage = () => {
  return (
    <section className="space-y-8">
      <HomeTitle />
      <HomeNavigationCards />
      <HomeUserCards />
    </section>
  );
};

export default HomePage;
