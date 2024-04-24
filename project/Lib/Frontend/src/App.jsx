import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import Map from './components/Map/Map';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
