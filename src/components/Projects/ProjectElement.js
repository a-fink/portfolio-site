import shoppingListScreenshot from '../../images/shopping-list-screenshot.png';
import flagsScreenshot from '../../images/flags-screenshot.png';
import authenticateMeScreenshot from '../../images/login-screenshot.png';
import calculatorScreenshot from '../../images/calculator-screenshot.png';

function ProjectElement({project}){
    const images = [shoppingListScreenshot, flagsScreenshot, authenticateMeScreenshot, calculatorScreenshot];

    return(
        <>
            <div className="project-div">
                <h3>{project.name}</h3>
                <img className='project-screenshot' src={images[Number(project.id) - 1]} alt={`${project.name} screenshot`} />
                <p className='flex-1 w-[80%] mx-auto text-center'>{project.techstack}</p>
                <p className='w-[80%] mx-auto'>{project.description}</p>
                <div className='w-[80%] my-2 flex justify-evenly gap-4'>
                    <button className='text-button graphic-link'><a className='block tech-stack-link' href={project.github} target="_blank" rel="noreferrer">GitHub</a></button>
                    <button className='text-button graphic-link'><a className='block tech-stack-link' href={project.live} target="_blank" rel="noreferrer">Live Site</a></button>
                </div>
            </div>
        </>
    );
}

export default ProjectElement;
