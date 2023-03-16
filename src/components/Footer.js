import {FaInstagram, FaLinkedin, FaDiscord} from 'react-icons/fa';

import '../styles/Footer.css';

function Footer()
{
    return (
    <div className='footer'>
        <div className='icons'>
        <FaLinkedin className='linkedin-logo' size="25px" color='#FF5756' title='LinkedIn'/>
        <FaDiscord className='discord-logo' size="25px" color='#FF5756' title='Discord'/>
        <FaInstagram className='instagram-logo' size="25px" color='#FF5756' title='Instagram'/>
        </div>
    </div>
    );
}

export default Footer;