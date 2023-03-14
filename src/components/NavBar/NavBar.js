import emailLogo from '../../images/icons8-mail-120.png';
import githubLogo from '../../images/icons8-github-120.png';
import linkedinLogo from '../../images/icons8-linkedin-120.png';

function NavBar(){
    return (
        <nav className='w-full px-6 pt-2 pb-3 fixed z-20 top-0 flex flex-wrap justify-center xl:justify-between items-center gap-3 bg-darkgray'>
            <h1>Aubrey Finkelstein</h1>
            <div className='w-full xl:w-[55%] flex flex-wrap justify-center md:justify-evenly xl:justify-between gap-3'>
                <ul className='flex items-center'>
                    <li><a className='nav-link' href='#about-me'>About Me</a></li>
                    <li>|</li>
                    <li><a className='nav-link' href='#tech-stack'>Tech Stack</a></li>
                    <li>|</li>
                    <li><a className='nav-link' href='#projects'>Projects</a></li>
                </ul>
                <ul className='flex items-center gap-2'>
                    <li><a className='block graphic-link' href='https://www.linkedin.com/in/aubreyfinkelstein' target="_blank" rel="noreferrer"><img src={linkedinLogo} title='Connect via LinkedIn' alt='LinedIn' className='contact-link-image'/></a></li>
                    <li><a className='block graphic-link' href='https://github.com/a-fink/' target="_blank" rel="noreferrer"><img src={githubLogo} title='View my GitHub' alt='GitHub' className='contact-link-image'/></a></li>
                    <li><a className='block graphic-link' href='mailto:aubreyfinkelstein@gmail.com' target="_blank" rel="noreferrer"><img src={emailLogo} title='Contact Me' alt='Email' className='contact-link-image'/></a></li>
                    <li><button className='px-2 py-0.25 graphic-link'><a className='block' href='https://drive.google.com/file/d/1tjtNuPgVn4a0JFhTU6MRE0m0xz3sb3j-/view?usp=share_link' target="_blank" rel="noreferrer">Resume</a></button></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
