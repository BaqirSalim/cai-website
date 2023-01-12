import {FaInstagram, FaLinkedin, FaDiscord} from 'react-icons/fa';

import '../styles/Footer.css';

function Footer()
{
    return (
    <div className='footer'>
        <FaLinkedin className='linkedin-logo' size="25px"/>
        <FaDiscord className='discord-logo' size="25px"/>
        <FaInstagram className='instagram-logo' size="25px"/>
    </div>
    );
}

export default Footer;