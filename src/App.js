import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <NavBar />
      <div className='w-full mt-32 md:mt-24 xl:mt-14'>
        <AboutMe />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
