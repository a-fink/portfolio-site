import techStack from './data/tech-stack-data.json';

function App() {
  const techProficient = techStack.proficient;
  const techFamiliar = techStack.familiar;

  return (
    <div className='bg-gray-800 h-screen'>
      <h1 className="test-class">Hello World</h1>
      <div className='flex flex-wrap'>
        <div className='flex flex-wrap w-1/2 h-1/2 mx-auto justify-center items-center gap-3'>
          {techProficient.map(el =>
            <img className='tech-stack-image' src={el.src} alt={el.name} title={el.name} aria-label={el.name} />
          )}
        </div>
        <div className='flex flex-wrap w-1/2 h-1/2 mx-auto justify-center items-center gap-3'>
          {techFamiliar.map(el =>
            <img className='tech-stack-image' src={el.src} alt={el.name} title={el.name} aria-label={el.name} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
