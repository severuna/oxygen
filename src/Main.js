import { Route, Routes } from 'react-router-dom';
import './Main.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Interior from './pages/Interior/Interior';
import Available from './pages/Available/Available';
import Activities from './pages/Activities/Activities';
import Contacts from './pages/Contacts/Contacts';
import Bag from './pages/Bag/Bag';


const Main = () => {
    return (
        <div className='main column'>
            <NavBar />
            <Routes>
                <Route path='/oxygen/' element={<Home />} />
                <Route path='/oxygen/about' element={<About />} />
                <Route path='/oxygen/works' element={<Works />} />
                <Route path='/oxygen/interior' element={<Interior />} />
                <Route path='/oxygen/available-works' element={<Available />} />
                <Route path='/oxygen/activities' element={<Activities />} />
                <Route path='/oxygen/contacts' element={<Contacts />} />
                <Route path='/oxygen/bag' element={<Bag />} />
            </Routes>
        </div>
    );
};

export default Main;