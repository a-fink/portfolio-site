import projectData from '../../data/project-data.json';
import ProjectElement from './ProjectElement';

function Projects(){
    return (
        <div className='w-full bg-darkteal py-10 md:py-12 xl:py-16 scroll-mt-32 md:scroll-mt-24 xl:scroll-mt-14' id='projects'>
            <h2>Projects</h2>
            <div className='w-[80%] mx-auto flex flex-wrap justify-center pt-2 gap-6 xl:gap-10'>
                {projectData.projects.map(el =>
                    <ProjectElement key={el.id} project={el} />
                )}
            </div>
        </div>
    );
}

export default Projects;
