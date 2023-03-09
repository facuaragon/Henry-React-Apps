import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile'
import Person from './components/Person';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='profile' element={<Profile/>}>
          <Route path=':person' element={<Person/>}/>
        </Route>

        <Route path=":error" element={<Error/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
