import '../styles/About.css';

import ProfilePicture from '../assets/17571cdf635b8156272109eaa9cb5900.jpg';


function OfficerCard({name, position, picture})
{
    return (
        <div className='card-outline'>
            <img src={ProfilePicture} alt={position} className="profile-pic"/>
            <h1>{name}</h1>
            <h2>{position}</h2>
        </div>
    );
}


function About()
{
    return (
        <div className="parent">
            <div className="child aboutSection">
                <h1>About Us</h1>
                <p>Our mission is to connect, engage, and introduce students to AI through workshops, collaborations, and projects.</p>
                <OfficerCard picture={ProfilePicture} name={"Ahmed"} position={"President"}/>
            </div>
        </div>
    );
}

export default About;


//slide show with pictures before officers
//of previous events