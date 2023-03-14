import techStack from '../../data/tech-stack-data.json';

function TechStack(){
    const techProficient = techStack.proficient;
    const techFamiliar = techStack.familiar;

    return(
        <div className='w-full bg-darkblue py-4 md:py-6 xl:py-8 scroll-mt-32 md:scroll-mt-24 xl:scroll-mt-14' id='tech-stack'>
            <h2>My Tech Stack</h2>
            <div className='mx-3 lg:mx-8 flex flex-wrap justify-center pt-2 gap-6 xl:gap-16'>
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
                        <p className='text-center text-white text-sm'>{el.name}</p>
                    </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
