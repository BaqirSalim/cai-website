import '../styles/About.css';
import OfficerCard from '../components/OfficerCard';

import ProfilePicture from '../assets/17571cdf635b8156272109eaa9cb5900.jpg';

const officersArray = [{picture: ProfilePicture, name: "Ahmed", position: "President"}, {picture: ProfilePicture, name: "Zeel", position: "Webmaster"}, {picture: ProfilePicture, name: "Humza", position: "Events Coordinator"}];

function About()
{
    return (
        <div className="outside">
            <div className="inside aboutSection">
                <h1>About Us</h1>
                <p>Our mission is to connect, engage, and introduce students to AI through workshops, collaborations, and projects.</p>
            </div>
            <div className='officers'>
                {/* <OfficerCard picture={ProfilePicture} name={"Ahmed"} position={"President"}/> */}
                {officersArray.map(officer => <OfficerCard picture={officer.picture} name={officer.name} position={officer.position}/>)}
            </div>
        </div>
    );
}

export default About;


//slide show with pictures of previous events before officers grid