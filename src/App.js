import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <NavBar />
      <div className='w-full mt-32 md:mt-24 xl:mt-14'>
        <AboutMe />
        <TechStack />
      </div>
    </div>
  );
}

export default App;
