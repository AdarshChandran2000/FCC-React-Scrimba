import image from '../images/photo-grid.png';

const Hero = () => (
    <div className='hero'>
        <img className='hero-photo' src={image} alt='photo-grid'/>
        <h1 className='hero-header'> Online Experiences </h1>
        <p className='hero-para'> Join unqiue interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
);

export default Hero;