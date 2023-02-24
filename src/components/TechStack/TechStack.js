import techStack from '../../data/tech-stack-data.json';

function TechStack(){
    const techProficient = techStack.proficient;
    const techFamiliar = techStack.familiar;

    return(
        <div className='w-full bg-gray-800 my-4 py-4'>
            <h1 className='my-2 py-2'>My Tech Stack</h1>
            <div className='flex flex-wrap gap-6 justify-center mx-3 lg:mx-8 lg:gap-8 lg:flex-nowrap xl:gap-24'>
                <div>
                    <h3 className='my-2 py-2'>Proficient</h3>
                    <div className='tech-stack-container'>
                    {techProficient.map(el =>
                        <img className='tech-stack-image' src={el.src} key={el.id} alt={el.name} title={el.name} aria-label={el.name} />
                    )}
                    </div>
                </div>
                <div>
                <h3 className='my-2 py-2'>Familiar</h3>
                    <div className='tech-stack-container'>
                    {techFamiliar.map(el =>
                        <img className='tech-stack-image' src={el.src} key={el.id} alt={el.name} title={el.name} aria-label={el.name} />
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
