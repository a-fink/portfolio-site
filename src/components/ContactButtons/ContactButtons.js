import emailLogo from '../../images/icons8-mail-120.png';
import githubLogo from '../../images/icons8-github-120.png';
import linkedinLogo from '../../images/icons8-linkedin-120.png';

function ContactButtons(){
    const emailClickHandler = () => {
        navigator.clipboard.writeText('aubreyfinkelstein@gmail.com');
        alert('Email copied to clipboard');
    }

    return(
        <ul className='flex items-center gap-3'>
            <li><a className='block graphic-link' href='https://www.linkedin.com/in/aubreyfinkelstein' target="_blank" rel="noreferrer"><img src={linkedinLogo} title='Connect via LinkedIn' alt='LinedIn' className='contact-link-image'/></a></li>
            <li><a className='block graphic-link' href='https://github.com/a-fink/' target="_blank" rel="noreferrer"><img src={githubLogo} title='View my GitHub' alt='GitHub' className='contact-link-image'/></a></li>
            <li><button className='block graphic-link' onClick={emailClickHandler}><img src={emailLogo} title='Copy Email to Clipboard' alt='Email' className='contact-link-image'/></button></li>
            <li><button className='px-2 py-0.5 text-button graphic-link'><a className='block' href='https://drive.google.com/file/d/1tjtNuPgVn4a0JFhTU6MRE0m0xz3sb3j-/view?usp=share_link' target="_blank" rel="noreferrer">Resume</a></button></li>
        </ul>
    );
}

export default ContactButtons;
