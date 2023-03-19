import ContactButtons
 from "../ContactButtons/ContactButtons";
function NavBar(){
    return (
        <nav className='w-full px-6 pt-2 pb-3 fixed z-20 top-0 flex flex-wrap justify-center xl:justify-between items-center gap-3 bg-darkgray'>
            <h1>Aubrey Finkelstein</h1>
            <div className='w-full xl:w-[55%] flex flex-wrap justify-center md:justify-evenly xl:justify-between gap-3'>
                <ul className='flex items-center'>
                    <li><a className='nav-link' href='#about-me'>About</a></li>
                    <li>|</li>
                    <li><a className='nav-link' href='#tech-stack'>Stack</a></li>
                    <li>|</li>
                    <li><a className='nav-link' href='#projects'>Projects</a></li>
                    <li>|</li>
                    <li><a className='nav-link' href='#contact'>Contact</a></li>
                </ul>
                <ContactButtons />
            </div>
        </nav>
    );
}

export default NavBar;
