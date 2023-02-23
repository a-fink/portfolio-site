import techStack from '../../data/tech-stack-data.json';

function TechStack(){
    const techProficient = techStack.proficient;
    const techFamiliar = techStack.familiar;

    return(
        <div>
            <h1>My Tech Stack</h1>
            <div className='mx-3 flex flex-wrap gap-3 justify-center lg:flex-nowrap'>
                <div>
                    <h3>Proficient</h3>
                    <div className='tech-stack-container'>
                    {techProficient.map(el =>
                        <img className='tech-stack-image' src={el.src} alt={el.name} title={el.name} aria-label={el.name} />
                    )}
                    </div>
                </div>
                <div>
                <h3>Familiar</h3>
                    <div className='tech-stack-container'>
                    {techFamiliar.map(el =>
                        <img className='tech-stack-image' src={el.src} alt={el.name} title={el.name} aria-label={el.name} />
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
