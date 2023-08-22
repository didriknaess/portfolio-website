import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from '../pages/About';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';


const Main = () => {
  return (
    <Routes>
        <Route path='/about' Component={About} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default Main;