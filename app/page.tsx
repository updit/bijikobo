import { Header } from '@/components/layout/Header';
import { Screen1Section } from '@/components/sections/Screen1Section';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Screen2Section } from '@/components/sections/Screen2Section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Screen1Section />
        <StatsSection />
        <ServicesSection />
        <ContactSection />
        <Screen2Section />
      </main>
    </>
  );
}
