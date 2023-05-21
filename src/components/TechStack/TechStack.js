import techStack from '../../data/tech-stack-data.json';
import TechElement from './TechElement';

function TechStack(){
    const techLanguages = techStack.languages;
    const techFrontend = techStack.frontend;
    const techBackend = techStack.backend;
    const techTools = techStack.tools;

    return(
        <div className='w-full bg-darkblue py-10 md:py-12 xl:py-16 scroll-mt-32 md:scroll-mt-24 xl:scroll-mt-14' id='tech-stack'>
            <h2>My Tech Stack</h2>
            <div className='mx-3 lg:mx-8 flex flex-col justify-center items-center pt-2 gap-6 xl:gap-16'>
                <div>
                    <h3 className='my-2 py-2'>Programming Languages:</h3>
                    <div className='tech-stack-container'>
                    {techLanguages.map(el =>
                        <TechElement key={el.id} techElement={el}/>
                    )}
                    </div>
                </div>
                <div>
                <h3 className='my-2 py-2'>Front End:</h3>
                    <div className='tech-stack-container'>
                    {techFrontend.map(el =>
                        <TechElement key={el.id} techElement={el}/>
                    )}
                    </div>
                </div>
                <div>
                    <h3 className='my-2 py-2'>Back End and Databases:</h3>
                    <div className='tech-stack-container'>
                    {techBackend.map(el =>
                        <TechElement key={el.id} techElement={el}/>
                    )}
                    </div>
                </div>
                <div>
                    <h3 className='my-2 py-2'>Tools, Technologies, and Testing:</h3>
                    <div className='tech-stack-container'>
                    {techTools.map(el =>
                        <TechElement key={el.id} techElement={el}/>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
