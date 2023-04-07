//note: The assests/pictures used have varying sizes, so they also have varying transparent borders. This needs to be fixed at some point
import { Link } from "react-router-dom";
// import Logo from '../assets/cai-logo.png';
import About from '../assets/magnifying-glass-vector.png';
import Calendar from '../assets/paper clip vector.png';
import Membership from '../assets/lightbulb vector.png';
import Points from '../assets/coin-vector.png';
import Contact from '../assets/mail vector.png';
import '../styles/Navbar.css';
import Mascot from '../assets/cai mascot.png';

function NavButton({buttonName, url, buttonSize})
{
    return (
        <div className="button-style">
            <img src={url} width={buttonSize} height={buttonSize} alt={buttonName}/>
            <p>{buttonName}</p>
        </div>
    );
}
function Navbar()
{ 
    return(
        <nav className="navbar">
            <div className="leftSide">
                <Link to='/'>
                    <img src={Mascot} alt="logo" className="menu-button"/>
                </Link>
            </div>
            <div className="rightSide">
                <ul>
                    <li className="menu-button"><Link to='/about' ><NavButton buttonName={"About"} url={About} buttonSize={40}/></Link></li>
                    <li className="menu-button"><Link to='/calendar'><NavButton buttonName={"Calendar"} url={Calendar} buttonSize={40}/></Link></li>
                    <li className="menu-button"><Link to='/membership'><NavButton buttonName={"Membership"} url={Membership} buttonSize={40}/></Link></li>
                    <li className="menu-button"><Link to='/points'><NavButton buttonName={"Points"} url={Points} buttonSize={40}/></Link></li>
                    <li className="menu-button"><Link to='/contact'><NavButton buttonName={"Contact"} url={Contact} buttonSize={40}/></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

//take away points
//color too jarring. change to /\