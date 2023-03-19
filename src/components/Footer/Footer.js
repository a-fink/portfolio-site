import ContactButtons from "../ContactButtons/ContactButtons";

function Footer(){
    return (
        <footer className="w-full py-3 flex flex-col items-center gap-4 bg-mediumgray" id="contact">
            <p className='text-2xl font-bold text-center'>Let's Get In Touch!</p>
            <ContactButtons />
        </footer>
    );
}

export default Footer;
