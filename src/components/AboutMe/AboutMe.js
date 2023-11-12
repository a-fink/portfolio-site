import coderImage from '../../images/coder-girl.png';

function AboutMe(){
    return (
        <div className='flex-1 w-full flex flex-col justify-center items-center bg-darkroyalblue py-10 md:py-12 xl:py-16 scroll-mt-32 md:scroll-mt-24 xl:scroll-mt-14' id='about-me'>
            <h2 className="mt-10 lg:mt-0">About Me</h2>
            <div className='flex-1 mx-3 lg:mx-8 flex flex-wrap items-center justify-evenly gap-4 xl:gap-6'>
                <img src={coderImage} className='w-11/12 max-w-sm mx-auto py-2' title='image by jcomp on Freepik' alt='a woman working on a computer' />
                <div className="w-11/12 max-w-xl mx-auto text-white">
                    <p className='mb-3'>Results-driven Full Stack Engineer specializing in JavaScript, TypeScript, Node.js, and React. Passionate about creating seamless user experiences while tackling complex logic problems. Proven track record in full-stack development, collaborating across teams to deliver high-quality solutions that blend user-centric design with technical excellence.</p>
                    <p className='mb-3'>Do I sound like a good fit for your team? I'd love to hear from you!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
