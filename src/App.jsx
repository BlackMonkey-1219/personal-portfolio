import styles from './app.module.css'
import { BioSection, ContactSection, Footer, HeroSection, Navbar, ProjectSection, SkillSection } from './components';

function App() {

  return (
    <main className={styles.app}>
      <Navbar />
      <HeroSection />
      <BioSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App
