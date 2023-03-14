import techStack from '../../data/tech-stack-data.json';

function TechStack(){
    const techProficient = techStack.proficient;
    const techFamiliar = techStack.familiar;

    return(
        <div className='w-full bg-darkgray py-4 md:py-6 xl:py-12'>
            <h1>My Tech Stack</h1>
            <div className='flex flex-wrap gap-6 justify-center pt-2 mx-3 lg:mx-8 lg:gap-8 xl:gap-24'>
                <div>
                    <h3 className='my-2 py-2'>Proficient</h3>
                    <div className='tech-stack-container'>
                    {techProficient.map(el =>
                        <div className='tech-stack-div' key={el.id}>
                            <img className='tech-stack-image' src={el.src} alt={el.name} title={el.name} aria-label={el.name} />
                            <p className='text-center text-white text-sm'>{el.name}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div>
                <h3 className='my-2 py-2'>Familiar</h3>
                    <div className='tech-stack-container'>
                    {techFamiliar.map(el =>
                        <div className='tech-stack-div' key={el.id}>
                        <img className='tech-stack-image' src={el.src} alt={el.name} title={el.name} aria-label={el.name} />
                        <p className='text-center text-white'>{el.name}</p>
                    </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
