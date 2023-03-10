import coderImage from '../../images/coder-girl.jpg';

function AboutMe(){
    return (
        <div className='flex-1 w-full flex flex-col justify-center items-center bg-darkblue py-4 md:py-6 xl:py-12'>
            <h1>About Me</h1>
            <div className='flex-1 mx-3 lg:mx-8 flex flex-wrap items-center justify-evenly xl:gap-4'>
                <img src={coderImage} className='w-11/12 max-w-sm mx-auto' title='image by jcomp on Freepik' alt='a woman working on a computer, at a desk, with a dog nearby' />
                <div className="w-11/12 max-w-xl mx-auto text-white">
                    <p className='mb-3'>I am Full-Stack Software Engineer specializing in JavaScript / Node.js and React. Looking to leverage my diverse experience and problem-solving skills to build impactful, user-friendly software.</p>
                    <p className='mb-3'>I have a passion for puzzles and enjoy digging into the details to develop creative solutions. I love connecting with others through my work and believe in technology's ability to improve lives. I strive for continuous improvement, and am eager to continue learning while contributing to a professional development team. In essence, I am a problem solver looking to make an impact.</p>
                    <p className='mb-3'>Do I sound like a good fit for your team? I'd love to hear from you!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
