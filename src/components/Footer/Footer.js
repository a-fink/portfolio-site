import emailLogo from '../../images/icons8-mail-120.png';
import githubLogo from '../../images/icons8-github-120.png';
import linkedinLogo from '../../images/icons8-linkedin-120.png';

function Footer(){
    return (
        <footer className="w-full py-3 flex flex-col items-center gap-4 bg-mediumgray" id="contact">
            <p className='text-2xl font-bold text-center'>Let's Get In Touch!</p>
            <ul className='flex items-center gap-3'>
                <li><a className='block graphic-link' href='https://www.linkedin.com/in/aubreyfinkelstein' target="_blank" rel="noreferrer"><img src={linkedinLogo} title='Connect via LinkedIn' alt='LinedIn' className='contact-link-image'/></a></li>
                <li><a className='block graphic-link' href='https://github.com/a-fink/' target="_blank" rel="noreferrer"><img src={githubLogo} title='View my GitHub' alt='GitHub' className='contact-link-image'/></a></li>
                <li><a className='block graphic-link' href='mailto:aubreyfinkelstein@gmail.com' target="_blank" rel="noreferrer"><img src={emailLogo} title='Contact Me' alt='Email' className='contact-link-image'/></a></li>
                <li><button className='px-2 py-0.25 graphic-link'><a className='block' href='https://drive.google.com/file/d/1tjtNuPgVn4a0JFhTU6MRE0m0xz3sb3j-/view?usp=share_link' target="_blank" rel="noreferrer">Resume</a></button></li>
            </ul>
        </footer>
    );
}

export default Footer;
