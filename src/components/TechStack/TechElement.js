function TechElement({ techElement }){
    return (
        <div className='tech-stack-div'>
            <img className='tech-stack-image' src={techElement.src} alt={techElement.name} title={techElement.name} aria-label={techElement.name} />
            <p className='text-center text-white text-sm'>{techElement.name}</p>
        </div>
    );
}

export default TechElement;
