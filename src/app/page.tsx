import Header from "../app/_components/Header";
import Hero from "../app/_components/Hero";
import Features from "../app/_components/Features";
import SocialProof from "../app/_components/SocialProof"; 
import Pricing from "../app/_components/Pricing";
import Footer from "../app/_components/Footer";
import FAQ from "../app/_components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 scroll-smooth">
      <Header />
      
      {/* Os IDs agora estarão dentro de cada componente */}
      <Hero />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      
      <Footer />
    </main>
  );
}