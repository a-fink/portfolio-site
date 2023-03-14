import techStack from '../../data/tech-stack-data.json';
import TechElement from './TechElement';

function TechStack(){
    const techProficient = techStack.proficient;
    const techFamiliar = techStack.familiar;

    return(
        <div className='w-full bg-darkblue py-10 md:py-12 xl:py-16 scroll-mt-32 md:scroll-mt-24 xl:scroll-mt-14' id='tech-stack'>
            <h2>My Tech Stack</h2>
            <div className='mx-3 lg:mx-8 flex flex-wrap justify-center pt-2 gap-6 xl:gap-16'>
                <div>
                    <h3 className='my-2 py-2'>Proficient</h3>
                    <div className='tech-stack-container'>
                    {techProficient.map(el =>
                        <TechElement key={el.id} techElement={el}/>
                    )}
                    </div>
                </div>
                <div>
                <h3 className='my-2 py-2'>Familiar</h3>
                    <div className='tech-stack-container'>
                    {techFamiliar.map(el =>
                        <TechElement key={el.id} techElement={el}/>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
