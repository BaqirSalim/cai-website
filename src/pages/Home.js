import '../styles/Home.css';
import Computer from '../assets/computer-vector.png';
import Keyboard from '../assets/keyboard-vector.png';

function Home()
{
    return (
        <div className='parent'>
            <div className='child keyboard'>
                <img src={Keyboard} alt="keyboard" className='image'/>
            </div>
            <div className='child org-name'>
                <h1>COUGAR</h1>
                <h1>AI</h1>
            </div>
            <div className='child computer'>
                <img src={Computer} alt="computer" className='image'/>
            </div>
        </div>
    );
}

export default Home;