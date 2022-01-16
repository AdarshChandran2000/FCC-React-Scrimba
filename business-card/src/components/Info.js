import profile from '../images/profile.jpeg';
import linkedin from '../images/linkedin.svg'

const Info = () => {
    return (
        <div className="info">
            <img className='info-image' src={profile} alt='image.jpg'/>
            <h2 className='info-title'>Adarsh Shinju Chandran</h2>
            <h4 className='info-position'>Frontend Developer</h4>
            <h5 className='info-website'> https://adarshchandran2000.github.io</h5>
            <div className='info-buttons'>
                <button className='info-email'> 
                    <img className='info-email-image' src='https://spng.subpng.com/20180720/cah/kisspng-computer-icons-email-icon-design-equipo-comercial-5b525b3cab2250.294453721532123964701.jpg' />
                    <h5 className='info-email-title'> Email </h5>
                </button>
                <button className='info-linkedin'> 
                    <img className='info-linkedin-image' src={linkedin} />
                    <h5 className='info-linkedin-title'> Linkedin </h5>
                </button>
            </div>
       </div>
    )
}

export default Info;