import '../styles/About.css';
import OfficerCard from '../components/OfficerCard';

import ProfilePicture from '../assets/17571cdf635b8156272109eaa9cb5900.jpg';

function About()
{
    return (
        <div className="outside">
            <div className="inside aboutSection">
                <h1>About Us</h1>
                <p>Our mission is to connect, engage, and introduce students to AI through workshops, collaborations, and projects.</p>
            </div>
            <div className='officers'>
                <OfficerCard picture={ProfilePicture} name={"Ahmed"} position={"President"}/>
            </div>
        </div>
    );
}

export default About;


//slide show with pictures before officers
//of previous events