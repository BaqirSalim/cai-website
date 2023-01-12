import { Link } from "react-router-dom";
import Logo from '../assets/cai-logo.png';
import '../styles/Navbar.css';

function Navbar()
{
    return(
        <nav className="navbar">
            <div className="leftSide">
                <Link to='/'>
                    <img src={Logo} alt="logo"/>
                </Link>
            </div>
            <div className="rightSide">
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/calendar'>Calendar</Link></li>
                    <li><Link to='/membership'>Membership</Link></li>
                    <li><Link to='/points'>Points</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;