import '../styles/Home.css';
import Computer from '../assets/computer-vector.png';
import Keyboard from '../assets/keyboard-vector.png';
// import Mascot from '../assets/cai mascot.png';

function Home()
{
    return (
        <div className='parent'>
            <div className='child keyboard'>
                <img src={Keyboard} alt="keyboard" className='image i-want-hover'/>
            </div>
            <div className='child org-name'>
                {/* <img src={Mascot} alt="mascot" className='mascot'/> */}
                <div className='i-want-hover'>
                    <h1>COUGAR</h1>
                    <h1>AI</h1>
                </div>                
            </div>
            <div className='child computer'>
                <img src={Computer} alt="computer" className='image i-want-hover'/>
            </div>
        </div>
    );
}

export default Home;