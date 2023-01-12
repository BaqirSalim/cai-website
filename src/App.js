import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import Footer from './components/Footer';
import Points from './pages/Points';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/calendar' element={<Calendar />}/>
          <Route path='/membership' element={<Membership />}/>
          <Route path='/points' element={<Points />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
