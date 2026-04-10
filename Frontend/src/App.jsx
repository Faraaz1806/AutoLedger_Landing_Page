import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Privacy from './components/Privacy';
import Comparison from './components/Comparison';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-dvh bg-[#0a0a0a] text-[#f0f0f0] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Privacy />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
