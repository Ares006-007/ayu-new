import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ProblemStats from "./components/ProblemStats";
import Stakeholders from "./components/Stakeholders";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Credibility from "./components/Credibility";
import ExpectedGrowth from "./components/ExpectedGrowth";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Credibility />
        <HowItWorks />
        <ProblemStats />
        <Stakeholders />
        <ExpectedGrowth />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
